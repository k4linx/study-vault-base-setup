<%*
  const modalForm = app.plugins.plugins.modalforms.api;
  const result = await modalForm.openForm("function_visualization");
  
-%>

    \addplot[color=<% result.get("plot_color") %>, domain=<% result.get("plot_domain") %>] {<% result.get("math_function") %>} node[pos=1.05, anchor=west] {$<% result.get("latex_function") %>$};
