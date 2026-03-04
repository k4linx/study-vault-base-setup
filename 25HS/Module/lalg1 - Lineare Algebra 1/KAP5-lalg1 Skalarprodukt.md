---
erstelldatum: 2026-03-04
tags:
  - lalg1
  - skalarprodukt
  - projektion
  - lot
  - spiegelung_an_gerade
  - normierter_vektor
  - orthogonalbasis
  - orthonormalbasis
  - 
Folien: Skalarprodukt
---
## Wichtige Formeln
![[KAP5-lalg1 Skalarprodukt_projektion_spiegelung.png#invert]]
### Skalarprodukt
Für zwei Vektoren $\vec{a}$ und $\vec{b}$, die den Winkel $\varphi$ einschliessen, lässt sich das Skalarprodukt auf zwei Arten berechnen (geometrisch und in einer Orthonormalbasis komponentenweise):
$$ \vec{a} \odot \vec{b} = \|\vec{a}\| \cdot \|\vec{b}\| \cdot \cos(\varphi) $$
$$ \vec{a} \odot \vec{b} = a_1b_1 + a_2b_2 + \dots + a_Nb_N $$

### Projektion und Lot
Der Vektor $\vec{b}$ lässt sich in einen Vektor $\vec{f}$ (parallel zu $\vec{a}$, die **Projektion** bzw. der Schatten) und einen Vektor $\vec{h}$ (senkrecht zu $\vec{a}$, das **Lot**) zerlegen, sodass $\vec{b} = \vec{f} + \vec{h}$.
$$ \vec{f} = \frac{\vec{b} \odot \vec{a}}{\vec{a} \odot \vec{a}} \cdot \vec{a} $$
$$ \vec{h} = \vec{b} - \vec{f} $$

### Spiegelung an einer Geraden (durch den Ursprung)
Projiziert man einen Punkt $\vec{P}$ auf den [[KAP3-lalg1 Darstellung der Gerade in R2|Normalenvektor]] $\vec{n}$ einer Geraden, erhält man $\vec{h} = \frac{\vec{P} \odot \vec{n}}{\vec{n} \odot \vec{n}} \cdot \vec{n}$. Der an der Geraden gespiegelte Punkt $\vec{P}''$ berechnet sich dann durch:
$$ \vec{P}'' = \vec{P} - 2\vec{h} $$

## Definitionen
### Normierter Vektor
Ein Vektor, der durch seine eigene [[KAP2-lalg1 Der Vektorraum|Norm]] (Länge) geteilt wird, hat die Länge 1 und heisst normiert: $\frac{\vec{a}}{\|\vec{a}\|}$.

### Orthogonal- und Orthonormalbasis
Eine Basis aus linear unabhängigen Vektoren heisst **orthogonal**, wenn alle Basisvektoren rechtwinklig aufeinander stehen (ihr Skalarprodukt ist 0). Haben alle diese Basisvektoren zusätzlich die Länge 1, handelt es sich um eine **Orthonormalbasis**.

## Herleitungen
### Berechnung des Zwischenwinkels
Mithilfe des Skalarprodukts kann der Winkel $\varphi$ zwischen zwei Vektoren bestimmt werden, indem man die geometrische Definition umformt:
$$ \varphi = \arccos\left( \frac{\vec{a} \odot \vec{b}}{\|\vec{a}\| \cdot \|\vec{b}\|} \right) $$

**Beispiel:** 
Für $\vec{a} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ und $\vec{b} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ gilt komponentenweise $\vec{a} \odot \vec{b} = 1 \cdot 1 + 0 \cdot 1 = 1$.
Ihre Längen sind $\|\vec{a}\| = 1$ und $\|\vec{b}\| = \sqrt{1^2 + 1^2} = \sqrt{2}$. 
Der Winkel ist somit:
$$ \varphi = \arccos\left(\frac{1}{1 \cdot \sqrt{2}}\right) = 45^\circ $$

### Rechengesetze des Skalarprodukts
Das Skalarprodukt ist kommutativ ($\vec{a} \odot \vec{b} = \vec{b} \odot \vec{a}$), distributiv ($(\vec{b} + \vec{c}) \odot \vec{a} = \
