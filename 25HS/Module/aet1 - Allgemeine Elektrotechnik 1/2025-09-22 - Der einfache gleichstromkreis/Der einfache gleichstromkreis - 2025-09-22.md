---
erstelldatum: 2025-09-22
tags: aet1
---

## ⁉️ Fragen

---
## 💡 Wichtige Begriffe

---
## 📄 Zusammenfassung
### Zählpfeile
Zählpfeile zeigen die Richtung des Stromflusses oder des Spannungsabfall an. Die Pfeile orientieren sich an der Flussrichtung von Positiven Ladungsträgern. Die Pfeile werden auf der Leitung oder über ein Bauteil gezeichnet.

```tikz
\usepackage{circuitikz}
\begin{document}

\begin{circuitikz}[european]
\draw [thick] (0,0) to[short, i>_=${I_{1}=1.5A}$] (4,0);
\draw [thick] (4,0) to[short, i<_=${I_{2}=-1.5A}$] (8,0);

\end{circuitikz}

\end{document}
```
Das Minus beim Wert eines Zählpfeil dreht die Richtung um.
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}[european]
\draw (0,0) to[isource] (0,3)

\end{circuitikz}
\end{document}
```

#### Verbraucherzählpfeilsystem
Wenn die Pfeile für $I$ & $R$ in die gleiche Richtung zeigen nennt man die Schreibweise Verbraucherzählpfeilsystem. Beim VZS sind die Anfänge & Enden der Pfeile jeweils am gleichen Ort.
**Bsp: Ohmscher Wiederstand**

#### Erzeugerzählpfeilsystem (EZS)
 Wenn $I$ & $R$ in die entgegengesetzte Richtung zeigen nennt man die Schreibweise Erzeugerzählpfeilsystem. 

**Bsp: Stromquelle**


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
	axis line style={-latex, thick},
    xlabel=$I$,
    ylabel=$U$,
    xtick distance=1,
	ytick distance=1,
    enlargelimits=true,clip=true]
    % code/plots here
    % eg. parabel \addplot[color=red, domain=-2:2] {x^2} node[pos=1.05, anchor=west] {$y=x^2$};
    % domain=x-axis from:to
    % e.g. lineare funktion \addplot[color=red, domain=-2:2] {2*x+1} node[pos=1.05, anchor=west] {$y=2x+1$};
	\addplot[color=red, domain=-2:2] {0.5*x+1};
	\addplot[color=green, domain=-2:2] {2*x+1};
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
