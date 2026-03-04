---
erstelldatum: 2026-02-26
tags:
  - lalg1
  - eliminationsverfahren

Folien: Eliminationsverfahren I
---
## Wichtige Formeln
### Lineares Gleichungssystem in Dreiecksform
Um ein lineares Gleichungssystem (LGS) zu lösen, bringt man es mit dem Gauss-Verfahren in die Dreiecksform (die Koeffizienten unter der Hauptdiagonalen sind Null). Danach löst man es durch Rückwärtseinsetzen von unten nach oben [1]:
$$
\begin{vmatrix} 
x & +2y & +3z & = 8 \\ 
 & 2y & +4z & = 14 \\ 
 & & 5z & = 10 
\end{vmatrix}
$$

## Definitionen
### Linearkombination
Eine Linearkombination von Objekten (wie Vektoren, mehr dazu in [[Kapitel 2|Der Vektorraum]]) ist die Summe dieser Objekte, jeweils multipliziert mit reellen Koeffizienten $x_i$ [2]:
$$x_1\vec{a}_1 + x_2\vec{a}_2 + \dots + x_N\vec{a}_N$$

### Lineare Abhängigkeit und Komplanarität
Eine Menge von Vektoren ist linear abhängig, wenn eine Linearkombination den Nullvektor $\vec{0}$ ergibt, wobei mindestens einer der Koeffizienten $x_i \neq 0$ ist [2]. Drei oder mehr Vektoren im $\mathbb{R}^3$, die linear abhängig sind, nennt man komplanar (sie liegen in einer gemeinsamen Ebene) [2].

### Kollinearität
Zwei Vektoren $\vec{a}$ und $\vec{b}$ sind kollinear (parallel), wenn es eine reelle Zahl $\lambda$ gibt, sodass gilt [3]:
$$\vec{a} = \lambda \cdot \vec{b}$$

## Herleitungen & Beispiele
### Überprüfung auf Kollinearität
Um zu prüfen, ob zwei Vektoren kollinear sind, sucht man den passenden Skalierungsfaktor $\lambda$ [1].

**Beispiel:**
Gegeben sind die Vektoren
$$ \vec{a} = \begin{pmatrix} -3 \\ 1 \\ 8 \end{pmatrix}, \quad \vec{b} = \begin{pmatrix} x \\ -4 \\ z \end{pmatrix} $$
Wir suchen $x$ und $z$, damit $\vec{a}$ und $\vec{b}$ kollinear sind [1]. 
Da die $y$-Komponente von $\vec{a}$ den Wert $1$ hat und bei $\vec{b}$ den Wert $-4$, muss der Skalierungsfaktor $\lambda = -4$ sein. 
Daraus folgt für die anderen Komponenten: 
$x = -3 \cdot (-4) = 12$ 
$z = 8 \cdot (-4) = -32$
