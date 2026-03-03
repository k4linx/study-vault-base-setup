---
erstelldatum: 2026-02-26
tags:
- lalg1
- inverse-matrix
- gauss-jordan
Folien: Umkehrabbildung und inverse Matrix
---

**Analytische Einleitung:** Die Inverse einer Matrix erlaubt es, lineare Transformationen rückgängig zu machen. In der Signalverarbeitung ist dies essenziell für die Dekonvolution, um aus einer Systemantwort auf das ursprüngliche Eingangssignal zurückzuschließen.

## Wichtige Formeln

### Inversionsbedingung

$$
A \cdot A^{-1} = I
$$

## Definitionen

- **Invertierbarkeit:** Eine quadratische Matrix $A$ ist invertierbar genau dann, wenn $\det(A) \neq 0$.
- **Gauss-Jordan-Verfahren:** Algorithmus zur Berechnung der Inversen durch Überführung der erweiterten Matrix $[A | I]$ in die Form $[I | A^{-1}]$.

## Herleitungen

- **Systemlösung via Inverse:** Ist $A$ invertierbar, lässt sich das LGS $A \cdot \vec{x} = \vec{b}$ direkt durch $\vec{x} = A^{-1} \cdot \vec{b}$ lösen.

**Überleitung:** Diese algebraischen Werkzeuge finden eine direkte Anwendung in der Elektrotechnik bei [[Kapitel 14|RCL-Netzwerke mit Wechselstrom]].
