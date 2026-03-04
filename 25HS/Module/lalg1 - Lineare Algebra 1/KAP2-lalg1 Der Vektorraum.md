---
erstelldatum: 2026-03-04
tags:
  - lalg1
  - verbindungsvektor
  - norm
  - vektoraddition
  - ortsvektor
  - vektorraum
  - skalare_multiplikation
Folien: Der Vektorraum
---
## Wichtige Formeln
### Verbindungsvektor
Der Verbindungsvektor zwischen zwei Punkten $\vec{A}$ und $\vec{B}$ berechnet sich durch die Differenz ihrer Ortsvektoren (Spitze minus Fuss):
$$ \vec{AB} = \vec{B} - \vec{A} $$

### Norm (Länge) eines Vektors
Die Länge $\|\vec{a}\|$ eines Vektors in einer Orthogonalbasis berechnet sich über die Wurzel der quadrierten Komponenten (Satz des Pythagoras):
$$ \|\vec{a}\| = \sqrt{a_1^2 + a_2^2 + \dots + a_N^2} $$

### Vektoraddition und skalare Multiplikation
Vektoren werden komponentenweise addiert und skaliert:
$$ \vec{v} + \vec{w} = \begin{pmatrix} v_1 + w_1 \\ v_2 + w_2 \end{pmatrix} $$
$$ \lambda \cdot \vec{v} = \begin{pmatrix} \lambda \cdot v_1 \\ \lambda \cdot v_2 \end{pmatrix} $$

## Definitionen
### Vektor
Ein Vektor ist ein mathematisches Objekt, das eine Verschiebung beschreibt und vollständig durch seine **Richtung** und seinen **Betrag** (Länge) definiert ist. In der Notation werden Vektoren meist mit einem Kleinbuchstaben und einem Pfeil darüber gekennzeichnet und als Spaltenvektor geschrieben.
$$
\vec{a} = \begin{pmatrix}
a_1 \\
 \\
\end{pmatrix}
$$
**Zahlenbeispiel:**
$$ \vec{v} = \begin{pmatrix} 3 \\ -4 \end{pmatrix} $$
### Ortsvektor
Als Ortsvektor eines Punktes bezeichnet man einen Vektor, der vom Ursprung direkt zu diesem Punkt zeigt. Er wird meist mit Grossbuchstaben geschrieben, z. B. $\vec{A}$. Normale Vektoren (mit Kleinbuchstaben, z. B. $\vec{a}$) sind nicht an den Ursprung gebunden und können verschoben werden.
![[KAP2-lalg1 Der Vektorraum_ortsvektor.png#invert|300]]

### Vektorraum
Ein Vektorraum über $\mathbb{R}$ ist eine Menge $V$, für die eine Addition und eine skalare Multiplikation definiert sind (Linearkombinationen davon haben wir bereits in [[KAP1-lalg1 Eliminationsverfahren I#Linearkombination|Eliminationsverfahren I]] behandelt). Wichtige Eigenschaften sind die Abgeschlossenheit (Ergebnisse bleiben in $V$), die Existenz eines neutralen Elements (Nullvektor $\vec{0}$) und eines Gegenvektors ($-\vec{v}$) sowie Assoziativ-, Kommutativ- und Distributivgesetze. Neben Vektoren bilden z.B. auch Polynome einen Vektorraum.

### Unterraum
Eine Teilmenge $U \subseteq V$ ist ein Unterraum, wenn auch für sie die Abgeschlossenheit gilt: Für alle Vektoren $\vec{u}, \vec{u}' \in U$ und Skalare $a \in \mathbb{R}$ liegen $\vec{u} + \vec{u}'$ und $a \cdot \vec{u}$ ebenfalls in $U$. Typische Unterräume in $\mathbb{R}^N$ sind Geraden oder Ebenen, die durch den Ursprung gehen.

## Herleitungen
### Beispiel zur Norm
Gegeben ist der Vektor $\vec{a} = \begin{pmatrix} 5 \\ -12 \end{pmatrix}$. Seine Norm ist nicht etwa $\begin{pmatrix} 5 \\ 12 \end{pmatrix}$, sondern ein einzelner Skalarwert:
$$ \|\vec{a}\| = \sqrt{5^2 + (-12)^2} = \sqrt{25 + 144} = \sqrt{169} = 13 $$

### Beispiel zum Mittelpunkt einer Strecke
Um den Mittelpunkt $\vec{M}$ zwischen $\vec{P} = \begin{pmatrix} -3 \\ 2 \end{pmatrix}$ und $\vec{Q} = \begin{pmatrix} 9 \\ -3 \end{pmatrix}$ zu finden, addiert man zum Ortsvektor $\vec{P}$ die halbe Strecke des Verbindungsvektors $\vec{PQ}$:
$$ \vec{M} = \vec{P} + \frac{1}{2} \cdot (\vec{Q} - \vec{P}) = \begin{pmatrix} -3 \\ 2 \end{pmatrix} + \frac{1}{2} \cdot \begin{pmatrix} 9 - (-3) \\ -3 - 2 \end{pmatrix} = \begin{pmatrix} -3 \\ 2 \end{pmatrix} + \frac{1}{2} \cdot \begin{pmatrix} 12 \\ -5 \end{pmatrix} = \begin{pmatrix} 3 \\ -0.5 \end{pmatrix} $$