export function row(content, styles = ''){
    return `<div style="${styles}" class="row">
        ${content}
    </div>`
}

export function col(content){
    return `<div class="col-sm">
        ${content}
    </div>`
}

export function css(styles = {}){
    const keys = Object.keys(styles)
    const array = keys.map((item)=>{
        return `${item} : ${styles[item]}`
    })
    return array.join(';')
}