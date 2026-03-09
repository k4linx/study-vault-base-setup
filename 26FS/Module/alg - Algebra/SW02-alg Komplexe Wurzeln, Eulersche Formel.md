---
erstelldatum: 2026-03-01
tags:
  - komlexe_ebene
  - cis_schreibweise
  - eulersche_formel
  - polarform
  - komplexe_wurzeln
  - argument
  - grad_bogenmass
  - falk-schema
  - potenzgesetze
  - eulersche_zahl
  - ableitung
Folien:
  - algWoche02
---
## Wichtige Formeln
### Allgemeine Formel für arg(z)
$$
\cos(\phi) = \frac{a}{|z|} \Leftrightarrow \begin{matrix}
\phi = \arccos\left( \frac{a}{|z|} \right) \quad \text{Wenn z über der Reellen Achse liegt} \\
\phi = -\arccos\left( \frac{a}{|z|} \right) \quad \text{Wenn z unter der Reellen Achse liegt} \\
\end{matrix}
$$ 
### Addition in der Komplexen Ebene
$$
\begin{align}
z &= a + b i  \\
u &= c + d \\
z+ u &= a+ c + (b+d)i
\end{align}
$$
### Multiplikation in der komplexen Ebene
$$
\begin{align}
x &= a+bi \\
y &= c+di  \\
x \cdot y &= ac - bd + (ad + bc)i \\ \\

\arg(x \cdot y) &= \arg(x) + \arg(y) \\
|x \cdot y| &= |x| \cdot |y|
\end{align}
$$

### cis-schreibweise
$$
cis(\phi) = cos(\phi)+ \sin(\phi) \cdot i
$$
### Eulersche Formel
$$
e^{i\phi} = cos(\phi)+i \sin(\phi) = z(\phi)
$$
### Polarform mit Eulerscher Formel
$$
z = |z| \cdot e^{i \phi}
$$
### Grad $\Leftrightarrow$ Bogenmass
$$
\begin{align} \\
\frac{\alpha}{360} = \frac{\beta}{2 \pi} \\
\beta = \frac{\alpha}{360} \cdot 2 \pi \\
\alpha = \frac{\beta}{2\pi} \cdot 360
\end{align}
$$

---
## Definitionen
### Satz über die Addition
Die Addition in der Komplexen Ebene wird wie bei den Vektoren Komponentenweise durchgeführt. Das resultat sind die aneinandergehängten Ortsvektoren.
$$
\begin{align}
z &= a + b i  \\
u &= c + d \\
z+ u &= a+ c + (b+d)i
\end{align}
$$
![[SW02-alg Komplexe Wurzeln, Eulersche Formel_addition.png#invert|300]]
### Drehung um den Nullpunkt
Mit einer Matrix $A$ welche die Spalten $\vec{a_{1}} = \begin{pmatrix}1 \\ 0\end{pmatrix}$ und $\vec{a_{2}} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ kann ein Ortsvektor $\vec{x}$ um den Winkel $\alpha$ gedreht werden. dabei hat $\vec{x}$ die Komponenten $\begin{pmatrix} \cos(\alpha) \\ \sin(\alpha)\end{pmatrix}$ 
$$
\vec{x}' = A \cdot \vec{x} = \begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix} \cdot \begin{pmatrix}
\cos(\alpha) \\
\sin(\alpha)
\end{pmatrix} = \begin{pmatrix}
\cos(\alpha) &-\sin(\alpha) \\
\sin(\alpha)  &\cos(\alpha)
\end{pmatrix}
$$

Mithilfe der [[KAP9-lalg1 Matrixalgebra#Spezielle Matrizen|Drehmatrix]] kann der Ortsvektor $\vec{x}$ und den Winkel $\alpha$ gedreht werden. Dazu verwendet man das [[KAP9-lalg1 Matrixalgebra#Matrix-Produkt (Falk-Schema)|Falk Schema]].


### Satz über die Multiplikation
Bei der Multiplikation werden die Beträge von zwei komplexen Zahlen multipliziert und die Argumente addiert.
$$
\arg(x \cdot y) = \arg(x) + \arg(y)
$$
und
$$
|x \cdot y| = |x| \cdot |y|
$$

### Komplexe Wurzeln
Mit dem [[#Satz über die Multiplikation]] kann ganz schnell eine Wurzel der komplexen Zahl in der [[SW01-alg Komplexe Zahlen#Polarform|Polarform]] gefunden werden.
**Beispiel**
$$
z^{2}=9 \cdot cis(130°)
$$
für $z$ gilt nun also:
$$
z= 3 \cdot cis(65)
$$
weil
$$
\begin{align}
|z^{2}|&= 3^{2}= 9 \\
\arg(z^{2}) &= 65° + 65° = 130° 
\end{align}
$$
$z$ hat noch eine zweite Lösung welche $\leq 360°$ ist. Dazu nimmt man den bekannten winkel von $z^{2}$ und addiert $360°$:
$$
\begin{align}
z^{2}&= 9 \cdot cis(130°) \\
&= 9 \cdot cis(490°) \Rightarrow z = 3 \cdot cis(245)
\end{align}
$$
**Allgemein** bedeutet das $z^{n} = y$ hat genau $n-1$ komplexe Wurzeln:
$$
\begin{align}
z_{k}&= ^{n}\sqrt{|y|} \cdot cis(\phi_{k})  \\
n \phi_{k}&= 360k + \arg(y) \Rightarrow \phi_k = \frac{360k+\arg(y)}{n}, \quad k \in {0,n-1}
\end{align}
$$
Ist $y \in \mathbb{R}$ kann es sein dass die Gleichung auch reelle Lösungen hat.
### Eulersche Formel
Die [[Ableitung]] von $z(\phi) = cos(\phi) + \sin(\phi)\cdot i$ ist:
$$
\frac{d}{d \phi} = (\cos(\phi)+ \sin(\phi)i) = -sin(\phi) + \cos(\phi)i = i (\cos(\phi)+i \sin(\phi)) \Rightarrow \frac{d}{d \phi}z(\phi) = i \cdot z(\phi)
$$
Dies ist bereits aus der Analysis bekannt nämlich von der [[Eulerschen Zahl]].
$$
\frac{d}{d \phi} e^{\lambda\phi}= \lambda \cdot e^{\lambda\phi}
$$
Damit kann nun jeder Term der form $z(\phi)= \cos(\phi)+ i \sin(\phi)$ durch $e^{i \phi}$ ersetzt werden

Mit der Eulerschen Formel gelten die [[Gleichungssysteme, Ungleichungen, Betrag & Potenzen#Potenzgesetze|Potenzgesetze]] für die Basis $e$ mit Komplexen Exponenten weiter.
Bsp:
$$
e^{a+ib} = e^{a}\cdot e^{ib}= e^{a}\cdot(\cos(b)+i \sin(b))
$$
Daraus die Polarform wird nun neu 
$$
z = |z|\cdot e^{i\phi}
$$
---
