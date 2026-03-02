---
erstelldatum: 2026-03-01
tags:
Folien:
  - an2Woche02
---
## Wichtige Formeln
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
f(t) = r \cdot \cos(\omega t +\varphi_{0}) 
$$
Wobei $r \gt 0$ ist.
Die verschiebung lässt sich entweder über die **Phasenverschiebung** oder die **Zeitverschiebung** angeben
- Phasenverschiebung $\varphi = - \omega t_{0}$
- Zeitverschiebung $t_{0}=\frac{-2\pi}{T}\cdot \varphi_{0}$

Aus den Additionsformeln kann man nun 
### Gerade und Ungerade Funktionen
Gerade Funktionen sind symmetrisch zur $y$-Achse.
z.B. $f(-x) = f(x)$
![[SW02-an2 Trigonometrische Formeln, Arkusfunktionen_gerade_funktion.png#invert|300]]
Ungerade Funktionen sind symmetrisch zum Nullpunkt.
z.B. $f(-x)=-f(x)$
![[SW02-an2 Trigonometrische Formeln, Arkusfunktionen_ungerade_funktion.png#invert|300]]
### Arctan als Stammfunktion
$$

$$