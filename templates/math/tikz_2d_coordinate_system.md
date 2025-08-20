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
	axis line style = thick,
	xtick={-6,-5,...,6},
    ytick={-6,-5,...,6},
	xmin=-5,
    ymin=-5,
    xmax=5,
    ymax=5,
    xlabel=$x$,
    ylabel=$y$]
    % code/plots here
    % eg. \addplot[color=red] {0.2*x^2} ;
    \addplot[color=red] {x^2} ;
	\end{axis}
  \end{tikzpicture}
\end{document}
```
