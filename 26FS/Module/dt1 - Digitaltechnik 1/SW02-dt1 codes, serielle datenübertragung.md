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

## Serielle Datenübertragung
Um Daten Seriell zu übertragen also bit für bit muss dieses Synchronisiert werden. In unserer Sprache werden Daten mit dem Leerzeichen und Interpunktion synchronisiert. Wir Menschen wurden seit dem Kindesalter darauf trainiert Wörter mit dem Leerzeichen zu trennen.

Um ein Digitales Signal zu synchronisieren werden
- **Bitsynchronisation** Abtastzeitraster für gültige Bits
- **Framsynchronisation** Beginn und Ende eines kompletten Datenblocks (Frame)
verwendet.
Diese beiden Synchronisationen können entweder auf separaten Leitungen oder direkt im Bitstream mitgesendet werden.
![[SW02-dt1 codes, serielle datenübertragung_serielle_datenuebertragung.png#invert]]
Im Bild ist der Aufbau einer seriellen Datenübertragung zu sehen. 
Dabei zeigt **FRAMESYNC** den Beginn eines 16-Bit Wort mit einem Wechsel von **HIGH** zu **LOW** an.
Das **BITSYNC** Signal zeigt anhand der positiven Flanke, also von **LOW** zu **HIGH**, den Abtastzeitpunkt an.

### NRZ
Ein NRZ Codiertes Signal wird oft Schaltungsintern verwendet. Die Informationen werden dabei im Pegel des Signals codiert:
- **HIGH** entspricht einer **1**
- **LOW** entspricht einer **0**
### NRZI
NRZI wird verwendet um Daten über Transformatoren zu übertragen. Die Daten müssen somit Mittelwertfrei sein.
Bei der NRZI Codierung ist das aktuelle Datenbit vom letzten Bit abhängig. Es gibt folgende 2 Arten der NRZI Codierung:
- **NRZI-M:** Wenn Das Bit eine 1 ist wird der Pegel gewechselt. Ist das Bit eine 0 bleibt der Pegel gleich
- **NRZI-S:** Wenn das Bit eine 0 ist  wird der Pegel gewechselt. Ist das Bit eine 1 bleibt der Pegel gleich
![[SW02-dt1 codes, serielle datenübertragung_nrzi.png#invert]]

#### Bit-Stuffing
Wenn ein **NRZI** Signal zu lange in einem Pegel bleibt verliert der Empfänger mit der Zeit die Synchronisation mit dem Sender. Deshalb wird bei der **NRZI** codierung das sogenannte **Bit-Stuffing** verwendet. Das ist eine Regel die nach einer langen Sequenz von 1 oder 0 den Pegel wechselt entsprechend der Codierung:
- NRZI-S: nach fünf 1 wird der Pegel gewechselt (eine 0 eingefügt)
- NRZI-M: nach fünf 0 wird der Pegel gewechselt (eine 1 eingefügt)
Der Empfänger (Decoder) entfernt das entsprechende Bit nach 5 gleichen Bits.
![[SW02-dt1 codes, serielle datenübertragung_bit_stuffing.png#invert]]
Diese Regel kann auch gezielt verletzt werden um eine **Framesynchronisation** zu erzielen. so z.B. bei einem HDLC Signal, dieses verletzt die Regel gezielt indem es für die Framesynchronisation ein Flag setzt (0111 1110)
![[SW02-dt1 codes, serielle datenübertragung_hdlc_frame_sync.png#invert]]
### Manchester
Der Manchester Code Arbeitet mit dem Pegelwechsel in der Mitte des Datenbits. Ein Clock Cycle besteht dabei aus der hälfte LOW und der anderen Hälfte HIGH. Daten werden folgendermassen Signalisiert
- Eine **0** wird mit der Positiven Flanke signalisiert
- Eine **1** wird mit der Negativen Flanke signalisiert
![[SW02-dt1 codes, serielle datenübertragung_manchester.png#invert]]
Im Gegensatz zu [[#NRZI]] macht der Manchester Code bei jedem Bit einen Phasenwechsel

### SPI
SPI ist ein Master Slave Protokoll, die maximale Bandbreite ist dabei 50 MBit/s. SPI kann sowohl als Punkt zu Punkt als auch als Stern Topologie verdrahtet werden. Man verwendet die [[#NRZ]] Codierung.


### I2C

### RS232 UART


### Symmetrische Übertragung
Bei der Symmetrischen Übertragung wird das Signal in einem zweiten Leiter gespiegelt gesendet. Die Symmetrische Datenübertragung wird verwendet um die Störfestigkeit zu verbessern.
![[SW02-dt1 codes, serielle datenübertragung_asymmetrisch_symmetrisch.png#invert]]
Wenn nun ein [EMP](https://de.wikipedia.org/wiki/Elektromagnetischer_Impuls) ein Bit im Signal flippt wird das sowohl bei D+ als auch bei D- geflippt. das bedeutet in der schlussendlichen Rechnung ist das Signal wieder das Gleiche:
- Ungestörtes Signal: $u-(-u) = 2u$
- gestörtes Signal: $u+e-(-u+e)= u+e+u-e = 2u$

Weil die Signale Betragsmässig das gleiche Signal übertragen aber mit unterschiedlichem Vorzeichen kompensieren sich die Magnetfelder der Signale. 

Die Störfestigkeit kann weiter verbessert werden wenn man die Signalträgger verdrillt

### RS485
