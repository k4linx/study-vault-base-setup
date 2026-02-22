---
erstelldatum: 2026-02-22
tags:
  - alg
  - komplexe_zahlen
---

## Wichtige Formeln
### Komplexe Zahl
$$
\begin{align}
z = a+b \sqrt{-1} = a+bi \\
\end{align}
$$
### Betrag und Argument
$$
\begin{align}
|z| &= \sqrt{a^{2}+b^{2}} \\
\text{1. Quadrant} \quad \phi &= \arctan\left( \frac{b}{a} \right)
\end{align}
\text{2.Quadrant} \quad \phi &= 180° - \arctan\left( \frac{b}{a} \right)

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
\begin{align}
i &= \sqrt{-1} \\
i^{2}&= -1 \\
i^{3}&= -i \\
i^{4}&= 1 \\
i^{5}&= i \\
\end{align}
$$
$$
\begin{multiline}
i^{n} = 
\end{multiline}
$$
### Komplexe Ebene
Komplexe Zahlen lassen sich im 2D Koordinatensystem darstellen wobei **Realteil** und **Imaginärteil** jeweils als Koordinaten für $x$ und $y$ verwendet werden. Der **Reelle** Teil bildet $x$ und der **Imaginäre** Teil $y$.
![[SW01-alg-komplexe-zahlen_komplexe_ebene.png#invert]]
### Betrag und Argument
- Der Betrag einer Komplexen Zahl ist deren Abstand zum Koordinatenursprung (Nullpunkt). $|z| = \sqrt{a^2+b^2}$.
- Das Argument ist der Winkel $\phi$ von der Positiven reellen Achse zum Ortsvektor von $z$. Gemessen wird dies im Gegenuhrzeigersinn. $\phi = \arctan\left( \frac{b}{a} \right)$ 
	- **Gradmass** $\phi \in [0°; 360°)$ oder $\phi \in (-180°;180]$ 
	- **Bogenmass** $\phi \in [0, 2\pi)$ oder $\phi \in (-\pi, \pi)$  

### Kartesische und Polarkoordinaten
Bei den Kartesischen Koordinaten ist das Koordinatensystem mit **Gitterlinien**, welche Geraden sind, unterteilt. Dieses System wird verwendet wenn wir eine Zahl mit Realteil $Re(z) = x$ und Imaginärteil $Im(z) = y$ haben.
![[SW01-alg-komplexe-zahlen_kart_koord.png#invert]]
Haben wir den Betrag einer Zahl $|z| = r$ und das Argument $\arg(z)=\phi$ ist es oft einfacher das Polarkoordinatensystem zu verwenden. $r$ wird hierbei als **Kreise** dargestellt und die Gitterlinien zum Argument sind **Halbgeraden**. 
![[SW01-alg-komplexe-zahlen_polar_koord.png#invert]]
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