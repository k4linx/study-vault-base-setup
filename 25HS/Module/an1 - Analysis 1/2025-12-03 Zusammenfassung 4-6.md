---
erstelldatum: 2025-12-03
tags:
---

## Wichtige Formeln
$$

$$

## Definitionen
### Stückweise definierte Funktionen
$$
\begin{align}
f:\mathbb{D} = [0;4) \  A(x)
\begin{cases}
x \cdot 2 & \text{für}\ x \le 2\\
x \cdot 2 + \frac{(x-2)^{2}}{2} & \text{für}\ x \ge 2 \\
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
    \addplot[color=red, domain=2:4] {x*2 + (x-2)^2/2};
	\end{axis}
  \end{tikzpicture}
\end{document}
```


## Herleitungen
$$

$$
