---
erstelldatum: 2026-03-01
tags:
  - paritaet
  - checksum
  - hamming
  - ascii
  - unicode
  - nrz_und_nrzi
  - manchester
  - i2c
  - spi
  - uart
Folien:
  - slides_dt1_3_codes
  - slides_dt1_4_serielle_datenuebertragung
---
## Wichtige Begriffe
- **Parität**: Einfacher Check ob übertragene Daten korrekt
- **Quersumme**: Summe aus allen Datenbits
- **CRC**: Divisionsrest der Daten
- **Fehlerkorrigierende Codes**: Codierung die selber Fehler erkennen und korrigieren kann
- **Fehlererkennende Codes**: Codierung die Fehler erkennen aber nicht korrigieren kann.
- **NRZI** Signalcodierung um über Transformatoren Daten übertragen zu können.
---
## Fehlererkennende Codes
### Parität
Die Parität zählt die Anzahl Bits die **HIGH** sind und unterscheidet zwischen **EVEN** und **ODD**. Das Paritätsbit ist ein klassischer Fehlererkennender Code.

| EVEN                    | ODD                       |
| ----------------------- | ------------------------- |
| Gerade anzahl HIGH Bits | ungerade Anzahl HIGH bits |
Das Paritätsbit verursacht viel Redundanz auf eine Bitfolge.

| 7-bit ASCII | Daten    | EVEN          | ODD           |
| ----------- | -------- | ------------- | ------------- |
| A           | 100 0001 | 1000 001**0** | 1000 001**1** |
| C           | 100 0011 | 1000 011**1** | 1000 011**0** |

### Quersumme
Die Quersumme wird aus der Addition aller Daten bestimmt. Dabei kann erkannt werden ob ein Fehler bei der Übertragung passiert ist. Die Quersumme kann aber nicht erkennen wo der Fehler passiert ist. Mehrfachfehler können ebenfalls nicht erkannt werden. also wenn $>1$ bit geflippt wurde. 

| Byte      | Korrekte Daten | Erkennbarer  Doppelfehler | Nicht erkennbarer Doppelfehrer |
| --------- | -------------- | ------------------------- | ------------------------------ |
| 1         | 0011 1100      | 0011 1100                 | 0011 1100                      |
| 2         | 0101 1111      | 0101 111**0**             | 0101 111**0**                  |
| 3         | 0010 1001      | 0010 1001                 | 0001 1000                      |
| 4         | 0001 1000      | 0001 10**1**0             | 0010 100**1**                  |
| 5         | 1111 1001      | 1111 1001                 | 1111 1001                      |
| Prüfsumme | 1101 0101      | 1101 01**10**             | 1101 0101                      |

### CRC Cyclic Redundancy Check
Der CRC wird aus der Division der Daten berechnet, Dabei wird der Divisionsrest als Checksumme verwendet. Diese Prüfsumme wird dann dem Datenpaket angehängt.

## Fehlerkorrigierende Codes
Fehlerkorrigierende Codes können eine Gewisse Anzahl Fehler erkennen und reparieren. dadurch werden sie oft in unidirektionalen Übertragungsarten verwendet.
- Satellitenkommunikation
- TV-Fernbedienung
- Speicher
#### Hamming
Der Hammingcode hat auf 7 Bits jeweils 3 [[#Parität|Paritätsbits]] und 4 Datenbits. diese sind wie im Diagramm unten angeordnet.
![[SW02-dt1 codes, serielle datenübertragung_hamming.png#invert]]
Wird z.B D2 gestört, ändert sich bei der Decodierung das prüfbit P2 und P3 damit wird sichtbar das D2 unterwegs gestört wurde und dieses Bit kann zurückgeflippt werden.

Der Hamming code kann auf 7 bit jeweils
- 1 bit Fehler korrigieren
- 2 bit Fehler erkennen 
Wenn 2 Fehler passieren kann es sein das der Hamming Code falsch korrigiert.

![[SW02-dt1 codes, serielle datenübertragung_hamming_fehlererkennung.png#invert]]

## Zeichencodes
### ASCII
ASCII kann 127 Zeichen im 7-Bit Format darstellen.
![[SW02-dt1 codes, serielle datenübertragung_ascii_tabelle.png|300]]
Die Tabelle kann so ins Binäre umgerechnet werden dass die:
- Spalten: Nibble mit LSB
- Zeilen: Nibble mit MSB
$$
A = \underset{Spalte}{0100} \ \underset{Zeile}{0001}
$$
### Unicode
Unicode hat eine Bitbreite von 21 Bits damit lassen sich alle Schriftzeichen der Welt inkl. Emojis darstellen.
Unicode besteht aus 17 Ebenen sogenannten Planes die mit jeweils 16-Bit beschrieben werden. Die Ebene 0 nennt sich BMP Basic Multilingual Plane, diese bildet schon einen grossteil der Schriftzeichen ab.



#### UTF-16


#### UTF-8


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


| Name | Bedeutung           | Beschreibung                           | Synonyme                                       |
| ---- | ------------------- | -------------------------------------- | ---------------------------------------------- |
| MISO | Master-In/Slave-Out | Daten von Slave zu Master              | SDI, SDO                                       |
| MOSI | Master-Out/Slave-In | Daten von Master zu Slave              | SDI, SDO                                       |
| SCLK | Serielle Clock      | Bitsynchronisation von Master zu slave |                                                |
| CS   | Chip-Select         | Aktivierung des gewählten Slaves       | SS (Slave Select), STE (Slave Transmit enable) |
Bei SPI müssen folgende Parameter eingestellt werden:
- Taktrate Frequenz der Clock
- Anzahl Bits Pro Wort
- Übertragungsreihenfolge, ob MSB zuerst oder LSB
- Taktphase (CPHA) legt fest ob der Slave auf die erste oder zweite Flanke nach CS Aktivierung reagiert.
- Taktpolarität (CPOL) legt fest ob die steigende oder fallende Flanke der Clock ausschlaggebend für die Synchronisation ist

![[SW02-dt1 codes, serielle datenübertragung_spi_cpol_cpha.png#invert]]
### I2C
I2C ist ein zweileiter Kommunikationsprotokoll. Dabei werden beide Leiter mit einem Pull-up Widerstand mit $V_{cc}$ verbunden. Somit ist der Ruhezustand beim HIGH Pegel. Die Sender/Empfänger können nur aktiv auf LOW schalten. 
![[SW02-dt1 codes, serielle datenübertragung_schema_i2c_verdrahtung.png#invert]]
Um die Framesynchronisation zu starten Wechselt der Master den Zustand von SDA zu LOW während SCL HIGH bleibt. Während ein SDA Zustandswechsel von LOW zu HIGH ein Stop bedeutet.
![[SW02-dt1 codes, serielle datenübertragung_i2c_framesync.png#invert]]
Nach 8 übertragenen Bits Wechselt der Slave als Bestätigung (ACK) SDA gegen LOW. 

Der Master schickt im ersten Byte der Datenübertragung die 7-Bit Slave Addresse plus 1 Bit für die Operation die ausgeführt werden soll:
- 1 = Read
- 0 = Write

### RS232 UART
Die einfachste bidirektionale Verbindung ist über UART gemacht. Dabei werden 3 Leiter benötigt vom Master aus gesehen **RxD, TxD, GND** 
- **RxD** Dateneingang
- **TxD** Datenausgang zum Slave
- **GND** Masse
![[SW02-dt1 codes, serielle datenübertragung_uart_verdratungsschema.png#invert]]
Bei UART müssen folgende Parameter eingestellt werden:
- Baudrate
- Anzahl Datenbits: 5-8
- Parität: even, odd, none
- Anzahl Stopbits, bzw Stopbit Zeit: 1, 1.5, 2
![[SW02-dt1 codes, serielle datenübertragung_aufbau_uart_signal.png#invert]]

Im Ruhezustand ist der Pegel HIGH. Um einen Rahmen zu senden wird das Startbit = 0 für genau eine Bitzeit (Tbit) gesendet, danach kommen die eingestellten Datenbits z.B. 8 danach das Stopbit.
![[SW02-dt1 codes, serielle datenübertragung_uart_signal.png#invert]]
Der Empfänger tastet das signal immer in der Mitte der Bitzeit ab, deshalb ist es wichtig das die Baudrate mit einer Toleranz von $\pm 5$% eingehalten wird.
#### RS232
RS232 normiert das zu verwendende Steckersystem, die elektrischen Parameter der UART-Leitung und die Pegel für Logische zustände:
- 0: $+3V$ bis $+15V$
- 1: $-3V$ bis $-15V$
### Symmetrische Übertragung
Bei der Symmetrischen Übertragung wird das Signal in einem zweiten Leiter gespiegelt gesendet. Die Symmetrische Datenübertragung wird verwendet um die Störfestigkeit zu verbessern.
![[SW02-dt1 codes, serielle datenübertragung_asymmetrisch_symmetrisch.png#invert]]
Wenn nun ein [EMP](https://de.wikipedia.org/wiki/Elektromagnetischer_Impuls) ein Bit im Signal flippt wird das sowohl bei D+ als auch bei D- geflippt. das bedeutet in der schlussendlichen Rechnung ist das Signal wieder das Gleiche:
- Ungestörtes Signal: $u-(-u) = 2u$
- gestörtes Signal: $u+e-(-u+e)= u+e+u-e = 2u$

Weil die Signale Betragsmässig das gleiche Signal übertragen aber mit unterschiedlichem Vorzeichen kompensieren sich die Magnetfelder der Signale. 

Die Störfestigkeit kann weiter verbessert werden wenn man die Signalträger verdrillt.

### RS485
