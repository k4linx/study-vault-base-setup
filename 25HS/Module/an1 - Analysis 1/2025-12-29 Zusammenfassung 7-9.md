---
erstelldatum: 2025-12-03
tags:
---

## Wichtige Formeln
### Kettenregel
$$
f(x) = u(v(x)) \Rightarrow f'(x) = u'(v(x)) \cdot v'(x)
$$
### Produktregel
$$
f(x) = u(x) \cdot v(x) \Rightarrow f'(x) = u'(x)\cdot v(x)+ u(x)\cdot v'(x)
$$
### Quotientenregel
$$
f(x) = \frac{u(x)}{v(x)} \Rightarrow f'(x) = \frac{u'(x) \cdot v(x) - u(x) \cdot v'(x)}{v(x)^{2}}
$$
## Definitionen
### Kettenregel
Zwei Funktionen $u(z)$ und $v(x)$ werden verkettet
$$
\begin{align}
u(z) &= \sqrt{z} \\
v(x) &= 3x+5 \\
f(x) &= u(v(x)) = \sqrt{3x+5} \\
f(x) &= \sqrt{3x+5} = (3x+5)^{ \frac{1}{2}} \tag{1} \\
f'(x) &= \frac{1}{2}(3x+5)^{-\frac{1}{2}} \cdot 3 = \frac{3}{2\sqrt{3x+5}} \tag{2}
\end{align}
$$
$(1)$ Die ableitung der Verketteten Funktionen sieht so aus $f'(x) = u'(v(x)) \cdot v'(x)$. Zuerst kommt die Ableitung von $u$ mit der verketteten funktion $v$ dann wird das ganze noch mit der Ableitung von $v$ multipliziert.
### Produktregel
Wenn $f(x) = u(x) \cdot v(x)$ ist wird für die Ableitung zuerst $u$ abgeleitet und mit v multipliziert. dann wird $v$ abgeleitet und mit $u$ multipliziert. beide werden dann summiert.

$$
\begin{align}
f(x) &= (x^{12}-10)\cdot(x^{5}+x^{3}+x) \Rightarrow u(x)=(x^{12}-10), \ v(x) = x^{5}+x^{3}+x \\
u'(x)&= 12x^{11}, \ v'(x) = 5x^{4}+3x^{2}+1 \\
f'(x) &= 12x^{11}\cdot(x^{5}+x^{3}+x)+(x^{12}-10)\cdot(5x^{4}+3x^{2}+1)
\end{align}
$$


### Quotientenregel

## Herleitungen
$$

$$
