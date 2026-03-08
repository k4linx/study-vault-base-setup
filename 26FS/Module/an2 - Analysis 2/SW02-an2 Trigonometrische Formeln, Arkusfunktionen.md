---
erstelldatum: 2026-03-01
tags:
  - arcsin
  - arccos
  - arctan
  - ableitung
  - gleichfrequente_schwingungen
  - pythagoras
  - drehmatrix
Folien:
  - an2Woche02
---
## Wichtige Formeln
### sin^2 cos^2 tan^2 
$$

$$
### Ableitung arcsin
$$
\frac{d}{dy} = \arcsin(y) = \frac{1}{\cos(x)} = \frac{1}{\sqrt{1-\sin^{2}(x)}} = \frac{1}{\sqrt{1-y^{2}}} \ \text{für} \ y \in [-1; 1]
$$
### Ableitung arccos
$$
\frac{d}{dy}\arccos(y) = \frac{1}{-\sin(x)} = \frac{-1}{\sqrt{1-\cos^{2}(x)}} = \frac{-1}{\sqrt{1-y^{2}}} \text{für} y \in [-1, 1]
$$

### Ableitung arctan
$$
\frac{d}{dy} = \arctan(y) = \frac{1}{1+y^{2}} \ \text{für}\ y \in \mathbb{R}
$$

### Schwingungsüberlagerung bei gleicher Frequenz
$$
f(t) = a \cdot \cos(\omega t) + b \cdot \sin(\omega t) \overset{auf}{\rightarrow} f(t) = r \cdot \cos(\omega t + \varphi_{0})
$$
$$
\begin{align}
r &= \sqrt{a^{2}+ b^{2}} \\
b \leq 0 \ \Rightarrow \varphi &= \arccos\left( \frac{a}{r} \right) \\
b \gt 0 \ \Rightarrow \varphi &= - \arccos\left( \frac{a}{r} \right) \Leftrightarrow 2\pi-\arccos\left( \frac{a}{r} \right)
\end{align}

$$

## Definitionen
### Trigonometrischer Pythagoras
$$
\sin^{2}(t)+ \cos^{2}(t) = 1
$$
### Additionsformeln
Die Additionsformeln werden mit der [[SW02-alg Komplexe Wurzeln, Eulersche Formel#Drehung um den Nullpunkt|Drehmatrix]] ermittelt. $x$ hat dabei die Komponenten $\begin{pmatrix}\cos(\beta) \\ \sin(\alpha)\end{pmatrix}$, $x'$ hat die komponenten $\begin{pmatrix}\cos(\alpha + \beta) \\ \sin(\alpha + \beta)\end{pmatrix}$ 
Die Beiden Additionsformeln sind:
$$
\begin{align}
\cos(\alpha+\beta) = \cos(\alpha)\cdot \cos(\beta) - \sin(\alpha)\cdot \sin(\beta) \\
\sin(\alpha+\beta) = \sin(\alpha)\cdot \cos(\beta) + \cos(\alpha)\cdot \sin(\beta)
\end{align}
$$
### Schwingungsüberlagerung bei gleicher Frequenz
Wenn eine $\cos$ und $\sin$ Funktion die gleiche Kreisfrequenz $\omega = \frac{2\pi}{T}$ haben lässt sich die Summe der beiden als verschobene $\cos$ Funktion schreiben
$$
\begin{align} \\
f(t) &= {\color{red}a} \cdot \cos(\omega t) + {\color{blue}b} \cdot \sin(\omega t) \\
f(t) &= r \cdot \cos(\omega t +\varphi_{0}) 
\end{align}
$$
Wobei $r \gt 0$ ist.
Die verschiebung lässt sich entweder über die **Phasenverschiebung** oder die **Zeitverschiebung** angeben
- Phasenverschiebung $\varphi = - \omega t_{0}$
- Zeitverschiebung $t_{0}=\frac{-2\pi}{T}\cdot \varphi_{0}$


Aus den [[#Additionsformeln]] kann man nun $\color{red}a$ und $\color{blue} b$ berechnen
$$
\begin{align}
\color{red} a &= r \cdot \cos(\varphi_{0})  \\
\color{blue} b &= -r \cdot sin(\varphi_0)
\end{align}
$$
Führt zu:
$$
\begin{align}
r \cdot \cos(\omega t + \varphi_{0}) &= r \cdot (\cos(\omega t) \cdot \cos(\varphi_{0}) - \sin(\omega t) \cdot \sin(\varphi_{0}) ) \\
&= {\color{red} r \cdot \cos(\varphi_{0})} \cdot \cos(\omega t) - {\color{blue} r \cdot \sin(\varphi_{0})} \cdot \sin(\omega t)
\end{align}
$$
$$a^{2}+b^{2} = r^{2}\cdot \underset{1}{\underbrace{(\cos^{2}(\varphi_{0}) + \sin^{2}(\varphi_{0}))}} \Rightarrow r = \sqrt{a^{2}+b^{2}} \gt 0$$

![[SW02-an2 Trigonometrische Formeln, Arkusfunktionen_schwingungsüberlagerung.png#invert|402]]
$x$ ist bekannt als $\cos(\varphi_{0})$ und $y$ is $\sin(\varphi)$ 
$$
\begin{align}
x = \frac{a}{r} = \cos(\varphi) \\
y = - \frac{b}{r} = \sin(\varphi)
\end{align}
$$
Wenn nun der Punk P oberhalb der $x$-Achse liegt wird der $\arccos(x)$ verwendet um $\varphi_{0}$ zu finden. Unterhalb wird einfach der $-\arccos(x)$ verwendet. anders ausgedrückt:
- Wenn $y \geq 0$ und $b \leq 0 \Rightarrow \arccos$
- Wenn $y \lt 0$ und $b \gt 0 \Rightarrow -\arccos$

### Gerade und Ungerade Funktionen
Gerade Funktionen sind symmetrisch zur $y$-Achse.
z.B. $f(-x) = f(x)$
![[SW02-an2 Trigonometrische Formeln, Arkusfunktionen_gerade_funktion.png#invert|300]]
Ungerade Funktionen sind symmetrisch zum Nullpunkt.
z.B. $f(-x)=-f(x)$
![[SW02-an2 Trigonometrische Formeln, Arkusfunktionen_ungerade_funktion.png#invert|300]]
### Arctan als Stammfunktion
Die Ableitung vom $arctan$ ist definiert als
$$
\frac{d}{dx}\arctan(x) = \frac{1}{1+y^{2}} 
$$
Mit der [[linearen Substitution]] kann man einfach integrale bestimmen 
$$
\begin{align}
\int \frac{1}{4+7x^{2}} dx = \int\frac{1}{4} \cdot \frac{1}{1+\frac{7}{4}x^{2}}dx = \int \frac{1}{4} \cdot \frac{1}{1+\left( \sqrt{\frac{7}{4}}x \right)^{2}} dx &= \frac{\arctan\left( \sqrt{\frac{7}{4}}x \right)^{2}}{4 \sqrt{\frac{7}{4}}}   \\
&= \frac{1}{4} \cdot \arctan\left( \sqrt{\frac{7}{4} x} \right) \cdot \frac{1}{\sqrt{\frac{7}{4}}}
\end{align}
$$
Oder mit der [[Quadratischen Ergänzung]] 
$$
\int \frac{5}{x^{2}+2x+10} dx = \int \frac{5}{(x^{2}+2x+1)+9}dx = \frac{5}{9} \cdot \frac{1}{\left( \frac{x+1}{3} \right)^{2}+1} dx = \frac{5}{3} \arctan\left( \frac{x+1}{3} \right)
$$
Wenn nun eine $-9$ erschienen wäre, müsste man die [[Partialbruchzerlegung]] anwenden, da das [[Polynom]] 2 Nullstellen hätte.