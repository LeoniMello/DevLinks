function togglemode() {
  const html = document.documentElement
  /*verefica se no html ha uma classe que contem o nome light*/
  if (html.classList.contains("light")) {
    /*caso tenha pedimos para remover a classe com nome light */
    html.classList.remove("light")
  } else {
    /*caso não tenha pedimos para adicionar a classe com nome light*/
    html.classList.add("light")
  }
}
