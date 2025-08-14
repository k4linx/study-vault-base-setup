module.exports = async (tp, data) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // 1. Get active semester from Home.md
  const homeFile = await app.vault.getAbstractFileByPath("Home.md");
  const homeText = await app.vault.read(homeFile);
  const section = homeText.split("## 📅 Aktives Semester")[1]?.split("\n##")[0];
  const match = section?.match(/\[\[.*?\|(.*?)\]\]/);
  const semester = match?.[1];
  if (!semester) throw new Error("Kein aktives Semester gefunden.");

  // 2. Get form values
  const { short, course, professor, description, day, time, tags } = data;

  const rawTags = tags ? tags.split(",").map((t) => t.trim()) : [];
  const allTags = [short, ...rawTags];
  const tagsFormatted = allTags.map((tag) => `#${tag}`).join(", ");

  // 3. Create the module note
  const date = tp.date.now("YYYY-MM-DD");
  const folder = `Semester/${semester}/Module/${short} - ${course}`;
  const filename = `${short} - ${course}`;
  const filepath = `${folder}/${filename}`;

  const content = `---
semester: "${semester}"
professor: "${professor}"
course: "${course}"
short: "${short}"
description: "${description}"
created: ${date}
tags: [${allTags.join(", ")}]
---

# ${course}

**Professor:** ${professor}  
**Kürzel:** ${short}  
**Semester:** ${semester}

## Beschreibung
${description}
`;

  await app.vault.createFolder(folder).catch(() => {});
  await app.vault.create(filepath + ".md", content);
  await sleep(300);

  // 4. Update semester overview
  const semesterFolder = await app.vault.getAbstractFileByPath(
    `Semester/${semester}`
  );
  const overviewFile = semesterFolder?.children?.find((f) =>
    f.name.startsWith(`${semester} - `)
  );
  if (!overviewFile) throw new Error("Keine Semesteroverview gefunden.");

  const overviewText = await app.vault.read(overviewFile);
  const lines = overviewText.split("\n");
  const headerIndex = lines.findIndex(
    (l) => l.includes("| Kürzel") && l.includes("Tags")
  );
  const insertIndex = headerIndex >= 0 ? headerIndex + 2 : lines.length;

  const linkedShort = `[[${filepath}\\|${short}]]`;
  const newRow = `| ${linkedShort} | ${course} | ${day} | ${time} | ${tagsFormatted} |`;

  lines.splice(insertIndex, 0, newRow);
  await app.vault.modify(overviewFile, lines.join("\n"));

  new Notice(`✅ Modul "${course}" erstellt und eingetragen.`);
};
