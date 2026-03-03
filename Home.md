## 🗓️ Arbeiten auf Zeitplänen
```tasks
tag includes #schedule
group by function task.file.property('zeitplandatum')
not done
```
---
## ✅ ToDo
```tasks
tags include #task
filter by function task.file.folder.includes( query.file.folder)
group by function task.file.folder.slice(0,-1).split('/').pop()
not done
```
---

## 🟩 Informationssammlung
[[Allgemeine Infos]]

![[gesamt_vz_ES.pdf]]

![[Modultabelle EIT v3 Word ab 24HS.pdf]]



## Unresolved Links
```dataviewjs
const rows = [];

function normalizeLinkPath(p) {
  if (!p) return "";
  // remove display/size part and heading/block parts
  let s = String(p);
  s = s.split("|")[0];
  s = s.split("#")[0];
  return s.trim();
}

function isNoteLink(path) {
  const lower = path.toLowerCase();
  // allow explicit markdown links
  if (lower.endsWith(".md")) return true;
  // if it contains a dot, treat as attachment (png/pdf/etc.)
  // (this also ignores ".png", ".pdf", etc.)
  return !lower.includes(".");
}

for (const page of dv.pages("")) {
  const srcPath = page.file.path;

  for (const l of page.file.outlinks) {
    const raw = l?.path ?? "";
    const target = normalizeLinkPath(raw);

    if (!target) continue;
    if (!isNoteLink(target)) continue; // ignore images, pdfs, etc.

    // Resolve relative link the way Obsidian does
    const dest = app.metadataCache.getFirstLinkpathDest(target, srcPath);
    if (!dest) rows.push([page.file.link, target]);
  }
}

dv.table(["Source", "Missing Note"], rows);
```
