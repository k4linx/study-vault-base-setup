---
erstelldatum: 2026-02-26 
tags:
- lalg1
- vektorraum
- normierung
Folien: Der Vektorraum
---

**Analytische Einleitung:** Das Konzept des Vektorraums bildet die abstrakte Hülle für mathematische Objekte, die über rein geometrische Pfeile hinausgehen. In der Ingenieurpraxis erlaubt diese Struktur die Standardisierung physikalischer Größen. Die Normierung ist hierbei ein kritischer Schritt, um Vektoren unterschiedlicher Beträge vergleichbar zu machen und Einheitsgrößen für Richtungsanalysen in Kraftfeldern oder Strömungen zu definieren.

## Wichtige Formeln

### Norm eines Vektors

Die Länge oder der Betrag (Euklidische Norm) eines Vektors im $\mathbb{R}^N$ berechnet sich nach: 
$$
|\vec{a}| = \sqrt{a_1^2 + a_2^2 + \dots + a_N^2}
$$

### Vektornormierung

Um einen Einheitsvektor $\vec{a}_0$ in Richtung von $\vec{a}$ zu erhalten, wird der Vektor durch seine Norm dividiert: 
$$
\vec{a}_0 = \frac{1}{|\vec{a}|} \cdot \vec{a}
$$

## Definitionen

- **Ortsvektor:** Ein Vektor $\vec{A} := \vec{OA}$, der fest an den Koordinatenursprung O gebunden ist. In der Dokumentationsarchitektur werden Ortsvektoren (Punkte) mit Großbuchstaben gekennzeichnet.
- **Allgemeiner Vektor:** Ein freies, verschiebbares Objekt (gekennzeichnet durch Kleinbuchstaben \vec{a}, \vec{b}), das durch Verschiebung im Raum invariant bleibt.
- **Vektorraum:** Eine Menge von Objekten, für die die Operationen der komponentenweisen Addition und der Skalarmultiplikation abgeschlossen sind.

## Herleitungen

- **Komponentenweise Addition:** In einer Orthogonalbasis wird die Summe zweier Vektoren hergeleitet, indem die jeweiligen Einträge der gleichen Dimension addiert werden: \vec{a} + \vec{b} = \begin{pmatrix} a_1 \\ \vdots \\ a_n \end{pmatrix} + \begin{pmatrix} b_1 \\ \vdots \\ b_n \end{pmatrix} = \begin{pmatrix} a_1 + b_1 \\ \vdots \\ a_n + b_n \end{pmatrix}

**Tipp:**

[!TIP] In der Standardbasis entsprechen die Koordinaten eines Punktes A(x|y|z) exakt den Komponenten seines Ortsvektors \vec{A}.

**Überleitung:** Die abstrakte Definition des Vektorraums ermöglicht nun die präzise [[Kapitel 3|Darstellung der Gerade in R2]].