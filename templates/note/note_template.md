<%*
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 📅 Date for naming
const today = tp.date.now("YYYY-MM-DD");

// 🔤 Ask for the note title
const baseName = await tp.system.prompt("Titel der Notiz");
if (!baseName) {
  new Notice("🚫 Kein Titel eingegeben.");
  tR = "❌ Abbruch – Kein Titel.";
  return;
}

// 📂 Folder setup
const noteName = `${baseName} - ${today}`;
const folderName = `${today} - ${baseName}`;
const moduleFolder = tp.file.folder(true);
const noteFolder = `${moduleFolder}/${folderName}`;
const notePath = `${noteFolder}/${noteName}`;
const quellenFolder = `${noteFolder}/Quellen`;

// 📁 Create folders
await app.vault.createFolder(noteFolder).catch(() => {});
await app.vault.createFolder(quellenFolder).catch(() => {});

// 📄 Read tags from current file's frontmatter (module overview)
const overviewFile = app.workspace.getActiveFile();
if (!overviewFile) {
  new Notice("❌ Modulübersicht nicht erkannt.");
  tR = "❌ Abbruch – Keine aktive Datei.";
  return;
}

const overviewCache = app.metadataCache.getFileCache(overviewFile);
const overviewTags = overviewCache?.frontmatter?.Tags;

let tags = [];

if (overviewCache?.frontmatter) {
  const raw = overviewCache.frontmatter.Tags;


  if (typeof raw === "string") {
    tags = [raw];
  } else if (Array.isArray(raw)) {
    tags = raw;
  }
}

if (!tags.length) {
  new Notice("⚠️ Keine Tags in der Modulübersicht-Frontmatter gefunden.");
} else {
  console.log("📎 Tags aus Modulübersicht:", tags);
}


// Read static template File
const staticTemplatePath = "templates/note/note_content_template.md";
const templateFile = await app.vault.getAbstractFileByPath(staticTemplatePath);

if (!templateFile) {
  new Notice("❌ Inhaltstemplate nicht gefunden.");
  tR = "❌ Abbruch – Template fehlt.";
  return;
}

const templateContent = await app.vault.read(templateFile);

// 📝 Create note content
const content = `---
erstelldatum: ${today}
tags: ${tags}
---

${templateContent}
`;

await tp.file.create_new(content, notePath);
await sleep(300); // Let Obsidian update file index

// 🔗 Insert link into module overview under 📝 Vorlesungsnotizen
let overviewText = await app.vault.read(overviewFile);
const heading = "## 📝 Vorlesungsnotizen";
const linkLine = `- [[${notePath}|${noteName}]]`;

if (!overviewText.includes(heading)) {
  overviewText += `\n\n${heading}\n${linkLine}`;
} else if (!overviewText.includes(linkLine)) {
  const lines = overviewText.split("\n");
  const headingIndex = lines.findIndex(line => line.trim() === heading);
  let insertIndex = headingIndex + 1;

  while (lines[insertIndex]?.startsWith("- ")) insertIndex++;
  lines.splice(insertIndex, 0, linkLine);
  overviewText = lines.join("\n");
}

await app.vault.modify(overviewFile, overviewText);

// ✅ Done
tR = `📝 Notiz erstellt: [[${notePath}]]  
📎 Verlinkt in [[${overviewFile.path}]]  
🏷️ Tags: [${tags}]  
📂 Quellenordner: \`${quellenFolder}\``;
%>
