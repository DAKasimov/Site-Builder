import {model} from './model'
import './styles/main.css'

const site = document.querySelector("#site")

model.forEach((item) => {
  title(item)
})

function title(obj) {
  if (obj.type === "title") {
    site.insertAdjacentHTML(
      "beforeend",
      `
        <div class="row">
            <div class="col-sm">
                <h1>${obj.value}</h1>
            </div>
            
        </div>
        `
    )
  } else if (obj.type === "text") {
    site.insertAdjacentHTML(
      "beforeend",
      `
        <div class="row">
            <div class="col-sm">
                <p>${obj.value}</p>
            </div>
            
        </div>
        `
    )
  } else if (obj.type === "column") {
    let html = ``
    obj.value.forEach((c)=>{
        html += 
        `
        <div class="col-sm">
            ${c}
        </div>
        `
    })
    site.insertAdjacentHTML('beforeend', 
    `
    <div class="row">
        ${html}
    </div>
    `
    )
  }
  else if (obj.type === 'image'){
    site.insertAdjacentHTML('beforeend', 
    `
    <div class="row">
        <img src="${obj.value}"/>
    </div>
    `
    )
  }
}
