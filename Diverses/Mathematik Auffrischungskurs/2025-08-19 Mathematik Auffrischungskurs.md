## ⁉️ Fragen

---
## 💡 Wichtige Begriffe

---
## 📄 Zusammenfassung
Gleichungssysteme bis potenzen
### Lineare Gleichungssysteme
Lineare Gleichungssysteme sind zwei oder mehr gleichungen mit zwei oder mehr unbekannten die Linear verlaufen. Im Beispiel sind zwei unbekannte $x,y$:
$$
\left\vert \begin{align}
\ 2x+y &= 2 \\
 x + y &= \frac{3}{2} \ 
\end{align}\right\vert

$$
Um ein Lineares Gleichungssystem zu lösen muss man nach einer variable auflösen und diesen Term anstelle der Variable im andere Gleichungssystem einsetzen.
$$
\begin{align}
x+y&=\frac{3}{2} \\
x&=\frac{3}{2}-y
\end{align}
$$
Man erhält eine Gleichung mit nur einer unbekannten:
$$
\begin{align}
2\left( \frac{3}{2}-y \right)+y =2 \\
3-2y+y=2 \\
3-y=2 \\
1=y \\
y=1
\end{align}
$$
Diese kann einfach gelöst werden und das Resultat in der ersten Gleichung eingesetzt werden.
$$
\begin{align}
x+1=\frac{3}{2} \\
x=\frac{1}{2}
\end{align}
$$
Dann kann man die erste Gleichung lösen und hat beide Resultate:
$$
\begin{align}
x=\frac{1}{2} \\
y=1
\end{align}
$$
#### Gleichungssysteme mit 3 und mehr unbekannten
Im Grunde ist es der Gleiche Mechanismus wie beim System mit 2 Unbekannten

$$
\left\vert
\begin{align}
\ x+y+z&=11 \ \\
\ 2x+y+3z&= 4 \ \\
\ x-y+z&=1
\end{align}
\right\vert
$$
Dann eine Gleichung nach einer Variable auflösen und in die anderen einsetzen:
$$
\begin{align}
x&=-y-z+11 \\
2(-y-z+11)+y+3z &=4 \\
(-y-z+11)-y+z&=1
\end{align}
$$
Auflösen und eine der beiden nach einer Variable auflösen:
$$
\begin{align}
x&=-y-z+11 \\
-y+2z+11 &=4 \\
y&=-5
\end{align}
$$
Einsetzen:
$$\begin{align}
x&=-y-z+11 \\
2z&=-12 \\
y&=-5
\end{align}$$
Jetzt die beiden Werte der Aufgelösten Variablen in die 1. Gleichung einsetzen
$$
\begin{align}
x=5+6+11 \\
y=-5 \\
z=-6 \\
\end{align}
$$
Resultate für dieses System sind nun:
$$
\begin{align}
x=22 \\
y=-5 \\
z=-6
\end{align}
$$
### Nichtlineare Gleichungssysteme
Nichtlineare Gleichungssysteme sind Gleichungssysteme mit 2 oder mehr Unbekannten die aber im Gegensatz zu Linearen Gleichungssystemen nicht linear sind. Das bedeutet Potenzen können dabei sein.


---
## ✅ ToDo
- [ ] Lineare Gleichungssysteme
	- [ ] Allgemeine Form
	- [ ] Bsp
	- [ ] 3 Gleichungen mit 3 Unbekannten
- [ ] Nichtlineare Gleichungssysteme
	- [ ] Theorie
	- [ ] Allgemeine Form
	- [ ] Bsp
- [ ] Ungleichungen
	- [ ] Theorie
	- [ ] Allgemeine Form
	- [ ] Bsp
- [ ] Betrag
	- [ ] Theorie
	- [ ] Allgemeine Form
	- [ ] Bsp
- [ ] Betragsgleichungen
	- [ ] Theorie
	- [ ] Allgemeine Form
	- [ ] Bsp
- [ ] Potenzen
	- [ ] Theorie
		- [ ] Potenzgesetze
		- [ ] Definitionen
	- [ ] Allgemein
	- [ ] Bsp

---
## 📕 Quellen

```tikz
\usepackage{pgfplots}

\begin{document}
  \begin{tikzpicture}
	\begin{axis}[
	no markers,
	grid=both,
	grid style={gray},
	axis equal,
	axis lines=center,
	axis line style={-latex, thick},
    xlabel=$x$,
    ylabel=$y$,
    xtick distance=1,
	ytick distance=1,
    enlargelimits=true,clip=true]
    % code/plots here
    % eg. parabel \addplot[color=red, domain=-2:2] {x^2} node[pos=1.05, anchor=west] {$y=x^2$};
    % domain=x-axis from:to
    % e.g. lineare funktion \addplot[color=red, domain=-2:2] {2*x+1} node[pos=1.05, anchor=west] {$y=2x+1$};
    \addplot[color=green, domain=-2:2] {x^2} node[anchor=north] {$y=x^{2}$};
    
    \addplot[color=red, domain=-3:3] {x} node[ anchor=north] {$y=x$};

    \addplot[color=blue, domain=-4:4] {abs(x)} node[ anchor=north] {$y=|x|$};

	\end{axis}
  \end{tikzpicture}
\end{document}
```


