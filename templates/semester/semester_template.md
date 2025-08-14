<%*
// 🟦 Open the Modal Form
const modalForm = app.plugins.plugins.modalforms?.api;
const result = await modalForm.openForm("semester_creation");

if (result.status === 'cancelled' || Object.keys(result).length === 0) {
  new Notice("🚫 Semestererstellung abgebrochen – Keine Aktion ausgeführt.");
  tR = "❌ Keine Aktion ausgeführt – Formular wurde geschlossen.";
  return;
}

// 🟦 Extract form values
const semesterAlias = result.semester_short;
const semesterTitle = result.semester;

// 📄 Read static template content
const staticTemplatePath = "templates/semester/semester_content_template.md";
const templateFile = await app.vault.getAbstractFileByPath(staticTemplatePath);

if (!templateFile) {
  new Notice("❌ Inhaltstemplate nicht gefunden.");
  tR = "❌ Abbruch – Template fehlt.";
  return;
}

const templateContent = await app.vault.read(templateFile);

// 🗂️ Create the folder and overview note
const folder = `${semesterAlias}`;
await app.vault.createFolder(folder).catch(() => {});

const overviewPath = `${folder}/${semesterAlias} - ${semesterTitle}.md`;
const overviewContent = `## 📚 Module

| Kürzel | Name | ECTS | Leistungsbeurteilung | Wochentag | Zeit | Tags |
| ------ | ---- | ---- | -------------------- | --------- | ---- | ---- |
|        |      |      |                      |           |      |      |
${templateContent}
`;

await app.vault.create(overviewPath, overviewContent);
await sleep(500);

// 🏠 Modify Home.md
const homePath = "Home.md";
const homeFile = await app.vault.getAbstractFileByPath(homePath);
let homeText = await app.vault.read(homeFile);
await sleep(300);

// 📍 Locate Aktives Semester section
const activeHeading = "## 📅 Aktives Semester";
let previousAliasLine = null;
let updatedText = "";

if (homeText.includes(activeHeading)) {
  // 🧠 Find and replace previous active semester if present
  const activeMatch = homeText.match(/(## 📅 Aktives Semester\s*\n)(!?\[\[.*?\|.*?\]\])/);
  previousAliasLine = activeMatch?.[2];
  const newActive = `${activeHeading}\n[[${semesterAlias} - ${semesterTitle}|${semesterAlias}]]`;
  updatedText = activeMatch
    ? homeText.replace(activeMatch[0], newActive)
    : homeText.replace(activeHeading, `${newActive}`);
} else {
  // 🔧 Heading not present — insert new heading at top
  const newSection = `${activeHeading}\n[[${semesterAlias} - ${semesterTitle}|${semesterAlias}]]\n\n`;
  updatedText = newSection + homeText;
}

// 🗃️ Conditionally archive previous semester
if (previousAliasLine) {
  const pastHeadingPattern = /(^## 📅 Abgeschlossene Semester\s*\n)/m;
  const previousLine = `- ${previousAliasLine}\n`;

  if (pastHeadingPattern.test(updatedText)) {
    updatedText = updatedText.replace(pastHeadingPattern, `$1${previousLine}`);
  } else {
    updatedText += `\n\n## 📅 Abgeschlossene Semester\n${previousLine}`;
  }
}

// 💾 Save Home.md
await app.vault.modify(homeFile, updatedText);

// ✅ Done
tR = `✅ Neues Semester erstellt: [[${overviewPath}]]  
✅ Als aktiv eingetragen in [[Home]]  
${previousAliasLine ? "📦 Vorheriges Semester archiviert." : "ℹ️ Kein vorheriges Semester gefunden."}`;
%>