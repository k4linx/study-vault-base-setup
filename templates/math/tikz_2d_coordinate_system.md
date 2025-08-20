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
    % eg. parabel \addplot[color=red, domain=-2:2] {x^2} node[pos=1.05, anchor=west] {$y=2x+1$};
    % domain=x-axis from:to
    % e.g. lineare funktion \addplot[color=red, domain=-2:2] {2*x+1} node[pos=1.05, anchor=west] {$y=2x+1$};

	\end{axis}
  \end{tikzpicture}
\end{document}
```
