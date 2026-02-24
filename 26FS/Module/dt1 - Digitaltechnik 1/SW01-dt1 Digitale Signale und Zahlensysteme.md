---
erstelldatum: 2026-02-24
tags:
  - dt1
  - zahlensysteme
  - binaer
  - hex
Folien:
---

## ⁉️ Fragen

---
## 💡 Wichtige Begriffe
- **Binärsystem**: Zahlensystem mit Basis $2^{n}$
- **Hexadezimalsystem**: Zahlensystem mit Basis $16^{n}$
- 
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

##### 2er Komplement
$$
12-10
$$
Beim Zweierkomplement wird die Binärzahl zuerst invertiert.
$$
\begin{align}
1100 \rightarrow 0011 \\
1010 \rightarrow 0101
\end{align}

$$
Danach wird eine 1 in Binär mit der gleichen Bitbreite addiert.
$$
\begin{array} \\
&0011 \\
+&0001 \\
\hline \\
&0100
\end{array}
$$
Danach können die beiden Zahlen ganz einfach addiert werden:
$$
\begin{array} \\
&0100 \\
+&0110 \\
\hline \\
&1010 \rightarrow umrechnen
\end{array}
$$