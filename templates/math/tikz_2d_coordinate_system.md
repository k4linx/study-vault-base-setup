```tikz
\begin{document}
  \begin{tikzpicture}[domain=0:4]
    \draw[very thin,color=gray] (-5,-5) grid (5,5);
    \draw[->] (-5,0) -- (5,0) node[right] {$x$};
    \draw[->] (0,-5) -- (0,5) node[above] {$y$};
	\draw[color=red, domain=-2:1]    plot (\x, {\x*2 +1}) node[right] {$f(x) =x$};
  \end{tikzpicture}
\end{document}
```
