---
erstelldatum: 2026-02-26 
tags:
- lalg1
- gerade
- normalform
Folien: Darstellung der Gerade in R2
---

**Analytische Einleitung:** Die mathematische Beschreibung von Geraden ist die Basis für die Modellierung linearer Trajektorien und Kraftlinien. In der Statik nutzen Ingenieure diese Darstellungen zur Berechnung der Lastverteilung entlang von Trägern. Je nach Problemstellung wird entweder die Richtung (Punkt-Richtungs-Form) oder die Orientierung im Raum (Normalform) priorisiert.

## Wichtige Formeln

### Punkt-Richtungs-Form (Parameterform)

$$\vec{R} = \vec{P} + \lambda \cdot \vec{v}$$ 
Hierbei ist $\vec{P}$ der Stützvektor (Ortsvektor eines Punktes) und $\vec{v}$ der Richtungsvektor.

### Normalform

$$\vec{n} \cdot (\vec{R} - \vec{P}) = 0$$ 
Der Normalenvektor $\vec{n}$ steht senkrecht auf der Geraden.

## Definitionen

- **Richtungsvektor:** Ein freier Vektor $\vec{v}$, der die Orientierung der Geraden festlegt.
- **Normalenvektor:** Ein Vektor $\vec{n}$, der orthogonal zu jedem Richtungsvektor der Geraden verläuft.

## Herleitungen

- **Normalenvektor aus Koordinatenform:** Bei einer Geraden $ax + by = c$ lässt sich der Normalenvektor unmittelbar als $\vec{n} = \begin{pmatrix} a \\ b \end{pmatrix}$ extrahieren.

**Überleitung:** Geraden und ihre Neigungswinkel führen uns direkt zur notwendigen Erweiterung durch [[Kapitel 4|Funktionen und Trigonometrie]].