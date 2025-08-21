<%*
  const modalForm = app.plugins.plugins.modalforms.api;
  const result = await modalForm.openForm("function_visualization");
  
-%>

    \addplot[color=<% result.get("plot_color") %>, domain=<% result.get("plot_domain") %>] {<% result.get("math_function") %>} node[ anchor=north] {$<% result.get("latex_function") %>$};
