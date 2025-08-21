<%*
  const modalForm = app.plugins.plugins.modalforms.api;
  const result = await modalForm.openForm("function_visualization");
  
-%>
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
    \addplot[color=<% result.get("plot_color") %>, domain=<% result.get("plot_domain") %>] {<% result.get("math_function") %>} node[ anchor=north] {$<% result.get("latex_function") %>$};
	\end{axis}
  \end{tikzpicture}
\end{document}
```
