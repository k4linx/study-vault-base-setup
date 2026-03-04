---
erstelldatum: 2026-03-04
tags:
  - lalg1
  - lineare-abbildung
  - linearität
  - abbildungsmatrix
  - verkettung
Folien: Lineare Abbildung
---
## Wichtige Formeln
### Matrixdarstellung einer linearen Abbildung
Jede lineare Abbildung $\mathcal{L}: \mathbb{R}^n \to \mathbb{R}^m$ lässt sich durch eine Matrix $A$ (mit Dimension $m \times n$) darstellen:
$$ \mathcal{L}(\vec{x}) = A \odot \vec{x} $$

### Konstruktion der Abbildungsmatrix
Die Matrix $A$ wird konstruiert, indem man die Bilder der Basisvektoren $\vec{e}_1, \vec{e}_2, \dots$ berechnet und diese als Spalten direkt in die Matrix einfügt:
$$ A = [\mathcal{L}(\vec{e}_1), \mathcal{L}(\vec{e}_2), \dots] $$

### Verkettung von Abbildungen
Werden mehrere Abbildungen nacheinander ausgeführt, entspricht dies dem [[KAP9-lalg1 Matrixalgebra#Matrix-Produkt (Falk-Schema)|Matrix-Produkt]]. Die Abbildung, die *zuerst* ausgeführt wird, steht ganz rechts an den Vektor multipliziert:
$$ \vec{x}_{neu} = S \odot M \odot \vec{x} $$
*(Hier wird der Vektor $\vec{x}$ zuerst durch $M$ und danach durch $S$ abgebildet).*

## Definitionen
### Lineare Abbildung
Eine Abbildung $\mathcal{L}$ heisst genau dann linear, wenn für alle Vektoren und einen beliebigen Skalar $\lambda \in \mathbb{R}$ gilt:
1. **Homogenität:** $\mathcal{L}(\lambda \cdot \vec{v}) = \lambda \cdot \mathcal{L}(\vec{v})$
2. **Additivität:** $\mathcal{L}(\vec{v} + \vec{w}) = \mathcal{L}(\vec{v}) + \mathcal{L}(\vec{w})$
Jede [[KAP9-lalg1 Matrixalgebra#Produkt einer Matrix mit einem Vektor|Matrix-Vektor-Multiplikation]] erfüllt diese Bedingungen und ist somit zwingend linear.

### Abbildung / Funktion
Eine Abbildung $\mathcal{L}: D \to Z$ ordnet jedem Element $x$ einer Definitionsmenge $D$ (Input/Argument) exakt ein Element $y$ einer Zielmenge $Z$ (Output/Bild) zu.

## Herleitungen
### Matrix einer Spiegelung bestimmen
Wir suchen die Matrix $S$, welche einen Vektor an der y-Achse spiegelt. 
Dazu schauen wir uns an, was mit den beiden Standardbasisvektoren passiert:
1. Der Vektor $\vec{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ zeigt auf der x-Achse nach rechts. Gespiegelt an der y-Achse zeigt er nun nach links: $\mathcal{L}(\vec{e}_1) = \begin{pmatrix} -1 \\ 0 \end{pmatrix}$.
2. Der Vektor $\vec{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ liegt genau auf der y-Achse. Bei einer Spiegelung an sich selbst bleibt er völlig unverändert: $\mathcal{L}(\vec{e}_2) = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.
Setzen wir diese beiden Bildvektoren als Spalten ein, erhalten wir die Abbildungsmatrix:
$$ S = \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix} $$

### Beispiel zur Verkettung
Ein Dreieck soll zuerst an der x-Achse gespiegelt (Matrix $M$) und danach in x-Richtung um den Faktor 2 gestreckt (Matrix $S$) werden.
$$ M = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}, \quad S = \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix} $$
Die kombinierte Abbildungsmatrix ist das Produkt $S \odot M$:
$$ S \odot M = \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix} \odot \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix} $$