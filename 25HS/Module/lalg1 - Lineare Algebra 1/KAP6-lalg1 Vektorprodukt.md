---
erstelldatum: 2026-03-04
tags:
  - lalg1
  - vektorprodukt
  - spatprodukt
  - abstand
  - rechtssystem
Folien: Vektorprodukt
---
## Wichtige Formeln
### Vektorprodukt
Das Vektorprodukt $\vec{c} = \vec{a} \times \vec{b}$ von zwei Vektoren im $\mathbb{R}^3$, die den Winkel $\varphi$ einschliessen, liefert einen Vektor mit der Länge:
$$ \|\vec{c}\| = \|\vec{a}\| \cdot \|\vec{b}\| \cdot \sin(\varphi) $$
*Praktische Berechnung:* Man schreibt die ersten beiden Komponenten unten an die Vektoren hin, streicht die erste Zeile und berechnet zeilenweise über Kreuz die Differenzen (z.B. $a_2b_3 - a_3b_2$).

### Spatprodukt
Das Spatprodukt kombiniert Vektor- und [[KAP5-lalg1 Skalarprodukt|Skalarprodukt]]:
$$ [\vec{a}, \vec{b}, \vec{c}] = \vec{a} \odot (\vec{b} \times \vec{c}) $$

### Abstand Punkt zu Gerade im Raum
Der Abstand $h$ eines Punktes $\vec{B}$ von einer Geraden $g: \vec{x} = \vec{A} + \lambda\vec{u}$ in $\mathbb{R}^3$ lautet:
$$ h = \frac{\|\vec{u} \times (\vec{B} - \vec{A})\|}{\|\vec{u}\|} $$

## Definitionen
### Vektorprodukt (Kreuzprodukt)
Das Vektorprodukt $\vec{a} \times \vec{b}$ existiert nur im $\mathbb{R}^3$. Der resultierende Vektor $\vec{c}$ steht orthogonal (senkrecht) zu $\vec{a}$ und $\vec{b}$. Die drei Vektoren bilden dabei ein Rechtssystem (Rechte-Hand-Regel).

### Spatprodukt und Volumen
Das Parallelepiped, welches durch drei Vektoren $\vec{a}, \vec{b}, \vec{c}$ aufgespannt wird, nennt man Spat. Der Betrag des Spatprodukts $|[\vec{a}, \vec{b}, \vec{c}]|$ entspricht dem Volumen dieses Spats. 

## Herleitungen
### Geometrische Bedeutung und Gesetze
- **a) Flächeninhalt:** Der Betrag des Vektorprodukts $\|\vec{a} \times \vec{b}\|$ entspricht exakt dem Flächeninhalt des Parallelogramms, das von $\vec{a}$ und $\vec{b}$ aufgespannt wird.
- **b) Distributivität:** $\vec{a} \times (\vec{b} + \vec{c}) = \vec{a} \times \vec{b} + \vec{a} \times \vec{c}$ 
- **c) Streckung:** $\vec{a} \times (\lambda \cdot \vec{b}) = \lambda (\vec{a} \cdot \vec{b})$
- **(d) Antikommutativität:** Beim Vertauschen der Vektoren ändert sich das Vorzeichen (die Richtung des Vektors dreht sich um) :   $$ \vec{a} \times \vec{b} = -(\vec{b} \times \vec{a}) $$

![[KAP6-lalg1 Vektorprodukt_flaeche.png#invert]]
### Beispiel zur praktischen Berechnung
Wir suchen das Vektorprodukt von $\vec{a} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ und $\vec{b} = \begin{pmatrix} 4 \\ 5 \\ 6 \end{pmatrix}$.
Man rechnet komponentenweise über Kreuz (zweite mal dritte minus dritte mal zweite, etc.):
$$ \vec{a} \times \vec{b} = \begin{pmatrix} 2 \cdot 6 - 3 \cdot 5 \\ 3 \cdot 4 - 1 \cdot 6 \\ 1 \cdot 5 - 2 \cdot 4 \end{pmatrix} = \begin{pmatrix} 12 - 15 \\ 12 - 6 \\ 5 - 8 \end{pmatrix} = \begin{pmatrix} -3 \\ 6 \\ -3 \end{pmatrix} $$