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
### Zählpfeile
Zählpfeile zeigen die Richtung des Stromflusses oder des Spannungsabfall an. Die Pfeile orientieren sich an der Flussrichtung von Positiven Ladungsträgern. Die Pfeile werden auf der Leitung oder über ein Bauteil gezeichnet.

![[zählpfeile.png]]

Das Minus beim Wert eines Zählpfeil dreht die Richtung des Stromflusses um.

![[zählpfeile_U.png]]

| $U_{A}$                  |              $U_{B}$ |
| ------------------------ | -------------------: |
| 9V                       |                  -9V |
| $U_{12} = V_{1} - V_{2}$ | $U_{21}=V_{2}-V_{1}$ |

#### Verbraucherzählpfeilsystem
Wenn die Pfeile für $I$ & $R$ in die gleiche Richtung zeigen nennt man die Schreibweise Verbraucherzählpfeilsystem. Beim VZS sind die Anfänge & Enden der Strom- und Spannungspfeile jeweils am gleichen Ort. Am Beispiel eines Ohmschen Wiederstandes sieht man das Prinzip sehr gut:
![[Ohmscher Wiederstand.png]]
#### Erzeugerzählpfeilsystem (EZS)
 Wenn $I$ & $R$ in die entgegengesetzte Richtung zeigen nennt man die Schreibweise Erzeugerzählpfeilsystem. Am Beispiel einer Stromquelle kann das EZS Prinzip gezeigt werden. Der Stromzählpfeil zeigt im Uhrzeigersinn in die Richtung des Stromflusses von positiven Ladungsträgern, aber der Spannungszählpfeil zeigt in die entgegengesetzte Richtung.
![[stromquelle.png]]


### Ohmsches Gesetz

$$
I = \frac{U}{R}
$$

**Bsp:**
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
    xlabel=$I$,
    ylabel=$U$,
    yticklabel=\empty,
    enlargelimits=true,clip=true]
	\addplot[color=red, domain=-4:4] {0.5*x};
	\addplot[color=green, domain=-2:2] {2*x};
	\end{axis}
  \end{tikzpicture}
\end{document}
```

### Kirchhoffsche Gesetze

#### Knotensatz
Ein Knoten kann keine Ladung speichern, d.h. Ladungen die in den Knoten einströmen müssen wieder abgeführt werden. Analogie eine Wasserleitung die sich nicht vergrössern oder ausdehnen kann.

#### Maschensatz

### Leistung
Leistung ist Arbeit durch Zeit

$$
P=\frac{W}{t}
$$
Die obere Formel gibt die mittlere Leistung

$$
P=U\cdot I = i^{2}\cdot R = \frac{U^{2}}{R}
$$
### Arbeit
Arbeit = Leistung pro Zeit
$$
W = U \cdot I \cdot t
$$

Einheiten für die obigen Formeln
$P$: Watt ($W$)
$W$: Wattsekunde ($Ws$) oder Joule ($J$) oder Newtonmeter ($Nm$)

### Wirkungsgrad


---
## ✅ ToDo

---
## 📕 Quellen
- 
