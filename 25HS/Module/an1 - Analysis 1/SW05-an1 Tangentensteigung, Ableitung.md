---
erstelldatum: 2026-03-08
tags:
Folien:
---
## Wichtige Formeln
$$

$$

---
## Definitionen
### Sekante
Schneidet die Gerade den Funktionsgraphen an 2 Punkten nennt man diese eine Sekannte.
Um die Sekante zu bestimmen muss ein Punkt auf der Funktion bekannt sein:
$$
A(1|1^{2}) \Rightarrow x_{0}=1
$$
Um einen zweiten Punkt zu erhalten wird der erste Punkt ($A$) so erhalten wir für $x=1+h$ und für $y = (1+h)^2$ also $B(1+h|(1+h)^{2})$

Daraus kann die Steigung $m_{sek}$ berechnet werden:
$$
m_{sek}= \frac{(1+h)^{2}-1^{2}}{h}
$$
![[SW05-an1 Tangentensteigung, Ableitung_sekantensteigung.png#invert|256]]
### Ableitung, Tangentensteigung
Eine Gerade die einen Funktionsgraphen an genau einem Punkt berührt, nennt man Tangente. 
Diese kann mit dem [[Grenzwert]] von der Sekante berechnet werden. lässt man diesen gegen 0 laufen erhält man immer genauer die Steigung der Tangente
$$
\begin{align}
m_{tan} &= \lim_{h \rightarrow 0} = \frac{(1+h)^{2}-1^{2}}{h} \\
&=\lim_{h \rightarrow 0} \frac{2h-h^{2}}{h} \\
&= \lim_{h \rightarrow 0} 2+h \\
m_{tan} &= 2 \\
\end{align}
$$

Allgemein ist die Tangentensteigung (Ableitung) wie folgt berechnet:
$$
f'(x)= \lim_{h \rightarrow 0 }= \frac{f(x_{0}+h)-f(x_{0})}{h}
$$
#### Ableitungsregeln
1. 
$$
f(x)= x^{n}\quad \Rightarrow \quad f'(x)=n \cdot x^{n-1}
$$
2. Konstante Funktion
$$

$$
3. Faktor
$$

$$
4. Verkettung
$$

$$