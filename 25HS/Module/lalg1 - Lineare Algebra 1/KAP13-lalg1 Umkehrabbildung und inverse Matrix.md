---
erstelldatum: 2026-03-04
tags:
  - lalg1
  - inverse-matrix
  - gauss-jordan
  - regulär
  - singulär
  - injektiv
  - surjektiv
  - bijektiv
  - kern
Folien: Umkehrabbildung und inverse Matrix
---
## Wichtige Formeln
### Lösen eines regulären LGS mit der Inversen
Ein lineares Gleichungssystem $A \odot \vec{x} = \vec{b}$ kann durch Multiplikation mit der inversen Matrix $A^{-1}$ von links gelöst werden:
$$ \vec{x} = A^{-1} \odot \vec{b} $$

### Inverse einer $2 \times 2$ Matrix
Für eine $2 \times 2$ Matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ lässt sich die Inverse direkt berechnen, sofern die [[KAP12-lalg1 Determinanten#Determinante in $\mathbb{R}^{2 \times 2}$|Determinante]] $\det(A) \neq 0$ ist:
$$ A^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} = \frac{1}{\det(A)} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} $$

### Gesetze für die Inverse
Für reguläre Matrizen $A$ und $B$ gelten folgende Rechenregeln:
- **Doppelte Inversion:** $(A^{-1})^{-1} = A$
- **Produkt:** $(A \odot B)^{-1} = B^{-1} \odot A^{-1}$ (Achtung: Reihenfolge dreht sich um!)
- **Transponierte:** $(A^\top)^{-1} = (A^{-1})^\top$

## Definitionen
### Matrix-Inverse
Eine Matrix $A$ heisst invertierbar, wenn es eine Matrix $A^{-1}$ gibt, sodass das Produkt die Einheitsmatrix $\mathbb{I}$ (siehe [[KAP9-lalg1 Matrixalgebra#Spezielle Matrizen|Spezielle Matrizen]]) ergibt:
$$ A \odot A^{-1} = \mathbb{I} $$
Eine Matrix mit einer Inversen nennt man **regulär**, eine Matrix ohne Inverse heisst **singulär**.

### Injektiv, Surjektiv, Bijektiv
Eine Abbildung $L: D \to Z$ ordnet Elementen aus $D$ Elemente in $Z$ zu.
- **Injektiv:** Jedem Zielwert wird *höchstens* ein Ausgangswert zugeordnet ($x_1 \neq x_2 \implies L(x_1) \neq L(x_2)$).
- **Surjektiv:** Jeder Zielwert wird *mindestens* einmal getroffen.
- **Bijektiv:** Die Abbildung ist sowohl injektiv als auch surjektiv. **Nur bijektive Abbildungen besitzen eine eindeutige Umkehrabbildung (Inverse).**
![[KAP13-lalg1 Umkehrabbildung und inverse Matrix_inj_bij_sur.png#invert]]
### Kern (Nullraum) einer Abbildung
Der Kern (oder Nullraum) umfasst alle Vektoren $\vec{x}$, die durch die Matrix $A$ auf den Nullvektor abgebildet werden:
$$ A \odot \vec{x} = \vec{0} $$
Gibt es ausser dem Nullvektor noch weitere Vektoren im Kern, ist die Matrix nicht injektiv und somit **nicht invertierbar**.

## Herleitungen & Beispiele
### Die inverse Matrix mit Gauss-Jordan bestimmen
Um die Inverse einer Matrix $A$ zu berechnen, schreibt man sie neben eine Einheitsmatrix $\mathbb{I}$ gleicher Grösse: $(A | \mathbb{I})$.
Mit den bekannten elementaren Zeilenoperationen (aus [[KAP8-lalg1 Lösungen von linearen Gleichungssystemen#Elementare Zeilenoperationen|Kapitel 8]]) formt man nun so lange um, bis auf der linken Seite die Einheitsmatrix steht. Auf der rechten Seite steht dann die Inverse:
$$ (A | \mathbb{I}) \xrightarrow{\text{Gauss-Jordan}} (\mathbb{I} | A^{-1}) $$

**Beispiel:**
Gegeben sei $A = \begin{pmatrix} 1 & -2 \\ 0 & 1 \end{pmatrix}$.
1. Aufstellen: $\left( \begin{array}{cc|cc} 1 & -2 & 1 & 0 \\ 0 & 1 & 0 & 1 \end{array} \right)$
2. Zeile 1 wird zu (Zeile 1 + 2 * Zeile 2): $\left( \begin{array}{cc|cc} 1 & 0 & 1 & 2 \\ 0 & 1 & 0 & 1 \end{array} \right)$
Die Inverse lautet somit $A^{-1} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$.

### Kriterien für die Existenz der Inversen
Eine quadratische $n \times n$ Matrix $A$ ist genau dann invertierbar, wenn:
1. $\det(A) \neq 0$
2. Der Rang der Matrix exakt $n$ ist.
3. Der Kern der Matrix nur aus dem Nullvektor $\{\vec{0}\}$ besteht.

### Projektionen haben keine Inverse
Projektionen verringern die Dimension (z.B. von 3D auf 2D). Dadurch gehen Informationen verloren. Da mehrere unterschiedliche Punkte auf denselben Bildpunkt abgebildet werden, ist die Abbildung nicht injektiv und kann nicht rückgängig gemacht werden.
![[abbildung_13_1_projektion_nicht_injektiv.png]]
