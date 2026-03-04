---
erstelldatum: 2026-03-04
tags:
  - lalg1
  - rechtwinkliges3eck
  - polarkoordinaten
  - gleichfrequenteschwingungen
  - periode
  - symmetrie
  - transformation
Folien: Funktionen und Trigonometrie
---
## Wichtige Formeln
### Relationen am rechtwinkligen Dreieck
Für ein rechtwinkliges Dreieck mit Ankathete $A$, Gegenkathete $G$ und Hypotenuse $H$ gilt:
$$ \sin(\alpha) = \frac{G}{H}; \quad \cos(\alpha) = \frac{A}{H}; \quad \tan(\alpha) = \frac{G}{A} $$

### Polarkoordinaten
Ein Vektor $\vec{w}$ kann über seine [[KAP2-lalg1 Der Vektorraum#Norm (Länge) eines Vektors|Länge]] $r$ und den eingeschlossenen Winkel $\varphi$ (gemessen im Gegenuhrzeigersinn ab der x-Achse) definiert werden:
$$ \vec{w} = r \cdot \begin{pmatrix} \cos(\varphi) \\ \sin(\varphi) \end{pmatrix} $$

### Überlagerung gleichfrequenter Schwingungen
Eine Summe aus Sinus- und Kosinus-Schwingungen mit gleicher Kreisfrequenz $\omega$ kann zu einer einzigen Kosinus-Schwingung zusammengefasst werden:
$$ f(t) = a \cdot \cos(\omega \cdot t) + b \cdot \sin(\omega \cdot t) = A \cdot \cos(\omega \cdot t + \varphi) $$
Dabei ist die Amplitude $A = \sqrt{a^2 + b^2}$ und der Nullphasenwinkel berechnet sich (für $a > 0$) als $\varphi = -\arctan\left(\frac{b}{a}\right)$.

## Definitionen
### Funktion (Abbildung)
Eine Zuordnung $x \mapsto y = f(x)$ heisst Funktion. Dabei ist $x$ die freie Variable (das Argument bzw. der Input) und $y$ die abhängige Variable (der Funktionswert bzw. der Output).

### Periode und Symmetrie
Eine Funktion $f(t)$ heisst:
- **periodisch** mit Periode $T$, falls $f(t + T) = f(t)$
- **symmetrisch** (gerade), falls $f(-t) = f(t)$
- **antisymmetrisch** (ungerade), falls $f(-t) = -f(t)$

### Transformationen
Eine Funktion $f(x)$ kann im Koordinatensystem wie folgt transformiert werden:
- **Spiegelung:** $-f(x)$ an der x-Achse, $f(-x)$ an der y-Achse.
- **Verschiebung:** $f(x - c) + d$ verschiebt um $c$ in Richtung der positiven x-Achse und um $d$ in Richtung der positiven y-Achse.
- **Skalierung:** $f(a \cdot x)$ führt zu einer Stauchung in x-Richtung (für $a > 1$), während $a \cdot f(x)$ eine Streckung in y-Richtung bewirkt.

## Herleitungen
### Beispiel zur Überlagerung von Schwingungen
Gegeben sei die Schwingung:
$$ f(t) = \frac{5\sqrt{3}}{2} \cdot \cos(t) + \frac{5}{2} \cdot \sin(t) $$
Hier ist $a = \frac{5\sqrt{3}}{2}$ und $b = \frac{5}{2}$. Die Frequenz ist $\omega = 1$.
Wir berechnen die resultierende Amplitude $A$:
$$ A = \sqrt{\left(\frac{5\sqrt{3}}{2}\right)^2 + \left(\frac{5}{2}\right)^2} = \sqrt{\frac{75}{4} + \frac{25}{4}} = \sqrt{\frac{100}{4}} = \sqrt{25} = 5 $$
Wir berechnen den Phasenwinkel $\varphi$:
$$ \varphi = -\arctan\left(\frac{2.5}{2.5 \cdot \sqrt{3}}\right) = -\arctan\left(\frac{1}{\sqrt{3}}\right) = -\frac{\pi}{6} $$
Zusammengefasst lautet die Schwingung also:
$$ f(t) = 5 \cdot \cos\left(t - \frac{\pi}{6}\right) $$