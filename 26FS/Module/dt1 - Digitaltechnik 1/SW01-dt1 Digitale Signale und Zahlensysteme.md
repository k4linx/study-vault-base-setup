---
erstelldatum: 2026-02-24
tags:
  - dt1
  - zahlensysteme
  - binaer
  - hex
Folien:
  - slides_dt1_1_einfuehrung
  - slides_dt1_2_zahlen
---


## 💡 Wichtige Begriffe
- **Binärsystem**: Zahlensystem mit Basis $2^{n}$
- **Hexadezimalsystem**: Zahlensystem mit Basis $16^{n}$
- **Zweierkomplement**: System um negative Binäre Ganzzahlen darzustellen
---
## 📄 Zusammenfassung
### Binärsystem
Im Binären Zahlensystem werden Zahlen mit $1$ und $0$ dargestellt. $\micro$chips und Computer rechnen nur im Binärsystem. Wobei $1$ ein "High" und $0$ ein "Low darstellt".
#### Bits, Bytes etc.

| Begriff     | Anz Bit | Wertebereich    |
| ----------- | ------- | --------------- |
| Nibble      | 4       | 0-15            |
| Byte        | 8       | 0-255           |
| Word        | 16      | 0-65'635        |
| Double Word | 32      | 0-4'294'967'295 |
mit Jedem angehängten Bit verdoppelt sich die maximal anzeigbare Nummer:

| Anz Bit | Wertebereich  |
| ------- | ------------- |
| 8       | 256           |
| 9       | 512           |
| 10      | 1024 = 1kbyte |
| 20      | 1Mbyte        |
| 30      | 1Gbyte        |
#### Umwandlung von Dezimal zu Binär
Die umwandlung kann durch wiederholtes dividieren mit 2 erziehlt werden. Dabei wird der Rest immer aufgerundet. Das Resultat wird von Unten nach oben links zu rechts gelesen.

$$11_{DEZ} \quad \rightarrow \quad 1101_B$$

| Dezimalzahl | Divisor | Resultat | Rest        |
| ----------- | ------- | -------- | ----------- |
| 11          | 2       | 5.5      | 1 **(LSB)** |
| 5           | 2       | 2.5      | 1           |
| 2           | 2       | 1        | 0           |
| 1           | 2       | 0.5      | 1 **(MSB)** |
#### Binäre Addition
Die Binäre Addition ist gleich wie bei der Dezimalen Schriftlichen Addition mit dem Unterschied das maximal 1 Dargestellt werden kann.
$$
addition \ einfügen
$$
#### Binäre Subtraktion
Die Binäre Subtraktion kann in 2 Arten durchgeführt werden.
- Spaltenweise Subtraktion
- mit dem 2er Komplement
##### Spaltenweise Subtraktion
$$

$$

##### Subtraktion mit 2er Komplement
Der Subtrahend wird ins [[#Zweierkomplement]] umgewandelt und dann werden die beiden Zahlen addiert.
$$
12-10
$$
$$
\begin{array} \\
&1100 \\
+&0110 \\
\hline \\
&0010
\end{array}
$$
Wenn es ganz links einen übertrag gibt der die Bitbreite verändert wird dieser ignoriert, dies nennt man Überlauf. 

#### Zweierkomplement
Um eine Zahl im 2er Komplement darzustellen muss diese Invertiert werden und eine 1 in der gleichen Bitbreite dazu addiert werden.
$$
\begin{align}
-10_{DEZ} \rightarrow \ &1010 \\
+&0001 \\
\hline \\
&1011 
\end{align}
$$
$1011$ ist nun unsere $-10$ im 2er Komplement.

#### Festkommazahl (Fixpoint)
Bei der Festkommazahl ist immer Festgelegt wieviele Bit vor dem Komma und wieviele nach dem Komma sind.
$$
4,4 \rightarrow 4 \text{bit},4 \text{bit}
$$
Der Wertebereich ist folgend definiert:
$$
2^{3}2^{2}2^{1}2^{0}. 2^{-1}2^{-2}2^{-3}2^{-4}
$$
Beispiel:
$$
0.1_{B}=0.5_{DEZ}
$$
$1.3$ unsigned $1.101_{B}$
$$1+0.5+0+0.125 = 1.625_{DEZ}$$
Beim Unsigned ist es einfach da wird die Binärzahl einfach umgerechnet.

$1.3$ signed $1.101_{B}$
$$

$$
Bei signed Fixpoint ist es schwieriger, da ist das MSB das sign wobei $1$ für $-$ steht und $0$ für $+$.
Die Nachkommastelle wird ins [[#Zweierkomplement|2er Komplement]] konvertiert und dann werden die Ziffern zusammengerechnet. und entsprechend mit dem sign verrechnet.

#### Float IEEE 754
Die Floating Point IEEE 754 Norm wurde entwickelt um Gleitkommazahlen mit einem grossen Zahlenbereich darzustellen. Es gibt verschiedene Formate, aber die Schritte bleiben Gleich.
![[SW01-dt1 Digitale Signale und Zahlensysteme_tabelle_ieee754.png#invert]]
Eine Anleitung zur Umrechnung mit $-58.25$ ins single (32bit) Float point Format:
1. Umwandlung in Binär und Normalisierung
$$
58.25 \overset{binary}{\longrightarrow} 111010.01_{B} = 1.1101001 \cdot 2^{5}
$$
> [!important] Tipp
> Normalisieren bedeutet den exponent erhöhen bis eine $1$ vor dem Komma steht.
2. Exponent berechnen:
	Bias: $127$ = $0111 \ 1111$
	Exponent: 5 = 0101
$$
127 + 5 = 132 \overset{binary}{\longrightarrow} 10000100_{B}
$$
3. Mantisse Berechnen:
	Normalisiserter Wert: $1.1101001_{B}$
	Mantisse: $1101001_{B}$ Rechts auffüllen auf 23 Bit mit $0$: $110\ 0100\ 0000\ 0000\ 0000\ 0000$

4. Eintragen in 32 Bit Gleitkommawort:

| Sign | Exponent   | Mantisse                     |
| ---- | ---------- | ---------------------------- |
| 1    | 100 0010 0 | 110 0100 0000 0000 0000 0000 |


#### Gray Code
Der Graycode ist ein System um aufeinanderfolgende Werte nur mit einem Bit zu verändern.
![[SW_01-dt1_gray_code.png]]
Um den Gray Code um ein Bit zu erweitern, muss dieser nur am Höchsten Wert gespiegelt werden und das neue bit oben angehängt werden wobei das neue bit beim gespiegelten immer 1 ist und bei der ursprünglichen Länge 0.

### Hexadezimalsystem
Das Hexadezimalsystem ist ein Zahlensystem mit der Basis 16. Jede Stelle im Hexadezimalsystem kann mit 4 Bits im Binärsystem Dargestellt werden

| Dezimal | Hexadezimal | Binär |
| ------- | ----------- | ----- |
| 0       | 0           | 0000  |
| 1       | 1           | 0001  |
| 2       | 2           | 0010  |
| 3       | 3           | 0011  |
| 4       | 4           | 0100  |
| 5       | 5           | 0101  |
| 6       | 6           | 0110  |
| 7       | 7           | 0111  |
| 8       | 8           | 1000  |
| 9       | 9           | 1001  |
| 10      | A           | 1010  |
| 11      | B           | 1011  |
| 12      | C           | 1100  |
| 13      | D           | 1101  |
| 14      | E           | 1110  |
| 15      | F           | 1111  |
Das Hexadezimalsystem ist somit viel Platzsparender auf dem Papier als das Binärsystem. Es wurde in erster Linie für die Leserlichkeit entwickelt.
