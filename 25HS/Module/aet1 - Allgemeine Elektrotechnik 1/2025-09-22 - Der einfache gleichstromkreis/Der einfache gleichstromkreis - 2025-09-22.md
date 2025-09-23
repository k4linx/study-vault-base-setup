---
erstelldatum: 2025-09-22
tags:
  - aet1
  - vzs
  - ezs
  - kirchhoff
  - ohm
  - wirkungsgrad
cssClass: wide-table
---

## ⁉️ Fragen

---
## 💡 Wichtige Begriffe

---
## 📄 Zusammenfassung
### 3.1 Zählpfeile
Zählpfeile zeigen die Richtung des Stromflusses oder des Spannungsabfall an. Die Pfeile orientieren sich an der Flussrichtung von Positiven Ladungsträgern. Die Pfeile werden auf der Leitung oder über ein Bauteil gezeichnet.

![[zählpfeile.png#invert]]

Das Minus beim Wert eines Zählpfeil dreht die Richtung des Stromflusses um.

![[zählpfeile_U.png#invert]]

| $U_{A}$                  |              $U_{B}$ |
| ------------------------ | -------------------: |
| 9V                       |                  -9V |
| $U_{12} = V_{1} - V_{2}$ | $U_{21}=V_{2}-V_{1}$ |

#### Verbraucherzählpfeilsystem
Wenn die Pfeile für $I$ & $R$ in die gleiche Richtung zeigen nennt man die Schreibweise Verbraucherzählpfeilsystem. Beim VZS sind die Anfänge & Enden der Strom- und Spannungspfeile jeweils am gleichen Ort. Am Beispiel eines Ohmschen Wiederstandes sieht man das Prinzip sehr gut:
![[Ohmscher Wiederstand.png#invert_dark]]
#### Erzeugerzählpfeilsystem (EZS)
 Wenn $I$ & $R$ in die entgegengesetzte Richtung zeigen nennt man die Schreibweise Erzeugerzählpfeilsystem. Am Beispiel einer Stromquelle kann das EZS Prinzip gezeigt werden. Der Stromzählpfeil zeigt im Uhrzeigersinn in die Richtung des Stromflusses von positiven Ladungsträgern, aber der Spannungszählpfeil zeigt in die entgegengesetzte Richtung.
![[stromquelle.png#invert_dark]]


3.2 ### Ohmsches Gesetz
Das Ohmsche Gesetz besagt das Strom und Spannung in einem linearen Leiter zueinander proportional sind, also das Verhältnis zu Strom und spannung immer gleich bleiben wird. 
$$
I = \frac{U}{R}
$$
Der Ohmsche Widerstand ist ein Idealer Zweipol der unabhängig von äusseren Einflüssen, immer das Ohmsche Gesetz erfüllt. Der graph eines solchen Leiters ist eine Gerade:
```tikz
\usepackage{pgfplots}

\begin{document}
  \begin{tikzpicture}
	\begin{axis}[
	no markers,
	grid=none,
	grid style={gray},
	axis equal,
	axis lines=center,
	axis line style={thick},
    xlabel=$U$,
    ylabel=$I$,
    xticklabel=\empty,
    yticklabel=\empty,
    enlargelimits=true,clip=false]
	\addplot[color=red, domain=-4:4] {0.5*x} node[anchor=north west] {$R$ ist gross};
	\addplot[color=green, domain=-2:2] {2*x} node[anchor=north west] {$R$ ist klein};
	\end{axis}
  \end{tikzpicture}
\end{document}
```
Wenn der Widerstand klein ist fliesst weniger Strom bei gleicher Spannung als wenn der Widerstand gross ist.

### 3.3 Kirchhoffsche Gesetze
Die Kirchhoffschen Gesetze 
#### Knotensatz
Ein Knoten kann keine Ladung speichern, d.h. Ladungen die in den Knoten einströmen müssen wieder abgeführt werden. Analogie eine Wasserleitung die sich nicht vergrössern oder ausdehnen kann.
![[Knotensatz_skizze.png#invert_dark]]
Im Allgemeinen so viele Ladungen die in einen Knoten hereinkommen müssen auch wieder aus dem Knoten abfliessen.

$$ \begin{align}
I_{1}+I_{2}+I_{3}=0 \quad \Longleftrightarrow \quad  \sum^{n}_{v=1}I_{v}=0
\end{align}
$$
Diese Gleichung muss immer erfüllt sein. Das heisst mindestens einer der oberen ströme muss ein negatives Vorzeichen besitzen, um Ströme wieder abfliessen zu lassen

Wenn es in einer bestimmten Baugruppe keine Bauteile hat die Ladungen speichern können (Kondensatoren, Batterien, Akkus), kann ein [[#Superknoten]] gebildet werden.


##### Superknoten
Superknoten sind Vereinfachungen um nicht bei jeden kleinen Knoten die Ströme messen zu müssen. So können grössere Teile einer Schaltung überprüft werden.
![[Superknoten.png#invert]]

#### Maschensatz
Der Maschensatz besagt wenn eine Ladung im [[Einführung & Grundlagen - 2025-09-15#2.2 Feldbegriff (Faraday)|Potenzialfeld]] von Punkt A verschoben und wieder zurückverschoben wird dan ist die Arbeit 0.

Das heisst in jeder Masche muss die Summe aller Spannungen 0 sein.
$$
U_{1}+U_{2}+U_{3}+U_{4}=0 \quad \Longleftrightarrow \quad \sum^{n}_{k=1}U_{k}=0
$$
![[Maschensatz.png#invert]]
Es muss eine Richtung gewählt werden, zum Beispiel im Uhrzeigersinn. Wenn nun ein Spannungszählpfeil nicht der Richtung entspricht, wird ein entsprechendes Vorzeichen gewählt. in der Folgenden Abbildung wird dieses Vorgehen gezeigt:
![[Masche mit verschiedenen Pfeilrichtungen.png#invert]]
$U_{2}$ und $U_{5}$ zeigen in die falsche richtung können also nicht einfach pluss gerechnet werden:
$$
U_{1}+(-U_{2})+U_{3}+U_{4}+(-U_{5}) = 0
$$

### Leistung
Leistung ist Arbeit durch Zeit

$$
P=\frac{W}{t}
$$
Die obere Formel gibt die mittlere Leistung. Die von einem Widerstand R aufgenommene Leistung beim Gleichstrom kann folgend berechnet werden:
**Wenn $U$ und $I$ bekannt:**
$$
P=U\cdot I
$$
**Wenn $I$ und $R$ bekannt:**
$$
P = I^{2}\cdot R 
$$
**Wenn $U$ und $R$ bekannt**
$$
P= \frac{U^{2}}{R}
$$
### Arbeit
Arbeit = Leistung pro Zeit
$$
W = U \cdot I \cdot t
$$

Einheiten für die obigen Formeln
$P$: Watt ($W$)
$W$: Wattsekunde ($Ws$) oder Joule ($J$) oder Newtonmeter ($Nm$)
$U$: Spannung ($V$)
$R$: Widerstand ($\ohm$)
$I$: Strom ($A$)

### Wirkungsgrad
Der Wirkungsgrad is

---
## ✅ ToDo

---
## 📕 Quellen
- 
