---
erstelldatum: 2026-03-04
tags:
  - lalg1
  - ebenen
  - parameterform
  - koordinatenform
  - normalenform
  - hesse-normalenform
  - abstand
Folien: Ebenen in R3
---
## Wichtige Formeln
### Parameterdarstellung einer Ebene
Eine Ebene im $\mathbb{R}^3$ wird durch einen Aufpunkt $\vec{P}$ und zwei nicht-kollineare Richtungsvektoren $\vec{u}$ und $\vec{v}$ aufgespannt ($\lambda, \nu \in \mathbb{R}$):
$$ \vec{x} = \vec{P} + \lambda\vec{u} + \nu\vec{v} $$

### Koordinatenform der Ebene
Eine Ebene ist definiert durch vier Parameter $n_1, n_2, n_3$ und $d$. Für jeden Punkt $\vec{x}$ in der Ebene gilt:
$$ n_1 \cdot x + n_2 \cdot y + n_3 \cdot z + d = 0 $$

### Normalenform der Ebene
Eine Ebene wird durch einen Normalenvektor $\vec{n}$ und den Ortsvektor eines Aufpunktes $\vec{A}$ beschrieben. Für jeden Punkt $\vec{x}$ in der Ebene gilt:
$$ (\vec{x} - \vec{A}) \odot \vec{n} = 0 $$

### Hesse-Normalenform (Abstand Punkt zu Ebene)
Der Abstand $h$ eines beliebigen Punktes $\vec{P}$ zur Ebene $E$ lässt sich effizient berechnen. 
Mit Vektoren:
$$ h(\vec{P}) = \frac{1}{\|\vec{n}\|} \cdot (\vec{P} - \vec{A}) \odot \vec{n} $$
Aus der Koordinatenform $ax + by + cz + d = 0$:
$$ h(x,y,z) = \frac{a x + b y + c z + d}{\sqrt{a^2 + b^2 + c^2}} $$

## Definitionen
### Aufpunkt und Richtungsvektoren
Der Aufpunkt $\vec{P}$ verankert die Ebene im Raum. Die zwei Richtungsvektoren $\vec{u}$ und $\vec{v}$ spannen die Ebene auf. Sie dürfen nicht in die gleiche Richtung zeigen (sie dürfen nicht linear abhängig sein).

### Normalenvektor der Ebene
Ein Vektor $\vec{n}$, der senkrecht auf der gesamten Ebene steht. Die Koeffizienten $n_1, n_2, n_3$ in der Koordinatenform entsprechen exakt den Komponenten dieses Normalenvektors.

## Herleitungen
### Umwandlung von Parameterform zu Koordinatenform
Wir nutzen das [[KAP6-lalg1 Vektorprodukt|Vektorprodukt]], um aus den beiden Richtungsvektoren $\vec{u}$ und $\vec{v}$ den Normalenvektor zu berechnen: 
$$ \vec{n} = \vec{u} \times \vec{v} $$
Anschliessend kann man die Konstante $d$ bestimmen, indem man die Koordinaten des Aufpunktes in die unvollständige Koordinatengleichung einsetzt.

### Beispiel zur Hesse-Normalenform
Wir wollen den Abstand eines beliebigen Punktes zur Ebene $E: 12x - 5y - 78 = 0$ berechnen. 
Wir stellen die Hesse-Normalenform auf, indem wir durch die Länge des Normalenvektors $\vec{n} = \begin{pmatrix} 12 \\ -5 \\ 0 \end{pmatrix}$ teilen:
$$ \|\vec{n}\| = \sqrt{12^2 + (-5)^2} = \sqrt{144 + 25} = \sqrt{169} = 13 $$
Die Abstandsfunktion lautet somit:
$$ h(x,y,z) = \frac{12x - 5y - 78}{13} $$
Setzen wir nun z.B. den Ursprung $\vec{0} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$ ein, erhalten wir einen Abstand von $h = \frac{-78}{13} = -6$ (Der Betrag ist $6$).