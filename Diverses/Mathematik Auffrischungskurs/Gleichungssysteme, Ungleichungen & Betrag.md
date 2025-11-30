---
erstelldatum: 2025-08-21
---
## ⁉️ Fragen
- [ ] Wie löse ich ein Gleichungssystem?
- [ ] Was sind die Potenzgesetze?
- [ ] Was muss ich bei einer Multiplikation mit einer negativen Zahl bei einer Ungleichung beachten?
- [ ] Was muss ich bei einem Linearen Gleichungssystem beachten?
- [ ] Was ist zu beachten wenn man eine Betragsgleichung löst?
- [ ] Wie werden Potenzen gelöst?
---
## 💡 Wichtige Begriffe
- **Gleichungssysteme** - mehrere Gleichungen mit 2 oder mehr unbekannten.
- **Ungleichungen** - Gleichungen die mit $< > \le \ge$ getrennt sind.
- **Betrag** - Zeichen um Negative Zahlen positiv zu machen
- **Potenzen** - Terme mit Hochzahlen
- **Exponenten** - Hochzahl einer Potenz. Zeigt an wie oft der term mit der Basis multipliziert wird.
- **Basis** - Die Basis einer Potenz, Die Zahl die unten im Term steht. 
- **Potenzgesetze** - Regeln um potenzen umzuformen.
---
## 📄 Zusammenfassung

### Lineare Gleichungssysteme
Lineare Gleichungssysteme sind zwei oder mehr Gleichungen mit zwei oder mehr unbekannten die Linear verlaufen. Im Beispiel sind zwei unbekannte $x,y$:


 $$
 \left\vert \begin{align}
 \ 2x+y &= 2 \\
  x + y &= \frac{3}{2} \ 
 \end{align}\right\vert
 $$

> [!math-example]
> Um ein Lineares Gleichungssystem zu lösen muss man nach einer variable auflösen und diesen Term anstelle der Variable in die anderen Gleichungen im Gleichungssystem einsetzen.
> $$
> \begin{align}
> x+y&=\frac{3}{2} \\
> x&=\frac{3}{2}-y
> \end{align}
> $$
> Man erhält eine Gleichung mit nur einer unbekannten:
> $$
> \begin{align}
> 2\left( \frac{3}{2}-y \right)+y =2 \\
> 3-2y+y=2 \\
> 3-y=2 \\
> 1=y \\
> y=1
> \end{align}
> $$
> Diese kann einfach gelöst werden und das Resultat in der ersten Gleichung eingesetzt werden.
> $$
> \begin{align}
> x+1=\frac{3}{2} \\
> x=\frac{1}{2}
> \end{align}
> $$
> Dann kann man die erste Gleichung lösen und hat beide Resultate:
> $$
> \begin{align}
> x=\frac{1}{2} \\
> y=1
> \end{align}
> $$

#### Gleichungssysteme mit 3 und mehr unbekannten
Ein Gleichungssystem mit mehr als 2 Unbekannten hat $n$ Gleichungen mit $n$ Unbekannten. Gelöst wird es genau gleich wie ein Gleichungssystem mit 2 Unbekannten, zuerst nach einer Unbekannten auflösen und dann in die anderen zwei Gleichungen einsetzen. Und so weiter.


$$
\left\vert
\begin{align}
\ a+b+c&=-1 \ \\
\ 4a+2b+c&= 4 \ \\
\ 16a+4b+c&=18
\end{align}
\right\vert
$$



> [!math-example] Beispiel
> Dann eine Gleichung nach einer Variable auflösen und in die anderen einsetzen (Bsp: nach $c$ in der ersten Gleichung):
> $$
> \begin{align}
> c&=-1-a-b \\
> 4&= 44a+2b-1-a-b \\
> 8&=16a+4b-1-a-b
> \end{align}
> $$
> Nun erhält man 2 Gleichungen mit 2 Variablen. Eine der beiden nach einer Variable auflösen und in der dritten Gleichung einsetzen (Bsp: nach $b$ in der zweiten Gleichung):
> $$
> \left\vert
> \begin{align}
> c&=-1-a-b \\
> 5&=3a+b \\
> 9&=15a+3b \quad |:3 
> \end{align}
> \right\vert
> $$
> $$
> \left\vert
> \begin{align}
> c&=-1-a-(5-3a) \\
> b&=5-3a \\
> 3&=5a+5-3a
> \end{align}
> \right\vert$$
> Nach $a$ auflösen und in die zweite Gleichungen einsetzen:
> $$
> \left\vert
> \begin{align}
> c&=-1-a-b \\
> b&=5-3a \\
> -2&=2a
> \end{align}
> \right\vert$$
> $$
> \left\vert
> \begin{align}
> c&=-1-(-1)-b \\
> b&=5-3(-1) \\
> a&=-1
> \end{align}
> \right\vert
> $$
> Jetzt die beiden Werte der Aufgelösten Variablen in die 1. Gleichung einsetzen
> $$
> \begin{align}
> c&=-1+1-b \\
> b&=8 \\
> a&=-1 \\
> \end{align}
> $$
> $$
> \begin{align}
> c&=-8 \\
> b&=8 \\
> a&=-1
> \end{align}
> $$
> 

### Nichtlineare Gleichungssysteme
Nichtlineare Gleichungssysteme sind Gleichungssysteme mit 2 oder mehr Unbekannten die aber im Gegensatz zu Linearen Gleichungssystemen nicht linear sind. Das bedeutet Potenzen können dabei sein.


$$\begin{align}
2x-5y&=0 \\
x*y&=3
\end{align}$$

Im Folgenden Beispiel fahren wir mit dem obigen Gleichungssystem weiter:

> [!math-example] Beispiel 
> Erste Gleichung nach einer Unbekannten auflösen:
> $$
> \begin{align}
> x=\frac{5}{2}y \\
> x*y=3
> \end{align}
> $$
> Einsetzen
> $$
> \left\vert
> \begin{align}
> x&=\frac{5}{2}y \\
> \frac{5}{2}y*y&=3
> \end{align}
> \right\vert
> $$
> $$
> \begin{align}
> x=\frac{5}{2}y \\
> \frac{5}{2}y^{2}=3
> \end{align}
> $$
> Bruch auflösen
> $$
> \begin{align}
> x=\frac{5}{2}y \\
> 5y^{2}=6
> \end{align}
> $$
> Faktor bei der Unbekannten entfernen
> $$
> \begin{align}
> x&=\frac{5}{2}y \\
> y^{2}&=\frac{6}{5}
> \end{align}
> $$
> Wurzel ziehen
> $$
> \begin{align}
> x_{1}&=\frac{5}{2}\left( \sqrt{\frac{6}{5}} \right) \\
> y_1&=\sqrt{\frac{6}{5}} \\
> x_{2}&=- \frac{5}{2}\left( \sqrt{\frac{6}{5}} \right) \\
> y_2&=-\sqrt{\frac{6}{5}}
> \end{align}
> $$

> [!important] Wichtig
> **Wichtig:** Bei nicht Linearen Gleichungssystemen wird immer eine Wurzel gezogen um die Potenz zu entfernen.

### Ungleichungen
Ungleichungen erkennt man an $< \ > \ \le \ \ge$. Sie werden gleich wie lineare und nichtlineare Gleichungssysteme gelöst.
> [!math-example] Beispiel
> $$
> \begin{align}
> 4x-3>x+2 \\
> 3x-3>2 \\
> 3x>5 \\
> \frac{x>5}{3} \\
> \mathbb{L}= ]\frac{5}{3};-\infty[
> \end{align}
> $$

> [!math-example] Beispiel 2
> $$
> \begin{align}
> 6x+2 \geq 10x+1 \\
> 6x \geq 10x-1 \\ \\
> -4x \geq -1 \\
> x \leq \frac{1}{4} \\
> \mathbb{L}= ]-\infty; \frac{1}{4}]
> \end{align}
> $$
> 

> [!important] Wichtig
> **Wichtig:** Wenn eine Ungleichung mit einer Negativen Zahl multipliziert oder dividiert wird muss das Ungleich zeichen gedreht werden.

> [!math-example] Beispiel 
> $$
> \begin{align}
> \frac{1}{3-x} < 1 \\
> \end{align}
> $$
> Wenn man nun $*(3-x)$ Rechnen würde müsste man sofort eine Fallunterscheidung machen.
> $$
> \begin{align}
> 1.\ Fall\ & 3-x > 0 \\
> 1&<3-x \\
> x&<2 \\
> &...
> \end{align}
> $$
> $$
> \begin{align}
> 2.\ Fall\ & 3-x < 0 \\
> 1&>3-x \\
> x&>2 \\
> &...
> \end{align}
> $$
> Ein anderer Weg ist folgender:
> $$
> \begin{align}
> \frac{1}{3-x}-1<0 \\
> \frac{1}{3-x}- \frac{3-x}{3-x}<0 \\
> \frac{1-(3-x)}{3-x}<0 \\
> \frac{x-2}{3-x}<0
> \end{align}
> $$
> Jetzt in einer Tabelle die Werte wo $x=0$ ist eintragen und schauen wann $x$ positiv und wann negativ ist.

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
    xtick distance=1,
	ytick distance=1,
    enlargelimits=true,clip=true]
    \addplot[color=red, domain=-6:10] {abs(x-2)} node[ anchor=east] {$y=|x-2|$};
    \addplot[color=green, domain=-8:10] {7} node[ anchor=north] {$y=7$};
	\end{axis}
  \end{tikzpicture}
\end{document}
```

Im folgenden Beispiel wird mit der Betragsgleichung aus der Definition gerechnet

> [!math-example] Beispiel
> Grafisch kann man ablesen:
> $x_{1}=-5$
> $x_{2}=9$
> 
> Rechnerisch muss man eine Fallunterscheidung machen um das Resultat zu erhalten
> $$
> \begin{align}
> \text{1. Fall} \quad x \ge 2 \\
> x-2=7 \\
> x=9
> \end{align}
> $$
> $$
> \begin{align}
> \text{2. Fall} \quad x &< 2 \\
> -(x-2)&=7 \\
> -x+2&=7 \\
> x&=-5
> \end{align}
> $$

### Potenzen

> [!abstract] Definitionen
> eine Potenz, auch Hochzahl genannt, gibt an wie oft die Basis mal sich selber multipliziert wird.
> $$
> \begin{align}
> a^{n}=&\underbrace{a*a...a} \\
> &\text{n mal mit Faktor a multipliziert}
> \end{align}
> $$
> Legende:
> $a$ = Basis
> $n$ = Exponent(Hochzahl)
> 
> #### Weitere Definitionen
> $$
> \begin{align}
> a^{0}=1: \quad \left( \frac{2^{4}}{2^{4}} = 1 = 2^{4-4}= 2^{0} \right)
> \end{align}
> $$
> $$
> a^{-n}=\frac{1}{a^n}
> $$

#### Potenzgesetze
Potenzgesetze sind Rechengesetze die für die Potenzen gelten. So können schwierige Terme mit Potenzen zu einfacheren umgeformt werden.

> [!abstract] Gesetze
> **PG1:** 
> $$a^{n} \cdot a^{m} = a^{n+m}$$
> **PG2:** 
> $$\dfrac{a^{n}}{a^{m}} = a^{n-m}$$
> **PG3:** 
> $$a^{n} \cdot b^{n} = (a \cdot b)^{n}$$
> **PG4:** 
> $$\dfrac{a^{n}}{b^{n}} = \left(\dfrac{a}{b}\right)^{n}$$
> **PG5:** 
> $$(a^{n})^{m} = a^{nm}$$
> 

> [!math-example] Beispiel
> $$
> \begin{align} \\
> 
> \frac{2^{7}*15^{3}}{6^{3}} & \xrightarrow{P3} \frac{(2*15)^{3}}{6^{3}} &\xrightarrow{P4} \left( \frac{2*15}{6} \right)^{3} &\xrightarrow{vereinfachen}5^{3}=125
> \end{align}
> $$

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
- [x] Betragsgleichungen
	- [x] Theorie
	- [x] Allgemeine Form
	- [x] Bsp
- [x] Potenzen
	- [x] Theorie
		- [x] Potenzgesetze
		- [x] Definitionen
	- [x] Allgemein
	- [x] Bsp

---
## 📕 Quellen

![[AuffrischungskursAufgabenHS25.pdf#page=9]]
### Lösungen
[[3GleichungssystemeUngleichungenBetrag.pdf]]
