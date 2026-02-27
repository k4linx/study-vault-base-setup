---
erstelldatum: 2026-02-27
tags:
Folien:
---

## Wichtige Formeln
### Ohmsches Gesetz
$$
\begin{align}
U &= R \cdot I\\
I &= \frac{U}{R} \\
R &= \frac{U}{I}
\end{align}
$$
### Leistung
$$
\begin{align}
P &= U \cdot I \\
P &= I^{2}\cdot R \\
P &= \frac{U^{2}}{R} \\
\end{align}
$$
### Arbeit
$$
\begin{align}
W &= U \cdot I \cdot t \\
W &= I^{2} \cdot R \cdot t \\
W &= \frac{U^{2}}{R} \cdot t \\
\end{align}
$$
### Wirkungsgrad
$$
\eta = \frac{P_{ab}}{P_{zu}}
$$
### Knotensatz
$$
\begin{align}
0 = I_{1}+I_{2}+I_{3}
\end{align}
$$
### Maschensatz
$$
0 = U_{1}+U_{2}+U_{3}
$$
## Grundgesetze
### Knotensatz
Ein Knoten kann keine Ladungen speichern weshalb die Kontengleichung immer 0 ergeben muss.
![[SW01-aet1 Strom, Spannung, Widerstand und Schaltungen_knotensatz.png#invert|200]]
$$
\begin{align}
0 = I_{1}+I_{2}+I_{3}
\end{align}
$$
Ein Knoten lässt sich auch über ein beliebiges Netzwerk spannen solange keine Quellen (Spule, Kondensator) im Netzwerk vorhanden sind.

Es muss auf die Vorzeichen und Pfeilrichtung geachtet werden. Wenn ein Pfeil in die andere Richtung zeigt muss dessen Wert mit einem $-$ versehen werden. Hat der Wert bereits ein $-$ greift $- \cdot - = +$.
### Maschensatz
Eine Masche ist eine geschlossene Schaltung welche von Punkt A über andere Punkte nach Punkt A zurückkehrt. Die Spannung in einer Masche muss immer 0 ergeben.
![[SW01-aet1 Strom, Spannung, Widerstand und Schaltungen_maschensatz.png#invert|200]]
$$
0 = U_{1}+U_{2}+U_{3}+U_{4}
$$
Es muss auf die Vorzeichen und Pfeilrichtung geachtet werden. Wenn ein Pfeil in die andere Richtung zeigt muss dessen Wert mit einem $-$ versehen werden. Hat der Wert bereits ein $-$ greift $- \cdot - = +$.
## Einfache Schaltungen von Widerständen
### Serienschaltung
Werden Widerstände in Serie geschaltet, können die Werte der Widerstände summiert werden.
![[SW01-aet1 Strom, Spannung, Widerstand und Schaltungen_serienschaltung.png#invert]]
So wird aus $R1, R2, R3, R4 \rightarrow RE$
Der Maschensatz besagt die Spannung in einer Masche muss $0$ sein:
$$
\begin{align}
0 &= -U + U_{1}+U_{2}+U_{3}+U_{4} \\
U &= U_{1}+U_{2}+U_{3}+U_{4}
\end{align}
$$
Die Spannungen werden mit dem Ohmschen Gesetz berechnet. Da der Strom über alle Widerstände gleich bleibt kann man faktorisieren:
$$
U = I \cdot (R1+R2+R3+R4) = I \cdot RE
$$
#### Spannungsteiler (unbelastet)
An einem Unbelasteten Spannungsteiler suchen wir die Spannung über $R2$. Aus der Serienschaltung kennen wir die Spannungsteilung welche sagt dass sich die Spannung proportional auf die Widerstände verteilt.
$$
\frac{U1}{U} = \frac{R1}{RE}, \ \text{etc.}
$$
![[SW01-aet1 Strom, Spannung, Widerstand und Schaltungen_spannungsteiler.png#invert|300]]
Der Strom ist in beiden widerständen gleich, deshalb kann man diesen im Beispiel ignorieren.
Zuerst die Maschengleichung aufstellen: $U_{R1}+U_{2}-U_{1}=0$
