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
```dataview
TABLE file.link as "Source", link as "Missing Wiki Link"
FLATTEN file.outlinks as link
WHERE !link.file AND link.type = "file" AND !link.path
```
