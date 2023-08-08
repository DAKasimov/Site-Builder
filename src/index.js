import { model } from "./model"
import "./styles/main.css"
import { row, col, css } from "./utils"

const site = document.querySelector("#site")

model.forEach((item) => {
  title(item)
})

function title(obj) {
  let tag = 'h1'
  let styles = ''
  if ('options' in obj){
    if ('tag' in obj.options){
        tag = obj.options.tag
    }
    if ('styles' in obj.options){
      styles = obj.options.styles
    }
  }
  console.log()
  if (obj.type === "title") {
    site.insertAdjacentHTML("beforeend", row(col(`<${tag}>${obj.value}</${tag}>`),
    css(styles)))
  } else if (obj.type === "text") {
    site.insertAdjacentHTML("beforeend", row(col(`<p>${obj.value}</p>`)))
  } else if (obj.type === "column") {
    let html = ``
    obj.value.forEach((c) => {
      html += col(c)
    })
    site.insertAdjacentHTML("beforeend", row(html))
  } else if (obj.type === "image") {
    site.insertAdjacentHTML("beforeend", row(`<img src="${obj.value}"/>`))
  }
}
