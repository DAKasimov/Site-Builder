import {row, col, css} from '../src/utils'

export class Site {
  constructor(selector) {
    this.el = document.querySelector(selector)
  }

  render(model) {
    model.forEach((item) => {
      this.title(item)
    })
  }

  title(obj) {
    let tag = "h1"
    let styles = ""
    if ("options" in obj) {
      if ("tag" in obj.options) {
        tag = obj.options.tag
      }
      if ("styles" in obj.options) {
        styles = obj.options.styles
      }
    }
    if (obj.type === "title") {
      site.insertAdjacentHTML(
        "beforeend",
        row(col(`<${tag}>${obj.value}</${tag}>`), css(styles))
      )
    } else if (obj.type === "text") {
      site.insertAdjacentHTML(
        "beforeend",
        row(col(`<p>${obj.value}</p>`), css(styles))
      )
    } else if (obj.type === "column") {
      let html = ``
      obj.value.forEach((c) => {
        html += col(c)
      })
      site.insertAdjacentHTML("beforeend", row(html))
    } else if (obj.type === "image") {
      site.insertAdjacentHTML(
        "beforeend",
        row(`<img src="${obj.value}"/>`, css(styles))
      )
    }
  }
}
