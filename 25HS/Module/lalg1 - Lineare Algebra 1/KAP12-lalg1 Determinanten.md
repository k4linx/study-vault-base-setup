---
erstelldatum: 2026-02-26 
tags:
- lalg1
- determinante
- sarrus
Folien: Determinanten
---

**Analytische Einleitung:** Die Determinante ist eine skalare Kennzahl, die Auskunft über die Skalierung von Volumina bei Transformationen gibt. Für Ingenieure ist sie das primäre Kriterium für die Stabilitätsanalyse und um festzustellen, ob ein System eindeutig lösbar ist.

## Wichtige Formeln

### Regel von Sarrus ($3 \times 3$)

Berechnung über die Summe der Diagonalprodukte (nur für Dimension 3 anwendbar).

### Spatprodukt

Geometrische Interpretation im $\mathbb{R}^3$ als Volumen eines Parallelepipeds: 
$$V = |(\vec{a} \times \vec{b}) \cdot \vec{c}| = |\det(\vec{a}, \vec{b}, \vec{c})|$$

## Definitionen

- **Singuläre Matrix:** Eine Matrix mit $\det(A) = 0$; sie ist nicht invertierbar.
- **Laplace-Entwicklung:** Rekursives Verfahren zur Berechnung der Determinante für beliebige $n \times n$ Matrizen.

## Herleitungen

- **Volumenfaktor:** Die Determinante beschreibt, um welchen Faktor sich das Volumen eines Einheitswürfels unter der Abbildung A verändert.

**Überleitung:** Ist die Determinante ungleich Null, existiert die [[Kapitel 13|Umkehrabbildung und inverse Matrix]].
