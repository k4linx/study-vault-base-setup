## ⁉️ Fragen

---
## 💡 Wichtige Begriffe

---
## 📄 Zusammenfassung
Gleichungssysteme bis potenzen
### Lineare Gleichungssysteme
Lineare Gleichungssysteme sind zwei oder mehr gleichungen mit zwei oder mehr unbekannten die Linear verlaufen.
$$
\left\vert \begin{align}
\ 2x+y &= 2 \\
 x + y &= \frac{3}{2} \ 
\end{align}\right\vert

$$
Um ein Lineares Gleichungssystem zu lösenmuss man nach einer variable auflösen und diesen Term anstelle der Variable im andere Gleichungssystem einsetzen.

Man erhält eine Gleichung mit nur einer unbekannten:

Diese kann einfach gelöst werden und das Resultat in der ersten Gleichung eingesetzt werden.

Dann kann man die erste Gleichung lösen und hat beide Resultate:

### Nichtlineare Gleichungssysteme

---
## ✅ ToDo

---
## 📕 Quellen

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
    enlargelimits=true,clip=true]
    % code/plots here
    % eg. parabel \addplot[color=red, domain=-2:2] {x^2} node[pos=1.05, anchor=west] {$y=x^2$};
    % domain=x-axis from:to
    % e.g. lineare funktion \addplot[color=red, domain=-2:2] {2*x+1} node[pos=1.05, anchor=west] {$y=2x+1$};
    \addplot[color=green, domain=-2:2] {x^2} node[anchor=north] {$y=x^{2}$};
    
    \addplot[color=red, domain=-3:3] {x} node[ anchor=north] {$y=x$};

    \addplot[color=blue, domain=-4:4] {abs(x)} node[ anchor=north] {$y=|x|$};

	\end{axis}
  \end{tikzpicture}
\end{document}
```


