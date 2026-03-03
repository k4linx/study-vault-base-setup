---

erstelldatum: 2026-02-26 
tags:
- lalg1
- lineare-abbildung
- operator
Folien: Lineare Abbildung
---

**Analytische Einleitung:** In der Robotik (Kinematik) oder Computergraphik werden Bewegungen als lineare Abbildungen modelliert. Eine Matrix fungiert hier als Operator, der einen Eingangsvektor (z. B. Gelenkstellung) in einen Zielraum (z. B. Position im Raum) transformiert.

## Wichtige Formeln

### Abbildungsvorschrift

$$
\vec{y} = f(\vec{x}) = A \cdot \vec{x}
$$

## Definitionen

- **Linearität:** $f(\alpha\vec{u} + \beta\vec{v}) = \alpha f(\vec{u}) + \beta f(\vec{v})$.
- **Kern:** Die Menge aller Vektoren $\vec{x}$, für die gilt $A \cdot \vec{x} = \vec{0}$.

## Herleitungen

- **Abbildungsmatrix:** Die Spalten der Matrix $A$ entsprechen den Bildvektoren der Standardbasisvektoren unter der Abbildung $f$.

**Überleitung:** Für die Handhabung hochdimensionaler Matrizen ist [[Kapitel 11|Python]] als Werkzeug zur numerischen Umsetzung unerlässlich.