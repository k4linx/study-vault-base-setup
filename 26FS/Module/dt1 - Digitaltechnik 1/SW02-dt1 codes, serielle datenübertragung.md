---
erstelldatum: 2026-03-01
tags:
Folien:
---
## ⁉️ Fragen

---
## 💡 Wichtige Begriffe
- **Parität**: Einfacher Check ob übertragene Daten korrekt
- **Quersumme**: Summe aus allen Datenbits
- **CRC**: Divisionsrest der Daten
- **Fehlerkorrigierende Codes**: Codierung die selber Fehler erkennen und korrigieren kann
- **Fehlererkennende Codes**: Codierung die Fehler erkennen aber nicht korrigieren kann.
---
## 📄 Zusammenfassung
### Parität
Die Parität zählt die anzahl Bits die **HIGH** sind und unterscheidet zwischen **EVEN** und **ODD**. Das Paritätsbit ist ein klassischer Fehlererkennender Code.

| EVEN                    | ODD                       |
| ----------------------- | ------------------------- |
| Gerade anzahl HIGH Bits | ungerade Anzahl HIGH bits |
Das Paritätsbit verursacht viel Redundanz auf eine Bitfolge.
**Bsp:**

### Quersumme
Die Quersumme wird aus der Addition aller Daten bestimmt. Dabei kann erkannt werden ob ein Fehler bei der Übertragung passiert ist. Die Quersumme kann aber nicht erkennen wo der Fehler passiert ist. Mehrfachfehler können ebenfalls nicht erkannt werden. also wenn $>1$ bit geflippt wurde. 
**Bsp:**

### CRC 
Der CRC wird aus der Division der Daten berechnet, Dabei wird der Divisionsrest als Checksumme verwendet.

### Fehlerkorrigierende Codes
Fehlerkorrigierende Codes können eine Gewisse Anzahl Fehler erkennen und reparieren. dadurch werden sie oft in unidirektionalen Übertragungsarten verwendet.
- Satellitenkommunikation
- TV-Fernbedienung
- Speicher
#### Hamming
Der Hamming code kann auf 7 bit jeweils
- 1 bit Fehler korrigieren
- 2 bit Fehler erkennen 
Wenn 2 Fehler passieren kann es sein das der Hamming Code falsch korrigiert.


### NRZ

### SPI

### Manchester

### Symmetrische Übertragung
