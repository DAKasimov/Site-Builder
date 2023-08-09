export class Block {
    constructor(type, value, options){
        this.type = type
        this.value = value
        this.options = options
    }

}

export class Text extends Block {
    constructor(type, value, options){
        super('text', value, options)
        
    }
}

export class Columns {
    constructor(type, value){
        this.type = type
        this.value = value
    }

}

export class Image extends Block{
    constructor(type, value, options){
        super('image', value, options)
    }
}