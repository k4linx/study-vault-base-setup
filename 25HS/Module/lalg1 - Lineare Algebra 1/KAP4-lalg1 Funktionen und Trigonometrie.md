---
erstelldatum: 2026-02-26
tags:
  - lalg1
Folien: Funktionen und Trigonometrie
---
## Wichtige Formeln
### Relationen am rechtwinkligen Dreieck
Für ein rechtwinkliges Dreieck mit Ankathete $A$, Gegenkathete $G$ und Hypotenuse $H$ gilt:
$$ \sin(\alpha) = \frac{G}{H}, \quad \cos(\alpha) = \frac{A}{H}, \quad \tan(\alpha) = \frac{G}{A} $$

### Allgemeine harmonische Schwingung
Eine Schwingung lässt sich als allgemeine Sinusfunktion darstellen:
$$ f(t) = A \cdot \sin(\omega \cdot t + \varphi) $$
Dabei ist $A$ die Amplitude, $\omega$ die Kreisfrequenz (mit der Periode $T = \frac{2\pi}{\omega}$) und $\varphi$ der Nullphasenwinkel.

## Definitionen
### Funktion (Abbildung)
Eine Funktion ordnet jedem Element $x$ einer Definitionsmenge genau ein Element $y$ einer Zielmenge zu: $x \mapsto y = f(x)$. 

### Symmetrie und Periode
Eine Funktion $f(t)$ ist:
- **periodisch** mit Periode $T$, falls $f(t + T) = f(t)$.
- **symmetrisch** (gerade), falls $f(-t) = f(t)$.
- **antisymmetrisch** (ungerade), falls $f(-t) = -f(t)$.

### Transformationen
Die Grundfunktion $f(x)$ kann im Koordinatensystem wie folgt manipuliert werden:
- **Verschiebung:** $f(x - c) + d$ verschiebt den Graphen um $c$ nach rechts (positive $x$-Achse) und $d$ nach oben.
- **Spiegelung:** $-f(x)$ spiegelt an der $x$-Achse, $f(-x)$ spiegelt an der $y$-Achse.
- **Skalierung:** $a \cdot f(x)$ streckt den Graphen in $y$-Richtung (für $a > 1$). $f(a \cdot x)$ staucht den Graphen in $x$-Richtung.

## Herleitungen
### Beispiel zu Transformationen
Gegeben sei die Funktion $f(x) = x^2$. Wir suchen die Gleichung $g(x)$ für eine Parabel, die um 3 Einheiten nach rechts und 2 Einheiten nach unten verschoben sowie an der $x$-Achse gespiegelt wurde.
1. Verschiebung nach rechts: $f(x - 3) = (x - 3)^2$
2. Verschiebung nach unten: $(x - 3)^2 - 2$
3. Spiegelung an der $x$-Achse (gesamten Term negieren):
$$ g(x) = - \left( (x - 3)^2 - 2 \right) = -(x - 3)^2 + 2 $$