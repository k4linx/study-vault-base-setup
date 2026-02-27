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
I &= \frac{U}{R} = U \cdot G\\
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
### Spannungsteiler
$$
U_{2}= U_{1}* \frac{R_{2}}{R_{1}+R_{2}}
$$
### Stromteiler
#### Zwei Widerstände
$$
I_{2}= I \cdot \frac{R_1}{R_{2}+R_{1}}
$$
#### Mehr als zwei Widerstände
$$
I_{2}= I \cdot \frac{R_{1}R_{3}}{R_{1}R_{3}+R_{1}R_{2}+R_{2}R_{3}}
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
Werden Widerstände in Serie geschaltet, können die Werte der Widerstände summiert werden. Der Strom bleibt über Serienschaltungen überall gleich.
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
Zuerst die Maschengleichung aufstellen: $U_{R1}+U_{2}-U_{1}=0$
Strom berechnen
$$
I_{1}= \frac{U_1}{R_{E}} = \frac{U_{1}}{R_{1}+R_{2}}
$$
Danach spannung $U_{2}$ aus $I_{1}$ und $R_{2}$ berechnen.
$$
U_{2} = R_{2}\cdot \frac{U_1}{R_{1}+R_{2}}
$$
umformen
$$
U_{2}= U_{1}\cdot \frac{R_{2}}{R_{1}+R_{2}}
$$
$R_{2}$ ist beim Spannungsteiler der Widerstand über welchen die gesuchte Spannung $U_{2}$ abfällt.

### Parallelschaltung
Sind Widerstände parallelgeschaltet kann der Leitwert $G$ zusammengerechnet werden. Der Leitwert ist der Kehrwert des Widerstandes. Die Spannung ist bei einer Parallelschaltung über alle Widerstände gleich.
![[SW01-aet1 Strom, Spannung, Widerstand und Schaltungen_parallelschaltung.png#invert]]
Der Knotensatz sagt dass alle zufliessenden Ströme gleich den Abfliessenden Strömen sind. 
$$
I = I_{1}+I_{2}+I_{3}
$$
$I$ berechnet man mit dem Ohmschen gesetz $I = U \cdot G$ und lässt sich faktorisieren:
$$
\begin{align}
I &= U \cdot (G_{1}+G_{2}+G_{3}) = U \cdot G_{E} = u \cdot \frac{1}{R_{E}} \\
G_{E}&= G_{1}+G_{2}+G_{3} \\
\frac{1}{R_{E}} &= \frac{1}{R_{1}} + \frac{1}{R_{2}} + \frac{1}{R_{3}} \Rightarrow R_{E}= \frac{1}{\frac{1}{R_{1}} + \frac{1}{R_{2}} + \frac{1}{R_{3}}}
\end{align}
$$
#### Stromteiler (Unbelastet)
An einem unbelasteten Stromteiler mit zwei Zweigen suchen wir den Strom über $R_2$. Aus der Parallelschaltung kennen wir dass sich der Strom proportional zum Leitwert der Widerstände aufteilt.
$$
\frac{I_{1}}{I} = \frac{G_{1}}{R_{E}} = \frac{R_{E}}{R_{1}}
$$
![[SW01-aet1 Strom, Spannung, Widerstand und Schaltungen_stromteiler.png#invert]]
Somit ergibt sich die Spannung:
$$
U = R_{E}\cdot I = \frac{1}{\frac{1}{R_{1}}+ \frac{1}{R_{2}}} \cdot I \ \text{oder} \ U = \frac{1}{G_{E}} \cdot I = \frac{1}{G_{1}+G_{2}}\cdot I
$$
$I_{2}$ berechnet sich nach dem Ohmschen Gesetz aus $U$ und $R_{2}$
$$
I_{2}= \frac{U}{R_{2}} = \frac{1}{R_{2}}\cdot \frac{1}{\frac{1}{R_{1}} + \frac{1}{R_{2}}} \cdot I \ \text{oder} \ I_{2}= U \cdot G_{2}= G_{2}\cdot \frac{1}{G_{1}+G_{2}} \cdot I
$$
Mit gemeinsamen Nenner multiplizieren ($R_{1\cdot}R_{2}$) das geht auch mit $>2$ Widerständen:
$$
\frac{\frac{1}{R_2}}{\frac{1}{R_{1}}+ \frac{1}{R_{2}}} \cdot I\rightarrow \frac{R_{1}}{R_{2}+R_{1}} \cdot I
$$
Somit ergibt sich die Formel:
$$
I_{2}= I \cdot \frac{R_{1}}{R_{2}+R_{1}}
$$
$R_{2}$ ist der Widerstand durch den der Gesuchte Strom fliesst. Im Zähler steht immer $R_{n}-1$ widerstände aber nie der gesuchte widerstand.

Wenn die Parallelschaltung aus 2 Widerständen besteht kann auch diese Formel genutzt werden:
$$
I_{2}= I \cdot \frac{R_{1}\cdot R_{2}}{R_{1}+R_{2}} \cdot \frac{1}{R_{1}} = I \cdot \frac{R_{2}}{R_{1}+R_{2}}
$$
## Quellen, Ersatzschaltungen und Kennlinien
