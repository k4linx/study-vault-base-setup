## ⁉️ Fragen
- [ ] Wie sieht die Grundform einer linearen Gleichung aus
- [ ] Wie sieht die Normalparabel aus?
- [ ] 
---
## 💡 Wichtige Begriffe

---
## 📄 Zusammenfassung
### Bruchgleichungen
Bruchgleichungen sind Gleichungen mit Brüchen:
$$
\begin{gather} \\
\frac{4z+6}{2z-10} - \frac{6z-43}{5-z} = 124 \\
\text{Ausklammern (Faktorisieren)} und Kürzen \\
\frac{\cancel{2}(2z+3)}{\cancel{2}(z-5)} + \frac{6z-43}{z-5} = 124 \\
\frac{(2z+3)+(6z-43)}{z-5} = 124 & \ \text{falls } z \neq 5 & \ |*(z-5) \\
\mathbb{D} = \mathbb{R} \backslash \lbrace5\rbrace  \\
 \\
2z+3+6z-43=124z-620 & \ | -8z+620 \\
580=116z \\
5 = z \to \mathbb{L} \lbrace \rbrace
\end{gather}$$
**Wichtig:** [[2025-08-16 Mathematik#Theorie|Äquivalenzumforung]] beachten!!!

---
### Lineare Gleichung
Eine Lineare Gleichung hat für jeden $x$ Wert einen Eindeutigen $y$ Wert:
$$
y = m*x+c
$$
Legende:
- $m$ = Steigung
- $x$ = $x$ wert der Gleichung
- $c$ = $y$-Achsenabschnitt (Schnittpunkt mit der $y$-Achse)

#### Steigung
Die Steigung zeigt an wie stark der Graph einer Linearen Funktion nach oben geht.
Die Steigung kann mittels dem Delta 2er Punkte berechnet werden:
$$\begin{gather}
m = \frac{\Updelta y}{\Updelta x} = \frac{y_{q}-y_p}{x_{q}-x_{p}} = \frac{y_{p}-y_q}{x_{p}-x_q}
\end{gather}$$
**Beispiel:**
$$\begin{align}
P(3|2) & \ Q(5|4) \\
m =\frac{y_{q}-y_{p}}{x_{q}-x_{p}}=\frac{4-2}{5-3}=\frac{2}{2}=1
\end{align}$$
#### $y$-Achsenabschnitt
Der $y$-Achsen Abschnitt ist der Punkt an dem sich die Gerade mit der $y$-Achse Schneidet.
Um den $y$-Achsenabschnitt herauszufinden wird ein Punkt (P) auf der Geraden eingesetz und die Gleichung gelöst:
$$
\begin{gather}
y=\frac{-3}{5}x+c \\
1=-\frac{3}{5}(1)+c \\
1=-\frac{3}{5} +c & \ |+ \frac{3}{5}\\
\frac{8}{5}=c \\
\end{gather}
$$
---
### Stückweise definierte Funktionen
TODO

---
### Quadratische Gleichung
Quadratische gleichungen sind Gleichungen die einen Term der Form $x^2$ enthalten. die grundform sieht folgend aus:

$$\begin{gather}
ax^{2}+bx+c = 0
\end{gather}$$
Legende:
- 
Um Quadratische Gleichungen zu lösen gibt es 2 Möglichkeiten:
1. Quadratische Gleichungen können mit der [[2025-08-17 Mathematik Auffrischungskurs#Mitternachtsformel|Mitternachtsformel (MNF)]] gelöst werden.
2. Quadratische Gleichungen können teils [[2025-08-16 Mathematik#Faktorisieren|Faktorisiert]] werden.

#### Mitternachtsformel
Die grundform der Mitternachtsformel sieht so aus:
$$
x_{1,2} = \frac{-b +- \sqrt{b^2-4*a*c}}{2*a}
$$
In diese Grundform müssen nun noch die Werde der Quadratischen Gleichung eingesetzt werden.

---
### Lineare Funktionen
Lineare Funktionen verlaufen immer linear in eine Koordinatensystem:
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
    % eg. parabel \addplot[color=red, domain=-2:2] {x^2} node[pos=1.05, anchor=west] {$y=2x+1$};
    % domain=x-axis from:to
    % e.g. lineare funktion \addplot[color=red, domain=-2:2] {2*x+1} node[pos=1.05, anchor=west] {$y=2x+1$};
	\addplot[color=red, domain=-2:2] {2*x+1} node[pos=1.05, anchor=west] {$y=2x+1$};
	\end{axis}
  \end{tikzpicture}
\end{document}
```

#### Schnittpunkt von 2 Geraden
Um den Schnittpunkt von 2 Geraden herauszufinden werden die beiden Geraden [[2025-08-17 Mathematik Auffrischungskurs#Geradengleichsetzung|gleichgesetzt]]:
$$
\begin{gather}
y_{1}=m_{1}*x_{1}+c_{1} \\
y_{2}=m_{2}*x_{2}+c_2 \\
\text{Gleichsetzen} \\
m_{1}*x_{1}+c_{1}=m_{2}*x_{2}+c_{2} \\
\end{gather}
$$
Dann kann die Gleichung gelöst werden um $x_{s}$ zu erhalten. Als nächstes wird $x_{s}$ in eine der beiden Gleichungen eingesetzt und diese Gleichung wird aufgelöst.

#### Geradengleichsetzung:
bei der Geradengleichsetzung werden zwei Lineare Funktionen die nach y aufgelöst werden sollen gleichgesetzt. Es wird eine neue Gleichung aus den Beiden Funktionsgleichungen erstellt. Danach wird die Gleichung nach $x$ aufgelöst, somit erhält man $x_{s}$, die $x$ Koordinate des Schnittpunktes der beiden Geraden.

---
### Quadratische Funktionen
Die Normalparabel ist: $y = x^2$
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
    % eg. \addplot[color=red, domain=-2:2] {x^2};
    % domain=x-axis from:to
	\addplot[color=red, domain=-2:2] {x^2} node[pos=1.05, anchor=north] {$y=x^2$};
	\end{axis}
  \end{tikzpicture}
\end{document}
```

Mit der Normalparabel können folgende Operationen ausgeführt werden:
- Verschiebung an $x$-Achse
- Verschiebung an $y$-Achse
- Streckung zur $x$-Achse
- Streckung zur $y$-Achse
- Spiegelung an $x$-Achse
- Spiegelung an $y$-Achse

### Wichtig:


---
## ✅ ToDo
- [ ] #task Verständnissfragen
- [ ] #task Wichtige Begriffe - 2 Sätze pro Begriff
- [ ] #task Lineare Gleichungen fertig machen
	- [x] Grafik
	- [ ] Bsp
	- [ ] Geradengleichsetzung
		- [ ] How To
		- [ ] Bsp
- [ ] #task Quadratische Gleichungen fertig machen
	- [ ] Legende
	- [ ] Grafik
	- [ ] Bsp
- [ ] #task Stückweise definierte Lineare Funktionen zusammenfassen
	- [ ] Syntax
	- [ ] Grafik
	- [ ] Legende
	- [ ] Bsp
- [ ] #task Quadratische Funktionen zusammenfassen
	- [ ] Verschiebung, Streckung & Spiegelung 
	- [ ] Scheitelpunktform, Standardform & Produktform 
- [ ]  #task Lösungen & Unterlagen verlinken
- [ ] Allgemein Wichtiges/zu beachten Zusammenfassen

---
## 📕 Quellen
![[AuffrischungskursAufgabenHS25.pdf#page=5]]


# test
## test
### test
#### test
##### test
###### test
