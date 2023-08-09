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

export function block(type){
    return `
    <form>
        <h5>${type}</h5>
        <div class="form-group">
            <input class="form-control form-control-sm" name="value" placeholder="value">
        </div>
        <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
    `
}