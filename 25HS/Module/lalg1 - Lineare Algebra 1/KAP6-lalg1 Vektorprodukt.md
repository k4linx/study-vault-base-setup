---
erstelldatum: 2026-02-26 
tags:
- lalg1
- vektorprodukt
- kreuzprodukt
Folien: Vektorprodukt
---

**Analytische Einleitung:** Das Vektorprodukt (Kreuzprodukt) ist im \mathbb{R}^3 unentbehrlich für die Berechnung von Drehmomenten und die Bestimmung von Oberflächennormalen in CAD-Systemen. Es liefert einen Vektor, der geometrisch die Orientierung einer Fläche im Raum definiert und physikalisch die Achse einer Rotation beschreibt.

## Wichtige Formeln

### Kreuzprodukt im $\mathbb{R}^3$

$\vec{a} \times \vec{b} = \begin{pmatrix} a_2 b_3 - a_3 b_2 \\ a_3 b_1 - a_1 b_3 \\ a_1 b_2 - a_2 b_1 \end{pmatrix}$

## Definitionen

- **Rechtssystem:** Die Orientierung folgt der Rechten-Hand-Regel (Daumen $\vec{a}$, Zeigefinger $\vec{b}$, Mittelfinger $\vec{a} \times \vec{b})$.
- **Parallelogrammfläche:** Der Betrag $|\vec{a} \times \vec{b}|$ entspricht dem Flächeninhalt des aufgespannten Parallelogramms.

## Herleitungen

- **Normalenvektor einer Ebene:** Durch das Kreuzprodukt zweier linear unabhängiger Spannvektoren ($\vec{u} \times \vec{v}$) erhält man den Normalenvektor $\vec{n}$ einer Ebene.

**Überleitung:** Mit dem Wissen über Normalenvektoren lassen sich nun [[Kapitel 7|Ebenen in R3]] vollständig beschreiben.