## 📥 Inbox
```dataviewjs
const folder = "A_Inbox";
const count = dv.pages(`"${folder}"`).length;
if(count == 1){
	dv.paragraph(`📄 Du hast noch **${count}** Dokument in der Inbox zur nachbearbeitung.`);
}
else if(count > 1){
	dv.paragraph(`📄 Du hast noch **${count}** Dokumente in der Inbox zur nachbearbeitung.`);
} else {
	dv.paragraph(`Yayyy, leere Inbox 😁`)
}
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
## 🗓️ Arbeiten auf Zeitplänen
```tasks
tag includes #schedule
group by start
not done
```

---
## 🟩 Informationssammlung
[[Allgemeine Infos]]

![[gesamt_vz_ES.pdf]]

![[Modultabelle EIT v3 Word ab 24HS.pdf]]



