---
erstelldatum: 2026-03-04
tags:
  - lalg1
  - eliminationsverfahren 1
  - linearkombination
  - kollinearität
  - Gauss
Folien: Eliminationsverfahren I
---
## Wichtige Formeln
### Linearkombination
Eine Linearkombination von Objekten (wie Vektoren, mehr dazu in [[KAP2-lalg1 Der Vektorraum|Der Vektorraum]]) ist die Summe dieser Objekte, jeweils multipliziert mit reellen Koeffizienten $x_i$:
$$ x_1\vec{a}_1 + x_2\vec{a}_2 + \dots + x_N\vec{a}_N $$

### Lineares Gleichungssystem (Dreiecksform)
Ein lineares Gleichungssystem befindet sich in Dreiecksform, wenn alle Koeffizienten unter der Hauptdiagonalen Null sind. Es wird dann durch Rückwärtseinsetzen von unten nach oben gelöst . Beispiel für die Form:
$$
\begin{vmatrix} 
2x & -3y & +5z & = 12 \\ 
 & 5y & -z & = 6 \\ 
 & & 7z & = 28 
\end{vmatrix}
$$

## Definitionen
### Lineare Abhängigkeit und Komplanarität
Eine Menge von Vektoren heisst **linear abhängig**, wenn eine Linearkombination den Nullvektor $\vec{0}$ ergibt, wobei mindestens ein Koeffizient $x_i \neq 0$ ist:
$$ x_1\vec{a}_1 + x_2\vec{a}_2 + \dots + x_N\vec{a}_N = \vec{0} $$
Drei oder mehr linear abhängige Vektoren im $\mathbb{R}^3$ nennt man **komplanar** (sie liegen in einer gemeinsamen Ebene).

### Kollinearität
Zwei Vektoren $\vec{a}$ und $\vec{b}$ sind **kollinear** (parallel oder antiparallel), wenn es eine reelle Zahl $\lambda$ gibt, sodass gilt:
$$ \vec{a} = \lambda \cdot \vec{b} $$

## Herleitungen
### Überprüfung auf Kollinearität
Um zu prüfen, ob zwei Vektoren kollinear sind, sucht man den passenden Skalierungsfaktor $\lambda$.
**Beispiel:** 
Gegeben sind $\vec{a} = \begin{pmatrix} -3 \\ 1 \\ 8 \end{pmatrix}$ und $\vec{b} = \begin{pmatrix} x \\ -4 \\ z \end{pmatrix}$. 
Da die $y$-Komponente von $\vec{a}$ den Wert $1$ und bei $\vec{b}$ den Wert $-4$ hat, muss der Skalierungsfaktor $\lambda = -4$ sein. 
Daraus folgt für die anderen Komponenten: 
$x = -3 \cdot (-4) = 12$ 
$z = 8 \cdot (-4) = -32$

### Vorgehen beim Gaussverfahren
Ziel ist es, ein Gleichungssystem in die Dreiecksform zu bringen.
**Wichtige Regel:** Bei jedem Schritt gilt, dass die Zeile, die benutzt wird, um in anderen Zeilen zu eliminieren, nicht verändert werden darf. Dies verhindert linear abhängige Linearkombinationen.
