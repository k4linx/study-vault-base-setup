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
    % eg. \addplot[color=red] {0.2*x^2} ;
    \addplot[color=red, domain=-2:2] {x^2}  ;
	\end{axis}
  \end{tikzpicture}
\end{document}
```
