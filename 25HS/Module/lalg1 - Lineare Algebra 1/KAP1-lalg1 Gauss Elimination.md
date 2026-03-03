---
erstelldatum: 2026-02-26 
tags:
- lalg1
- gauss-elimination
- lineare-abhaengigkeit
Folien: Eliminationsverfahren I
---

**Analytische Einleitung:** Das Gauss-Verfahren ist weit mehr als ein rein algorithmischer Rechenweg; es fungiert als fundamentales Werkzeug zur Dekonstruktion komplexer linearer Abhängigkeiten innerhalb technischer Systeme. Für Ingenieure – etwa in der Baustatik oder Systemanalyse – ist die Fähigkeit, ein System in die Dreiecksform zu überführen, essenziell, um die strukturelle Integrität von Modellen zu prüfen und effiziente Lösungen für hochdimensionale Gleichungssysteme zu finden.

## Wichtige Formeln

### Linearkombination

Eine Linearkombination einer Menge von Vektoren $\{\vec{a}_1, \dots, \vec{a}_N\}$ ist definiert als die Summe: $x_1\vec{a}_1 + x_2\vec{a}_2 + \dots + x_N\vec{a}_N = \sum_{i=1}^{N} x_i\vec{a}_i$ wobei die Skalare $x_1, x_2, \dots$ als Koeffizienten $(x_i \in \mathbb{R})$ bezeichnet werden.

### Lineare Abhängigkeit

Eine Menge von Vektoren ist linear abhängig, wenn der Nullvektor durch eine nicht-triviale Linearkombination darstellbar ist: \sum_{i=1}^{N} x_i\vec{a}_i = \vec{0} \text{ mit mindestens einem } x_i \neq 0

## Definitionen

- **Kollinear:** Zwei Vektoren \vec{a} und \vec{b} heißen kollinear, wenn sie parallel oder antiparallel verlaufen, d. h. \vec{a} = \lambda\vec{b} für ein \lambda \in \mathbb{R}.
- **Komplanar:** Drei oder mehr Vektoren im \mathbb{R}^3 werden als komplanar bezeichnet, wenn sie in derselben Ebene liegen und somit linear abhängig sind.
- **Dreiecksform (Zeilenstufenform):** Ein Zustand eines Gleichungssystems, bei dem alle Koeffizienten unterhalb der Hauptdiagonale verschwinden.

## Herleitungen

- **Gauss-Verfahren:** Die systematische Elimination von Komponenten erfolgt durch Zeilenoperationen. Dabei wird eine Pivot-Zeile ausgewählt, um die darunterliegenden Einträge derselben Spalte zu annullieren.
- **Rückwärtseinsetzen:** Sobald die Dreiecksform erreicht ist, wird das System gelöst, indem die unterste Gleichung nach der ersten Unbekannten aufgelöst und dieser Wert sukzessive von unten nach oben substituiert wird.

**Wichtige Anmerkung:**

[!IMPORTANT] Beim Gauss-Verfahren gilt strikt: Die Zeile, die im aktuellen Schritt zur Elimination in anderen Zeilen genutzt wird, darf selbst nicht verändert werden.

**Überleitung:** Nachdem die Grundlagen der Elimination etabliert sind, erweitert das nächste Kapitel den Fokus auf die strukturellen Eigenschaften des [[Kapitel 2|Vektorraums]].


### Kapitel 2: Der Vektorraum

---
erstelldatum: 2026-02-26 
tags:
- lalg1
- vektorraum
- normierung
Folien: Der Vektorraum

**Analytische Einleitung:** Das Konzept des Vektorraums bildet die abstrakte Hülle für mathematische Objekte, die über rein geometrische Pfeile hinausgehen. In der Ingenieurpraxis erlaubt diese Struktur die Standardisierung physikalischer Größen. Die Normierung ist hierbei ein kritischer Schritt, um Vektoren unterschiedlicher Beträge vergleichbar zu machen und Einheitsgrößen für Richtungsanalysen in Kraftfeldern oder Strömungen zu definieren.

## Wichtige Formeln

### Norm eines Vektors

Die Länge oder der Betrag (Euklidische Norm) eines Vektors im \mathbb{R}^N berechnet sich nach: |\vec{a}| = \sqrt{a_1^2 + a_2^2 + \dots + a_N^2}

### Vektornormierung

Um einen Einheitsvektor \vec{a}_0 in Richtung von \vec{a} zu erhalten, wird der Vektor durch seine Norm dividiert: \vec{a}_0 = \frac{1}{|\vec{a}|} \cdot \vec{a}

## Definitionen

- **Ortsvektor:** Ein Vektor \vec{A} := \vec{OA}, der fest an den Koordinatenursprung O gebunden ist. In der Dokumentationsarchitektur werden Ortsvektoren (Punkte) mit Großbuchstaben gekennzeichnet.
- **Allgemeiner Vektor:** Ein freies, verschiebbares Objekt (gekennzeichnet durch Kleinbuchstaben \vec{a}, \vec{b}), das durch Verschiebung im Raum invariant bleibt.
- **Vektorraum:** Eine Menge von Objekten, für die die Operationen der komponentenweisen Addition und der Skalarmultiplikation abgeschlossen sind.

## Herleitungen

- **Komponentenweise Addition:** In einer Orthogonalbasis wird die Summe zweier Vektoren hergeleitet, indem die jeweiligen Einträge der gleichen Dimension addiert werden: \vec{a} + \vec{b} = \begin{pmatrix} a_1 \\ \vdots \\ a_n \end{pmatrix} + \begin{pmatrix} b_1 \\ \vdots \\ b_n \end{pmatrix} = \begin{pmatrix} a_1 + b_1 \\ \vdots \\ a_n + b_n \end{pmatrix}

**Tipp:**

[!TIP] In der Standardbasis entsprechen die Koordinaten eines Punktes A(x|y|z) exakt den Komponenten seines Ortsvektors \vec{A}.

**Überleitung:** Die abstrakte Definition des Vektorraums ermöglicht nun die präzise [[Kapitel 3|Darstellung der Gerade in R2]].

--------------------------------------------------------------------------------

### Kapitel 3: Darstellung der Gerade in R2

--------------------------------------------------------------------------------

erstelldatum: 2026-02-26 tags:

- lalg1
- gerade
- normalform

## Folien: Darstellung der Gerade in R2

**Analytische Einleitung:** Die mathematische Beschreibung von Geraden ist die Basis für die Modellierung linearer Trajektorien und Kraftlinien. In der Statik nutzen Ingenieure diese Darstellungen zur Berechnung der Lastverteilung entlang von Trägern. Je nach Problemstellung wird entweder die Richtung (Punkt-Richtungs-Form) oder die Orientierung im Raum (Normalform) priorisiert.

## Wichtige Formeln

### Punkt-Richtungs-Form (Parameterform)

\vec{R} = \vec{P} + \lambda \cdot \vec{v} Hierbei ist \vec{P} der Stützvektor (Ortsvektor eines Punktes) und \vec{v} der Richtungsvektor.

### Normalform

\vec{n} \cdot (\vec{R} - \vec{P}) = 0 Der Normalenvektor \vec{n} steht senkrecht auf der Geraden.

## Definitionen

- **Richtungsvektor:** Ein freier Vektor \vec{v}, der die Orientierung der Geraden festlegt.
- **Normalenvektor:** Ein Vektor \vec{n}, der orthogonal zu jedem Richtungsvektor der Geraden verläuft.

## Herleitungen

- **Normalenvektor aus Koordinatenform:** Bei einer Geraden ax + by = c lässt sich der Normalenvektor unmittelbar als \vec{n} = \begin{pmatrix} a \\ b \end{pmatrix} extrahieren.

**Überleitung:** Geraden und ihre Neigungswinkel führen uns direkt zur notwendigen Erweiterung durch [[Kapitel 4|Funktionen und Trigonometrie]].

--------------------------------------------------------------------------------

### Kapitel 4: Funktionen und Trigonometrie

--------------------------------------------------------------------------------

erstelldatum: 2026-02-26 tags:

- lalg1
- trigonometrie
- winkelfunktionen

## Folien: Funktionen und Trigonometrie

**Analytische Einleitung:** Winkelfunktionen fungieren als Bindeglied zwischen vektorieller Abstraktion und geometrischer Realität. In technischen Disziplinen wie dem Maschinenbau ist die Zerlegung von Kräften mittels Sinus und Cosinus eine tägliche Notwendigkeit, um Resultierende in orthogonalen Systemen exakt zu bestimmen.

## Wichtige Formeln

### Projektion mittels Winkelfunktionen

In einem rechtwinkligen Dreieck gilt für die Komponenten eines Vektors \vec{a}: a_x = |\vec{a}| \cdot \cos(\alpha), \quad a_y = |\vec{a}| \cdot \sin(\alpha)

## Definitionen

- **Einheitskreis:** Ein Kreis mit Radius r=1, an dem trigonometrische Funktionen als Koordinaten definiert werden.
- **Bogenmaß:** Ein Verhältnismaß (Bogenlänge zu Radius), wobei 2\pi einem Vollkreis von 360^\circ entspricht.

## Herleitungen

- **Vektorkomponenten aus Polarform:** Die Umrechnung von Betrag |\vec{a}| und Winkel \alpha in kartesische Komponenten basiert auf der Definition am Einheitskreis.

**Überleitung:** Die Verknüpfung von Winkeln und Vektoren findet ihre Vollendung im [[Kapitel 5|Skalarprodukt]].

--------------------------------------------------------------------------------

### Kapitel 5: Skalarprodukt

--------------------------------------------------------------------------------

erstelldatum: 2026-02-26 tags:

- lalg1
- skalarprodukt
- orthogonalitaet

## Folien: Skalarprodukt

**Analytische Einleitung:** Das Skalarprodukt ist die zentrale Operation zur Bestimmung physikalischer Arbeit (W = \vec{F} \cdot \vec{s}) und zur Projektion von Vektoren. Es erlaubt Ingenieuren, die Orthogonalität zweier Größen mit einer einzigen skalaren Kennzahl zu bewerten, was für Stabilitätsuntersuchungen und Optimierungsprobleme unerlässlich ist.

## Wichtige Formeln

### Definition des Skalarprodukts

\vec{a} \cdot \vec{b} = |\vec{a}| \cdot |\vec{b}| \cdot \cos(\phi) = \sum_{i=1}^{N} a_i b_i

## Definitionen

- **Orthogonalität:** Zwei Vektoren sind orthogonal, wenn ihr Skalarprodukt Null ergibt (\vec{a} \cdot \vec{b} = 0).
- **Projektion:** Die Komponente eines Vektors \vec{a} in die Richtung eines anderen Vektors, oft normiert auf einen Einheitsvektor.

## Herleitungen

- **Winkelberechnung:** Der eingeschlossene Winkel \phi zwischen zwei Vektoren wird über das Skalarprodukt hergeleitet: \cos(\phi) = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}| \cdot |\vec{b}|}

**Überleitung:** Während das Skalarprodukt Skalare liefert, erzeugt das [[Kapitel 6|Vektorprodukt]] neue vektorielle Größen im Raum.

--------------------------------------------------------------------------------

### Kapitel 6: Vektorprodukt

--------------------------------------------------------------------------------

erstelldatum: 2026-02-26 tags:

- lalg1
- vektorprodukt
- kreuzprodukt

## Folien: Vektorprodukt

**Analytische Einleitung:** Das Vektorprodukt (Kreuzprodukt) ist im \mathbb{R}^3 unentbehrlich für die Berechnung von Drehmomenten und die Bestimmung von Oberflächennormalen in CAD-Systemen. Es liefert einen Vektor, der geometrisch die Orientierung einer Fläche im Raum definiert und physikalisch die Achse einer Rotation beschreibt.

## Wichtige Formeln

### Kreuzprodukt im \mathbb{R}^3

\vec{a} \times \vec{b} = \begin{pmatrix} a_2 b_3 - a_3 b_2 \\ a_3 b_1 - a_1 b_3 \\ a_1 b_2 - a_2 b_1 \end{pmatrix}

## Definitionen

- **Rechtssystem:** Die Orientierung folgt der Rechten-Hand-Regel (Daumen \vec{a}, Zeigefinger \vec{b}, Mittelfinger \vec{a} \times \vec{b}).
- **Parallelogrammfläche:** Der Betrag |\vec{a} \times \vec{b}| entspricht dem Flächeninhalt des aufgespannten Parallelogramms.

## Herleitungen

- **Normalenvektor einer Ebene:** Durch das Kreuzprodukt zweier linear unabhängiger Spannvektoren (\vec{u} \times \vec{v}) erhält man den Normalenvektor \vec{n} einer Ebene.

**Überleitung:** Mit dem Wissen über Normalenvektoren lassen sich nun [[Kapitel 7|Ebenen in R3]] vollständig beschreiben.

--------------------------------------------------------------------------------

### Kapitel 7: Ebenen in R3

--------------------------------------------------------------------------------

erstelldatum: 2026-02-26 tags:

- lalg1
- ebene
- koordinatenform

## Folien: Ebenen in R3

**Analytische Einleitung:** Ebenen bilden die Begrenzungsflächen technischer Bauteile in CAD-Umgebungen. Der präzise Wechsel zwischen Parameterform (für die Modellierung) und Koordinatenform (für die Kollisionsprüfung) ist für Ingenieure entscheidend, um etwa Schnittpunkte zwischen Werkzeugbahnen und Oberflächen zu berechnen.

## Wichtige Formeln

### Koordinatenform

ax + by + cz = d Der Normalenvektor ist hierbei \vec{n} = \begin{pmatrix} a \\ b \\ c \end{pmatrix}.

### Parameterform

\vec{R} = \vec{P} + \lambda \cdot \vec{u} + \mu \cdot \vec{v} \vec{P} ist der Stützpunkt, \vec{u} und \vec{v} sind die Spannvektoren.

## Definitionen

- **Stützvektor:** Der Ortsvektor \vec{P} zu einem festen Punkt der Ebene.
- **Spannvektoren:** Zwei linear unabhängige Richtungsvektoren, die die Ebene aufspannen.

## Herleitungen

- **Umwandlung in Koordinatenform:** Aus der Parameterform wird mittels \vec{n} = \vec{u} \times \vec{v} der Normalenvektor bestimmt. Der Wert d ergibt sich durch Einsetzen des Stützpunktes \vec{P} in die Gleichung \vec{n} \cdot \vec{R} = d.

**Überleitung:** Schnittpunktberechnungen von Ebenen führen zwangsläufig zu komplexeren [[Kapitel 8|Lösungen von linearen Gleichungssystemen]].

--------------------------------------------------------------------------------

### Kapitel 8: Lösungen von linearen Gleichungssystemen

--------------------------------------------------------------------------------

erstelldatum: 2026-02-26 tags:

- lalg1
- lgs
- loesbarkeit

## Folien: Lösungen von linearen Gleichungssystemen

**Analytische Einleitung:** In der Systemanalyse, beispielsweise bei der Berechnung von Brückenkonstruktionen oder elektrischen Netzwerken, ist die Frage nach der Lösbarkeit zentral. Ingenieure müssen diagnostizieren, ob ein Modell unterbestimmt, überbestimmt oder exakt definiert ist, um physikalische Instabilitäten oder Fehlinterpretationen zu vermeiden.

## Wichtige Formeln

### Matrix-Vektor-Schreibweise

A \cdot \vec{x} = \vec{b}

## Definitionen

- **Eindeutige Lösung:** Das System besitzt genau einen Schnittpunkt aller beteiligten Hyperebenen.
- **Unendlich viele Lösungen:** Das System ist unterbestimmt; es existieren Abhängigkeiten, die Freiheitsgrade offenlassen.
- **Keine Lösung:** Das System ist überbestimmt oder widersprüchlich (z. B. echt parallele Ebenen).

## Herleitungen

- **Rang-Analyse:** Die Anzahl der Nicht-Null-Zeilen in der Dreiecksform (Rang der Matrix) gibt Aufschluss über die Dimension des Lösungsraums.

**Überleitung:** Die kompakte Handhabung dieser Systeme führt uns zur [[Kapitel 9|Matrixalgebra]].

--------------------------------------------------------------------------------

### Kapitel 9: Matrixalgebra

--------------------------------------------------------------------------------

erstelldatum: 2026-02-26 tags:

- lalg1
- matrix
- matrizenmultiplikation

## Folien: Matrixalgebra

**Analytische Einleitung:** Matrizen sind die Arbeitstiere der modernen Datenverarbeitung und Regelungstechnik (Zustandsraumdarstellung). Sie erlauben es, riesige Mengen linearer Informationen kompakt zu speichern und durch standardisierte Rechenregeln hochperformant zu transformieren.

## Wichtige Formeln

### Matrizenmultiplikation

(A \cdot B)_{ij} = \sum_{k} a_{ik} b_{kj} Dabei gilt das Prinzip "Zeile mal Spalte".

## Definitionen

- **Transponierte Matrix (****A^T****):** Spiegelung der Matrix an der Hauptdiagonale (Vertauschung von Zeilen und Spalten).
- **Einheitsmatrix (****I****):** Quadratische Matrix, die bei Multiplikation als neutrales Element fungiert.

## Herleitungen

- **Rechenregeln:** Demonstration der Nicht-Kommutativität (A \cdot B \neq B \cdot A), die bei der Verkettung von Transformationen (z. B. in der Robotik) kritisch ist.

**Überleitung:** Matrizen sind nicht nur Datenspeicher, sondern wirken als [[Kapitel 10|Lineare Abbildung]] auf Vektoren.

--------------------------------------------------------------------------------

### Kapitel 10: Lineare Abbildung

--------------------------------------------------------------------------------

erstelldatum: 2026-02-26 tags:

- lalg1
- lineare-abbildung
- operator

## Folien: Lineare Abbildung

**Analytische Einleitung:** In der Robotik (Kinematik) oder Computergraphik werden Bewegungen als lineare Abbildungen modelliert. Eine Matrix fungiert hier als Operator, der einen Eingangsvektor (z. B. Gelenkstellung) in einen Zielraum (z. B. Position im Raum) transformiert.

## Wichtige Formeln

### Abbildungsvorschrift

\vec{y} = f(\vec{x}) = A \cdot \vec{x}

## Definitionen

- **Linearität:** f(\alpha\vec{u} + \beta\vec{v}) = \alpha f(\vec{u}) + \beta f(\vec{v}).
- **Kern:** Die Menge aller Vektoren \vec{x}, für die gilt A \cdot \vec{x} = \vec{0}.

## Herleitungen

- **Abbildungsmatrix:** Die Spalten der Matrix A entsprechen den Bildvektoren der Standardbasisvektoren unter der Abbildung f.

**Überleitung:** Für die Handhabung hochdimensionaler Matrizen ist [[Kapitel 11|Python]] als Werkzeug zur numerischen Umsetzung unerlässlich.

--------------------------------------------------------------------------------

### Kapitel 11: Python

--------------------------------------------------------------------------------

erstelldatum: 2026-02-26 tags:

- lalg1
- python
- numerik

## Folien: Python

**Analytische Einleitung:** Die numerische Umsetzung der linearen Algebra mittels Python (insbesondere NumPy) ist der heutige Industriestandard. Sie ermöglicht die Simulation komplexer Strukturen, die händisch nicht mehr zu bewältigen sind, und bildet die Basis für Machine Learning und numerische Simulationen.

## Wichtige Befehle

### Numerische LGS-Lösung

```python
import numpy as np
A = np.array([[1, 2], [3, 4]])
b = np.array([5, 6])
x = np.linalg.solve(A, b) # Numerische Umsetzung des Gauss-Verfahrens
```

## Definitionen

- **NumPy Array:** Die primäre Datenstruktur für Vektoren und Matrizen.
- **Broadcasting:** Automatisierte Anpassung von Array-Dimensionen bei Operationen.

**Wichtige Anmerkung:**

[!IMPORTANT] Numerische Instabilitäten können bei Matrizen mit fast verschwindenden Determinanten (schlecht konditioniert) zu erheblichen Rundungsfehlern führen.

**Überleitung:** Um die Invertierbarkeit und geometrische Eigenschaften von Matrizen analytisch zu prüfen, betrachten wir [[Kapitel 12|Determinanten]].

--------------------------------------------------------------------------------

### Kapitel 12: Determinanten

--------------------------------------------------------------------------------

erstelldatum: 2026-02-26 tags:

- lalg1
- determinante
- sarrus

## Folien: Determinanten

**Analytische Einleitung:** Die Determinante ist eine skalare Kennzahl, die Auskunft über die Skalierung von Volumina bei Transformationen gibt. Für Ingenieure ist sie das primäre Kriterium für die Stabilitätsanalyse und um festzustellen, ob ein System eindeutig lösbar ist.

## Wichtige Formeln

### Regel von Sarrus (3 \times 3)

Berechnung über die Summe der Diagonalprodukte (nur für Dimension 3 anwendbar).

### Spatprodukt

Geometrische Interpretation im \mathbb{R}^3 als Volumen eines Parallelepipeds: V = |(\vec{a} \times \vec{b}) \cdot \vec{c}| = |\det(\vec{a}, \vec{b}, \vec{c})|

## Definitionen

- **Singuläre Matrix:** Eine Matrix mit \det(A) = 0; sie ist nicht invertierbar.
- **Laplace-Entwicklung:** Rekursives Verfahren zur Berechnung der Determinante für beliebige n \times n Matrizen.

## Herleitungen

- **Volumenfaktor:** Die Determinante beschreibt, um welchen Faktor sich das Volumen eines Einheitswürfels unter der Abbildung A verändert.

**Überleitung:** Ist die Determinante ungleich Null, existiert die [[Kapitel 13|Umkehrabbildung und inverse Matrix]].

--------------------------------------------------------------------------------

### Kapitel 13: Umkehrabbildung und inverse Matrix

--------------------------------------------------------------------------------

erstelldatum: 2026-02-26 tags:

- lalg1
- inverse-matrix
- gauss-jordan

## Folien: Umkehrabbildung und inverse Matrix

**Analytische Einleitung:** Die Inverse einer Matrix erlaubt es, lineare Transformationen rückgängig zu machen. In der Signalverarbeitung ist dies essenziell für die Dekonvolution, um aus einer Systemantwort auf das ursprüngliche Eingangssignal zurückzuschließen.

## Wichtige Formeln

### Inversionsbedingung

A \cdot A^{-1} = I

## Definitionen

- **Invertierbarkeit:** Eine quadratische Matrix A ist invertierbar genau dann, wenn \det(A) \neq 0.
- **Gauss-Jordan-Verfahren:** Algorithmus zur Berechnung der Inversen durch Überführung der erweiterten Matrix [A | I] in die Form [I | A^{-1}].

## Herleitungen

- **Systemlösung via Inverse:** Ist A invertierbar, lässt sich das LGS A \cdot \vec{x} = \vec{b} direkt durch \vec{x} = A^{-1} \cdot \vec{b} lösen.

**Überleitung:** Diese algebraischen Werkzeuge finden eine direkte Anwendung in der Elektrotechnik bei [[Kapitel 14|RCL-Netzwerke mit Wechselstrom]].

--------------------------------------------------------------------------------

### Kapitel 14: RCL-Netzwerke mit Wechselstrom

--------------------------------------------------------------------------------

erstelldatum: 2026-02-26 tags:

- lalg1
- elektrotechnik
- rcl-netzwerk

## Folien: RCL-Netzwerke mit Wechselstrom

**Analytische Einleitung:** Die Analyse von Wechselstromkreisen erfordert die mathematische Erfassung von Phasenverschiebungen. Lineare Algebra ermöglicht hier die effiziente Lösung komplexer Maschen- und Knotengleichungen, indem Impedanzen und Ströme in Gleichungssystemen zusammengefasst werden.

## Wichtige Formeln

### Komplexes Ohmsches Gesetz

\underline{U} = \underline{Z} \cdot \underline{I} Unter Verwendung der Unterstreich-Notation für komplexe Zeigergrößen der Elektrotechnik.

## Definitionen

- **Impedanz (****\underline{Z}****):** Der komplexe Widerstand, der Wirk- (R) und Blindwiderstände (X) vereint.
- **Knotenpotenzialverfahren:** Systematische Aufstellung eines LGS zur Berechnung der Potenziale in Netzwerken mit Wirk- und Blindanteilen.

## Herleitungen

- **Maschenregeln im Komplexen:** Die Anwendung des Gauss-Verfahrens auf Systeme mit komplexen Koeffizienten zur Bestimmung von Zweigströmen.

**Überleitung:** Die mathematische Basis für diese Netzwerke bilden die [[Kapitel 15|Komplexe Zahlen]].

--------------------------------------------------------------------------------

### Kapitel 15: Komplexe Zahlen

--------------------------------------------------------------------------------

erstelldatum: 2026-02-26 tags:

- lalg1
- komplexe-zahlen
- euler

## Folien: Komplexe Zahlen

**Analytische Einleitung:** Komplexe Zahlen erweitern das Zahlenspektrum und sind das Standardwerkzeug zur Beschreibung von Schwingungen. Didaktisch ist wichtig: Während sie geometrisch wie Vektoren im \mathbb{R}^2 wirken, definieren sie eine völlig eigene Algebra – insbesondere die komplexe Multiplikation entspricht einer Drehstreckung, nicht einem Skalarprodukt.

## Wichtige Formeln

### Eulersche Formel

e^{i\phi} = \cos(\phi) + i \cdot \sin(\phi)

### Darstellungsformen

\underline{z} = a + bi \quad (\text{Kartesisch}) \underline{z} = r \cdot e^{i\phi} \quad (\text{Exponentialform})

## Definitionen

- **Imaginäre Einheit:** i^2 = -1.
- **Gaußsche Zahlenebene:** Ein zweidimensionales Koordinatensystem, in dem die horizontale Achse den Realteil und die vertikale Achse den Imaginärteil darstellt.

## Herleitungen

- **Multiplikation in Polarform:** Durch das Addieren der Winkel (Argumente) und Multiplizieren der Beträge wird die geometrische Interpretation als Rotation und Skalierung hergeleitet.

**Überleitung:** Damit schließt sich der Kreis von den grundlegenden Eliminationsverfahren hin zu den komplexen Strukturen, welche die moderne Ingenieurmathematik maßgeblich prägen.