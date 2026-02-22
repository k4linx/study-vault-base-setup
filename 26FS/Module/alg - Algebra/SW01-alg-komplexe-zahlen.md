---
erstelldatum: 2026-02-22
tags:
  - alg
  - komplexe_zahlen
---

## Wichtige Formeln
$$

$$
## Definitionen

### Rechenregeln Komplexe Zahlen
- [[Rechenregeln, Gleichungen und Funktionen#3 Rechengesetze|Assoziativ, Distributiv und Kommutativgesetze]] gelten wie bei reelen Zahlen
- $\sqrt{a} \cdot \sqrt{b} = \sqrt{a\cdot b}$ gelten nur wenn min 1 Zahl von $a, b \geq 0$ ist
- $(\sqrt{a})^{2}=a$ für $a \in \mathbb{R}$

### Form & Menge einer komplexen Zahl
$$
\begin{align}
z = a+b \cdot \sqrt{-1} \quad \text{mit} \quad a,b \in \mathbb{R} \\
\end{align}
$$
Wobei $a$ als **Realteil** bezeichnet wird und $b$ als den **Imaginärteil** 
$$
a = Re(z) \quad b = Im(z)
$$
Das Symbol für die Menge der Komplexen Zahlen is $\mathbb{C}$.

Wenn $b=0$ ist ist $z$ eine Reelle Zahl.

### Imaginäre Einheit
Das symbol $i$ wird für die imaginäre Einheit verwendet. 
$$
i = \sqrt{-1}
$$
In der Elektrotechnik wird, um Verwechslung zu vermeiden $i$ mit $j$ erstetzt.
Wird die **Imaginäre Einheit** quadriert ergibt sich $1$.
Weiter wenn die **Imaginäre Einheit** mit irgendeiner Potenz gerechnet wird gibt sich folgendes Muster:
$$
i^0
$$
## Herleitungen
### Cardanos Problem
$$
\begin{align}
x^{2}-10x+40 &\Rightarrow (5+ \color{red}\sqrt{-15})^{2}- \color{green}10 \cdot (5+ \sqrt{-15})+40 \\
&= 25 + \cancel{10 \sqrt{-15}} + \color{red}\sqrt{-15} \cdot \sqrt{-15} \color{green} -50 \cancel{-10\sqrt{-15}}+40 \\
&= 15 + \sqrt{-15} \cdot \sqrt{-15} \\
\end{align}
$$
$(\sqrt{-15})^{2}= -15$ muss sein damit der term $=0$ ist.
Quadrieren und Wurzelziehen darf man aber nicht mehr vertauschen bei den negativen Radikanten wenn $x \lt 0$ ist.
$$
\begin{align}
x \in \mathbb{R} \  \text{und} \ x \geq 0 \Rightarrow (\sqrt{x})^{2}= \sqrt{x^{2}} \\
\sqrt{-15} \cdot \sqrt{-15} = (\sqrt{-15})^{2} \ne \sqrt{(-15)\cdot(-15)}=\sqrt{15 \cdot 15} = 15
\end{align}
$$
Analog ist aber 
$$
\sqrt{5}\cdot \sqrt{-45} = \sqrt{5\cdot(-45)} = \sqrt{15^{2}\cdot(-1)} = \sqrt{15^{2}}\cdot \sqrt{-1} = 15\sqrt{-1}
$$
sinnvoll.

### Lösung mit imaginärer Einheit
$$
x = 5 \pm \sqrt{15}\cdot i
$$