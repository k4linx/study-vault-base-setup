<%*
const modalForm = app.plugins.plugins.modalforms.api;
const result = await modalForm.openForm('module_creation');
console.log(result)
if (result.status === 'cancelled' || Object.keys(result).length === 0) {
  new Notice("🚫 Modulerstellung abgebrochen - Keine Aktion ausgeführt.");
  tR = "❌ Keine Aktion ausgeführt – Formular wurde geschlossen.";
  return null;
}

// 🔹 2. Extract form values
const {
  short,
  course,
  professor,
  ects,
  description,
  learning_objectives,
  verification,
  weekday,
  time_from,
  time_to,
  tags
} = result;

const time = time_from && time_to ? `${time_from}–${time_to}` : "";

// 🔹 3. Get current semester from Home.md
const homeFile = await app.vault.getAbstractFileByPath("Home.md");
const homeText = await app.vault.read(homeFile);

const section = homeText.split("## 📅 Aktives Semester")[1]?.split("\n##")[0];
if (!section) throw new Error("Kein Aktives Semester in Home.md gefunden.");
const match = section.match(/\[\[.*?\|(.*?)\]\]/);
const semester = match?.[1];
if (!semester) throw new Error("No alias found in embedded semester link.");

// 🔹 4. Format tags
const rawTags = tags
  ? tags.value.split(",").map(t => t.trim()).filter(Boolean)
  : [];
const allTags = [short, ...rawTags];
const tagsFormatted = allTags.map(tag => `#${tag}`).join(" ");

// Read static template File
const staticTemplatePath = "templates/module/module_content_template.md";
const templateFile = await app.vault.getAbstractFileByPath(staticTemplatePath);

if (!templateFile) {
  new Notice("❌ Inhaltstemplate nicht gefunden.");
  tR = "❌ Abbruch – Template fehlt.";
  return;
}

const templateContent = await app.vault.read(templateFile);
// 🔹 5. Create note
const date = tp.date.now("YYYY-MM-DD");
const folder = `${semester}/Module/${short} - ${course}`;
const filename = `${short} - ${course}`;
const filepath = `${folder}/${filename}`;

const content = `---
Semester: "${semester}"
Dozent: "${professor}"
Modul: "${course}"
Kürzel: "${short}"
ECTS: "${ects}"
Leistungsbeurteilung: "${verification}"
Erstelldatum: "${date}"
Tags: [${allTags.join(", ")}]
---

${templateContent}

## 📄 Modulbeschrieb
${description}

## 💡 Lernziele
${learning_objectives}
`;

await app.vault.createFolder(folder).catch(() => {});
await tp.file.create_new(content, filepath);
await sleep(300);

// 🔹 6. Update semester overview
const semesterFolder = await app.vault.getAbstractFileByPath(`${semester}`);
const overviewFile = semesterFolder?.children?.find(file => file.name.startsWith(`${semester} - `));
if (!overviewFile) throw new Error(`Keine Übersicht für ${semester} gefunden.`);

let overviewText = await app.vault.read(overviewFile);
const lines = overviewText.split("\n");
const headerIndex = lines.findIndex(l => l.trim().startsWith("| Kürzel") && l.includes("Tags"));
const insertIndex = headerIndex >= 0 ? headerIndex + 2 : lines.length;

const linkedShort = `[[${filepath}\\|${short}]]`;
const newRow = `| ${linkedShort} | ${course} | ${ects} | ${verification} | ${weekday} | ${time} | ${tagsFormatted} |`;

lines.splice(insertIndex, 0, newRow);
await app.vault.modify(overviewFile, lines.join("\n"));

tR = `✅ Modul erstellt: [[${filepath}]]  
📋 Eingetragen in [[${overviewFile.path}]]`;
%>
