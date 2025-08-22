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
\ a+b+c&=-1 \ \\
\ 4a+2b+c&= 4 \ \\
\ 16a+4b+c&=18
\end{align}
\right\vert
$$
Dann eine Gleichung nach einer Variable auflösen und in die anderen einsetzen (Bsp: nach $c$ in der ersten Gleichung):
$$
\begin{align}
c&=-1-a-b \\
4&= 44a+2b-1-a-b \\
8&=16a+4b-1-a-b
\end{align}
$$
Nun erhält man 2 Gleichungen mit 2 Variablen. Eine der beiden nach einer Variable auflösen und in der dritten Gleichung einsetzen (Bsp: nach $b$ in der zweiten Gleichung):
$$
\left\vert
\begin{align}
c&=-1-a-b \\
5&=3a+b \\
9&=15a+3b \quad |:3 
\end{align}
\right\vert
$$
$$
\left\vert
\begin{align}
c&=-1-a-(5-3a) \\
b&=5-3a \\
3&=5a+5-3a
\end{align}
\right\vert$$
Nach $a$ auflösen und in die zweite Gleichungen einsetzen:
$$
\left\vert
\begin{align}
c&=-1-a-b \\
b&=5-3a \\
-2&=2a
\end{align}
\right\vert$$
$$
\left\vert
\begin{align}
c&=-1-(-1)-b \\
b&=5-3(-1) \\
a&=-1
\end{align}
\right\vert
$$
Jetzt die beiden Werte der Aufgelösten Variablen in die 1. Gleichung einsetzen
$$
\begin{align}
c&=-1+1-b \\
b&=8 \\
a&=-1 \\
\end{align}
$$
$$
\begin{align}
c&=-8 \\
b&=8 \\
a&=-1
\end{align}
$$
### Nichtlineare Gleichungssysteme
Nichtlineare Gleichungssysteme sind Gleichungssysteme mit 2 oder mehr Unbekannten die aber im Gegensatz zu Linearen Gleichungssystemen nicht linear sind. Das bedeutet Potenzen können dabei sein.
**Beispiel:**
$$\begin{align}
2x-5y&=0 \\
x*y&=3
\end{align}$$
Erste Gleichung nach einer Unbekannten auflösen:
$$
\begin{align}
x=\frac{5}{2}y \\
x*y=3
\end{align}
$$
Einsetzen
$$
\left\vert
\begin{align}
x&=\frac{5}{2}y \\
\frac{5}{2}y*y&=3
\end{align}
\right\vert
$$
$$
\begin{align}
x=\frac{5}{2}y \\
\frac{5}{2}y^{2}=3
\end{align}
$$
Bruch auflösen
$$
\begin{align}
x=\frac{5}{2}y \\
5y^{2}=6
\end{align}
$$
Faktor bei der Unbekannten entfernen
$$
\begin{align}
x&=\frac{5}{2}y \\
y^{2}&=\frac{6}{5}
\end{align}
$$
Wurzel ziehen
$$
\begin{align}
x_{1}&=\frac{5}{2}\left( \sqrt{\frac{6}{5}} \right) \\
y_1&=\sqrt{\frac{6}{5}} \\
x_{2}&=- \frac{5}{2}\left( \sqrt{\frac{6}{5}} \right) \\
y_2&=-\sqrt{\frac{6}{5}}
\end{align}
$$
**Wichtig:** Bei nicht Linearen Gleichungssystemen wird immer eine Wurzel gezogen um die Potenz zu entfernen.

### Ungleichungen
Ungleichungen erkennt man an $< \ > \ \le \ \ge$. Sie werden gleich wie lineare und nichtlineare Gleichungssysteme gelöst.
**Bsp 1:**
$$
\begin{align}
4x-3>x+2 \\
3x-3>2 \\
3x>5 \\
\frac{x>5}{3} \\
\mathbb{L}= ]\frac{5}{3};-\infty[
\end{align}
$$
**Bsp 2:**
$$
\begin{align}
6x+2 \geq 10x+1 \\
6x \geq 10x-1 \\ \\
-4x \geq -1 \\
x \leq \frac{1}{4} \\
\mathbb{L}= ]-\infty; \frac{1}{4}]
\end{align}
$$

**Wichtig:** Wenn eine Ungleichung mit einer Negativen Zahl multipliziert oder dividiert wird muss das Ungleich zeichen gedreht werden.

**Bsp 3:**
$$
\begin{align}
\frac{1}{3-x} < 1 \\
\end{align}
$$
Wenn man nun $*(3-x)$ Rechnen würde müsste man sofort eine Fallunterscheidung machen.
$$
\begin{align}
1.\ Fall\ & 3-x > 0 \\
1&<3-x \\
x&<2 \\
&...
\end{align}
$$
$$
\begin{align}
2.\ Fall\ & 3-x < 0 \\
1&>3-x \\
x&>2 \\
&...
\end{align}
$$
Ein anderer Weg ist folgender:
$$
\begin{align}
\frac{1}{3-x}-1<0 \\
\frac{1}{3-x}- \frac{3-x}{3-x}<0 \\
\frac{1-(3-x)}{3-x}<0 \\
\frac{x-2}{3-x}<0
\end{align}
$$
Jetzt in einer Tabelle die Werte wo $x=0$ ist eintragen und schauen wann $x$ positiv und wann negativ ist.
### Betrag
Das Betragszeichen entfernt das $-$ bei einem negativen term.
$$|-2| = 2$$ Die funktion mit einem Betrag macht immer ein V:
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
    \addplot[color=red, domain=-4:4] {abs(x)} node[ anchor=north] {$y=|x|$};
	\end{axis}
  \end{tikzpicture}
\end{document}
```


### Betragsgleichungen
Betragsgleichungen enthalten einen Term in Betragsform in der Gleichung, somit gibt es immer 2 Fälle die gelöst und überprüft werden müssen.
Bsp:
$$
|x-2|=7
$$
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
    xtick distance=2,
	ytick distance=2,
    enlargelimits=true,clip=true]
    \addplot[color=red, domain=-10:14] {abs(x-2)} node[ anchor=north] {$y=|x-2|$};
    
    \addplot[color=green, domain=-10:12] {7} node[ anchor=north] {$y=7$};

	\end{axis}
  \end{tikzpicture}
\end{document}
```

$$
\begin{align}
\text{1. Fall} \quad x \ge 2 & \text{2. Fall x < 2} \\
x-2=7 & -(x-2)=7 \\
x=9
\end{align}

$$

### Potenzen
eine Potenz, auch Hochzahl genannt, gibt an wie oft die Basis mal sich selber multipliziert wird.
$$
\begin{align}
a^{n}=&\underbrace{a*a...a} \\
 &\text{n mal mit Faktor a multipliziert}
\end{align}
$$
Legende:
$a$ = Basis
$n$ = Exponent(Hochzahl)


#### Definitionen

$a^0=1$
Begründung:
$$
\begin{align}
a^{0}=1: \quad \left( \frac{2^{4}}{2^{4}} = 1 = 2^{4-4}= 2^{0} \right)
\end{align}
$$
#### Potenzgesetze
$$
\begin{align}
\text{PG1:} &\quad a^{n}*a^{m}=a^{n+m} \\
\text{PG2:} &\quad \frac{a^{n}}{a^{m}}=a^{n-m} \\
\text{PG3:} &\quad a^{n}*b^{n}=(a*b)^n\\
\text{PG4:} &\quad \frac{a^{n}}{b^{n}}=\left( \frac{a}{b} \right)^n\\
\text{PG5:} &\quad (a^{n})^{m}=a^{nm}
\end{align}
$$

**Beispiel**
$$
\begin{align} \\

\frac{2^{7}*15^{3}}{6^{3}} & \xrightarrow{P3} \frac{(2*15)^{3}}{6^{3}} &\xrightarrow{P4} \left( \frac{2*15}{6} \right)^{3} &\xrightarrow{vereinfachen}5^{3}=125
\end{align}
$$
---
## ✅ ToDo
- [x] Lineare Gleichungssysteme
	- [x] Allgemeine Form
	- [x] Bsp
	- [x] 3 Gleichungen mit 3 Unbekannten
- [x] Nichtlineare Gleichungssysteme
	- [x] Theorie
	- [x] Allgemeine Form
	- [x] Bsp
- [x] Ungleichungen
	- [x] Theorie
	- [x] Allgemeine Form
	- [x] Bsp
- [x] Betrag
	- [x] Theorie
	- [x] Allgemeine Form
	- [x] Bsp
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


