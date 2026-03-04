---
erstelldatum: 2026-03-04
tags:
  - lalg1
  - normalenvektorr2
  - parameterform
  - koordinatenform
  - orthogonalität
Folien: Darstellung der Gerade in R2
---
## Wichtige Formeln
### Parameterform der Geraden
Eine Gerade wird in der Geometrie durch einen Aufpunkt $\vec{A}$ und einen Richtungsvektor $\vec{v}$ mit dem freien Parameter $s \in \mathbb{R}$ beschrieben:
$$ \vec{x} = \vec{A} + s \cdot \vec{v} $$

### Normalenvektor in $\mathbb{R}^2$
Zu einem gegebenen Richtungsvektor $\vec{v} = \begin{pmatrix} v_x \\ v_y \end{pmatrix}$ steht der Normalenvektor $\vec{n}$ senkrecht. Man findet ihn durch Vertauschen der Komponenten und Wechseln eines Vorzeichens:
$$ \vec{n} = \begin{pmatrix} -v_y \\ v_x \end{pmatrix} $$

### Koordinatenform
Eine Gerade kann im zweidimensionalen Raum durch eine lineare Gleichung beschrieben werden. Die Koeffizienten von $x$ und $y$ entsprechen dabei exakt den Komponenten des Normalenvektors:
$$ n_x \cdot x + n_y \cdot y + d = 0 $$

## Definitionen
### Aufpunkt und Richtungsvektor
Der Aufpunkt $\vec{A}$ ist ein fest gewählter [[KAP2-lalg1 Der Vektorraum#Ortsvektor|Ortsvektor]], der auf der Geraden liegt. Der Richtungsvektor $\vec{v}$ bestimmt die Orientierung der Geraden. Vektoren mit derselben Richtung nennt man [[KAP1-lalg1 Eliminationsverfahren I#Kollinearität|kollinear]].

### Orthogonalität
Zwei Vektoren $\vec{v}$ und $\vec{w}$ stehen in $\mathbb{R}^2$ genau dann senkrecht (orthogonal) aufeinander, wenn gilt:
$$ v_x \cdot w_x + v_y \cdot w_y = 0 $$

## Herleitungen
### Umwandlung von Koordinatenform in Parameterform
Gegeben ist die Gerade $g: 5x + 8y - 16 = 0$. Wir suchen die Parameterform.

**1. Normalenvektor ablesen:**
Die Koeffizienten vor $x$ und $y$ bilden den Normalenvektor: $\vec{n} = \begin{pmatrix} 5 \\ 8 \end{pmatrix}$.

**2. Richtungsvektor bestimmen:**
Durch Vertauschen der Komponenten und Anpassen eines Vorzeichens erhalten wir den Richtungsvektor: $\vec{v} = \begin{pmatrix} -8 \\ 5 \end{pmatrix}$. (Kontrolle der Orthogonalität: $5 \cdot (-8) + 8 \cdot 5 = 0$).

**3. Aufpunkt berechnen:**
Wir wählen eine Koordinate frei, um einen Punkt auf der Geraden zu finden. Sei $y = 2$. Eingesetzt in die Gleichung ergibt das:
$$ 5x + 8 \cdot 2 - 16 = 0 \implies 5x = 0 \implies x = 0 $$
Der Aufpunkt ist somit $\vec{A} = \begin{pmatrix} 0 \\ 2 \end{pmatrix}$.

**4. Parameterform aufstellen:**
Setzt man Aufpunkt und Richtungsvektor zusammen, lautet die Geradengleichung:
$$ g: \vec{x} = \begin{pmatrix} 0 \\ 2 \end{pmatrix} + s \cdot \begin{pmatrix} -8 \\ 5 \end{pmatrix} $$