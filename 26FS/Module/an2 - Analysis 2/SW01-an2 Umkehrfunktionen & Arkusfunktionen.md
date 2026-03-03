---
erstelldatum: 2026-02-26
tags:
  - an2
  - umkehrfunktionen
  - Arkusfunktionen
Folien: an2Woche01
---

## Wichtige Formeln
### Ableitung der Umkehrfunktion
$$
u'(y) = \frac{1}{f'(x)}
$$

## Definitionen
### Umkehrfunktion
Eine Funktion hat genau dann eine Umkehrfunktion wenn es zu jedem $x$-Wert genau ein $y$-wert gibt. 
Dazu muss die Funktion streng monoton wachsen/fallen. Dies kann man mit der [[Ableitung]] der Funktion $f'(x)$ auswerten. Wenn die Ableitung über das ganze Interval $f'(x) \geq 0$ oder $f'(x) \leq 0$ ist wurde die Strenge Monotonie bewiesen:
$$
\begin{align}
f(x)&=x^{2}\quad \text{mit} \quad \mathbb{D} = [0; \infty) \\
f'(x) &= 2x \geq 0 \ \text{auf} \ \mathbb{D} \ \text{und} \ f'(x) = 0 \ \text{nur für}  \ x = 0 \\
f^{-1}(x) &= \sqrt{x}
\end{align}
$$
die Ableitung der Funktion $f(x)$ ist eine Gerade und deshalb ist das Monotoniekriterium erfüllt.
Gibt es mehr als eine Nullstelle in der Ableitung muss die Funktion weiter untersucht werden. so muss geprüft werden ob es sich bei den Nullstellen um Sattelpunkte handelt. Wenn ja ist die Funktion streng monoton. Wenn es ein Wendepunkt (maxima/minima) ist, so kann keine Umkehrfunktion existieren. dann muss der Definitionsbereich entsprechend eingeschränkt werden.


als Beispiel $f(x)=e^{x}$ und $f(x)=x^{2}$ 
![[SW01-an2 Umkehrfunktionen & Arkusfunktionen_graph_ex.png#invert|300]]![[SW01-an2 Umkehrfunktionen & Arkusfunktionen_graph_x2.png#invert|250]]
- $f(x)=e^{x}$ hat eine Umkehrfunktion welche man bereits am Funktionsgraphen erkennt. 
- $f(x)=x^{2}$ hat keine Umkehrfunktion im Definitionsbereich $\mathbb{D} = \mathbb{R}$ weil die Funktion an der stelle $x=0$ dreht. somit ist nur entweder das interval von $\mathbb{D} = (-\infty;0]$ oder $\mathbb{D} = [0;\infty)$ ein gültiger Bereich um eine Umkehrfunktion zu bilden.
Die Umkehrfunktion ist die Spiegelung an der Winkelhalbierenden.
![[SW01-an2 Umkehrfunktionen & Arkusfunktionen_spiegelung_an_whalbe.png#invert|400]]
$$

$$
Wichtige Umkehrfunktionen sind $\sqrt{x}$ und $\ln(x)$.

### Umkehrfunktionen von sin, cos & tan
Sinus und Cosinus sind periodisch d.H. sie wiederholen sich unendlich wieder. deshalb wurde der Definitionsbereich eingeschränkt.
- für den Sinus hat man $\mathbb{D}=\left[ -\frac{\pi}{2}, \frac{\pi}{2} \right]$ gewählt. so ist die Funktion stets streng monton wachsend.
	![[SW01-an2 Umkehrfunktionen & Arkusfunktionen_sinus.png#invert|300]]
- für den Cosinus hat man $\mathbb{D}=[ 0, \pi]$ gewählt so ist die Funktion stets streng monoton fallend
	![[SW01-an2 Umkehrfunktionen & Arkusfunktionen_cosinus.png#invert|300]]
Die Umkehrfunktionen von sinus und cosinus sind der arcussinus und arcuscosinus.
- $sin(x) \rightarrow \arcsin(x)$
	![[SW01-an2 Umkehrfunktionen & Arkusfunktionen_arcsin.png#invert|200]]
- $cos(x) \rightarrow \arccos(x)$
	![[SW01-an2 Umkehrfunktionen & Arkusfunktionen_arccos.png#invert|200]]

Der Tangens ist so definiert:
$$
\tan(x) = \frac{\sin(x)}{cos(x)}
$$
![[SW01-an2 Umkehrfunktionen & Arkusfunktionen_tan.png#invert|150]]
Durch anwenden der [[Quotientenregel]] kann die Ableitung formen:
$$
\begin{align}
\frac{d}{dx} \tan(x)&= \frac{\cos(x)\cdot \cos(x) -\sin(x)\cdot(-\sin(x))}{(\cos(x))^2} \\
&= \frac{(\cos(x))^{2}+(sin(x))^{2}}{(\cos(x))^{2}}
\end{align}
$$
Diese kann man auf 2 Arten vereinfachen:
$$
\begin{align}
\frac{d}{dx} \tan(x) &= 1+(\tan(x))^{2} \\
\frac{d}{dx} \tan(x) &= \frac{1}{(\cos(x))^{2}}
\end{align}
$$
Der Definitionsbereich des Tangens wurde folgend gewählt $\mathbb{D} = \left[ - \frac{\pi}{2}; \frac{\pi}{2} \right]$
Der Arcustangens $\arctan(x)$ ist die Umkehrfunktion vom Tangens.
![[SW01-an2 Umkehrfunktionen & Arkusfunktionen_arctan.png#invert|500]]

### Ableitung der Umkehrfunktion
Die Ableitung der Umkehrfunktion wird zur Übersicht mit $u(y) = f^{-1}(y)$ d.H. $y = f(x) \Leftrightarrow x = u(y)$ bezeichnet.
Die definition der Ableitung der Umkehrfunktion ist folgende:
$$
u'(y)= \frac{1}{f'(u(y))} = \frac{1}{f'(x)} 
$$
Man muss nun zuerst die Basisfunktion $f(x)$ ableiten, daraus den Kehrwert ziehen das gibt die Ableitung der Umkehrfunktion. Dann kann man einen Wert für $x$ wählen in $f(x)$ einsetzen und erhält ein $y$ welches man in $u'(x)$ einsetzten kann wobei der Wert für $x$ weiterhin in $f'(x)$ eingesetzt wird das gibt dann den $x$ wert von $u'(y)$ 
$$
TODO Beispiel
$$
