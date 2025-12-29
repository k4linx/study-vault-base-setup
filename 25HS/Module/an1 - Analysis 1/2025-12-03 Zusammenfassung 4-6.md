---
erstelldatum: 2025-12-03
tags:
  - grenzwerte
  - tangentensteigung
  - ableitung
---

## Wichtige Formeln
### Ableitung
$$
\begin{align}
f(x) &= ax^{n}-bx^{n}+c \\
f'(x) &= anx^{n-1}-bnx^{n-1}+\cancel{0}
\end{align}
$$
### h-methode
$$
\lim_{x\rightarrow x_{0}}= \frac{x^{n}-a}{x^{n}-b} \Rightarrow \lim_{h\rightarrow0} \frac{(x_{0}+h)^{n}-a}{x_{0}+h-b} \Rightarrow \lim_{h\rightarrow0} x_{0}^{n}+h = x_{0}^{n}
$$

## Definitionen
### Stückweise definierte Funktionen
$$
\begin{align}
f:\mathbb{D} = [0;4) \  A(x)
\begin{cases}
x \cdot 2 & \text{für}\ x \le 2\\
4+2- \frac{1}{2}(4-x)^{2} & \text{für}\ x \ge 2 \\
\end{cases}
\end{align}
$$

```tikz
\usepackage{pgfplots}

\begin{document}
  \begin{tikzpicture}
	\begin{axis}[
	no markers,
	grid=both,
	grid style={gray},
	axis equal,
	axis lines=center,
	axis line style={-latex, thick},
    xlabel=$x$,
    ylabel=$y$,
    xtick distance=1,
	ytick distance=1,
    enlargelimits=true,
    clip=true]
    % code/plots here
    % eg. parabel \addplot[color=red, domain=-2:2] {x^2} node[pos=1.05, anchor=west] {$y=x^2$};
    % domain=x-axis from:to
    % e.g. lineare funktion \addplot[color=red, domain=-2:2] {2*x+1} node[pos=1.05, anchor=west] {$y=2x+1$};
    \addplot[color=red, domain=-4:2] {2*x};
    \addplot[color=red, domain=2:4] {4+2-1/2 *(4-x)^2};
	\end{axis}
  \end{tikzpicture}
\end{document}
```

### Tangentensteigung
Mit Hilfe von 2 Punkten auf einem Funktionsgraphen kann die Sekantensteigung gebildet werden (gezeigt an einer Parabel $x^{2}$)
$$
\begin{align}
A(x_{0}|x_{0}^{2}) & \quad B(x_{0}+h|(x_{0}+h)^{2} \\
\\
m_{sek}&= \frac{(x_{0}+h)^{2}-x_{0}^{2}}{h} \\
\end{align}
$$
Die Tangentensteigung kann nun aus dem [[2025-12-03 Zusammenfassung 1-3#Grenzwert|Grenzwert]] der Sekantensteigung berechnet werden wenn $h$ gegen $0$ geht.
$$
m_{tan} = \lim_{h \rightarrow 0} \frac{(x_{0}+h)^{2}-x_{0}^{2}}{h}
$$
Vereinfachen und ausmultiplizieren
$$
m_{tan}= 2x_{0}
$$
Die Tangentensteigung ist auch Ableitung genannt
### Ableitung
Ableitungen lassen sich aus der Funktion folgendermassen bilden:
$$
\begin{align}
f(x) &= x^{2}+3x+3 \tag{1}\\
f'(x) &= 2x+3+0 \tag{2}
\end{align}
$$
$(1)$ Grundfunktion
$(2)$ Ableitung

Eine Ableitung wird gebildet indem man die Potenz als Faktor vor die Funktion setzt und um 1 reduziert.
$$
f(x) = x^{2}+3x+3 \Rightarrow f'(x)= 2x + ...
$$
Wird die potenz $0$ wird das x weggelassen.
$$
f'(x) = 2x+3
$$
Konstanten werden zu 0 (können weggelassen werden)
$$
f'(x) = 2x + 3 + \cancel{0}  
$$
#### Ableitungsregeln
$$
\begin{align}
\tag{1} f(x)&=x^{n} & \quad  \Rightarrow \quad  f'(x) &= n \cdot x^{n-1} \\
\tag{2} f(x)&=c & \quad \Rightarrow \quad f'(x) &= 0 \\
\tag{3} f(x) &= a \cdot u(x) & \quad \Rightarrow \quad f'(x) &= a \cdot u'(x) \\
\tag{4} f(x) &= u(x) + v(x) & \quad \Rightarrow \quad f'(x)  & = u'(x)+v'(x) \\
\end{align}
$$

### Maxima, Minima
#### Lokales Maximum


#### Lokales Minimum


#### Sattelpunkt

### Grenzwerte mit der h-Methode
Die h-Methode wird verwendet wenn ein Grenzwert der Form $\lim_{x\rightarrow x_{0}}f(x)$ vorliegt. Das kürzen ergibt sich mit der h-Methode von alleine.
$$
\lim_{x \rightarrow 2} \frac{x^{2}-4}{x-2} = \lim_{h\rightarrow0} = \frac{(2+h)^{2}-4}{2+h-2} = \lim_{h\rightarrow0} = \frac{4+4h+h^{2}-4}{h} = \lim_{h\rightarrow0} 4+h = 4
$$
