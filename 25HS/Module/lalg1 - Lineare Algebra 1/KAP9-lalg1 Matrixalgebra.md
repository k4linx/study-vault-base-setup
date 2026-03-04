---
erstelldatum: 2026-03-04
tags:
  - lalg1
  - matrizen
  - falk-schema
  - koeffizientenmatrix
  - abbildungen
  - summenzeichen
Folien: Matrixalgebra
---
## Wichtige Formeln
### Matrizen-Addition und Skalarmultiplikation
Die Addition von Matrizen und die Multiplikation mit einem Skalar erfolgen elementweise (analog zur Vektoraddition in [[KAP2-lalg1 Der Vektorraum#Vektoraddition und skalare Multiplikation|Der Vektorraum]]).

### Matrix-Produkt (Falk-Schema)
Das Produkt $C = A \odot B$ berechnet sich durch Skalarprodukte der Zeilen von $A$ und der Spalten von $B$. Das Element $c_{i,j}$ lautet:
$$ c_{i,j} = \sum_{k=1}^m a_{i,k} \cdot b_{k,j} $$
Das Matrix-Produkt ist assoziativ und distributiv, aber **nicht kommutativ** (es gilt im Allgemeinen $A \odot B \neq B \odot A$).

### Gesetze für das Summenzeichen
Beim Summenzeichen dürfen konstante Faktoren (die nicht vom Laufindex abhängen) ausgeklammert und Teilsummen aufgeteilt werden:
$$ \sum_{i=1}^n c \cdot a_i = c \cdot \sum_{i=1}^n a_i $$
$$ \sum_{i=1}^n (a_i + b_i) = \sum_{i=1}^n a_i + \sum_{i=1}^n b_i $$

## Definitionen
### Matrix und quadratische Matrix
Eine Matrix ist eine rechteckige Tabelle mit Zahlen, die aus Zeilen (horizontal) und Spalten (vertikal) besteht. Eine Matrix heisst **quadratisch**, wenn sie exakt gleich viele Zeilen wie Spalten besitzt ($n \times n$).

### Koeffizientenmatrix
Lineare Gleichungssysteme lassen sich elegant als Produkt einer Koeffizientenmatrix $A$ und eines Vektors der Unbekannten $\vec{x}$ darstellen: $A \odot \vec{x} = \vec{b}$. Dies baut direkt auf den Lösungsverfahren aus [[KAP8-lalg1 Lösungen von linearen Gleichungssystemen#|Lösungen von LGS]] auf.

### Spezielle Matrizen
- **Einheitsmatrix ($\mathbb{I}$):** Besitzt lauter Einsen auf der Hauptdiagonalen und sonst nur Nullen.
- **Nullmatrix:** Enthält ausschliesslich Nullen.
- **Abbildungsmatrizen:** Matrizen können Transformationen in der Ebene darstellen. Z. B. beschreibt $M = \begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$ eine Punktspiegelung am Ursprung.

## Herleitungen
### Das Falk-Schema in der Praxis
Um beim Berechnen des Matrix-Produkts die Übersicht zu behalten, schreibt man die Matrizen in ein Raster. Das Element in der Ergebnismatrix steht genau am Schnittpunkt der verknüpften Zeile von $A$ und Spalte von $B$.
![[KAP9-lalg1 Matrixalgebra_falk_schema.png#invert]]

### Geometrische Interpretation als Abbildung
Multipliziert man die Ortsvektoren der Eckpunkte einer geometrischen Figur (wie eines Dreiecks) mit einer Abbildungsmatrix, wird die komplette Figur im Koordinatensystem transformiert. So lassen sich Streckungen, Spiegelungen oder Projektionen abbilden.
![[KAP9-lalg1 Matrixalgebra_dreieck_transformationen.png#invert]]