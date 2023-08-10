import {block} from '../src/utils'
import {Text, Block} from '../classes/blocks'

export class SideBar{
    constructor(selector, updateCallback){
        this.el = document.querySelector(selector)
        this.update = updateCallback
        this.init()
        
    }

    init(){
        this.el.insertAdjacentHTML('afterbegin', this.template)
        this.el.addEventListener('submit', this.add.bind(this))
    }

    get template(){

        return block('title')
    }

    add(event){
        event.preventDefault()
        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        const newBlock = type === 'text' ? new Text('text', value, {styles}) : new Block('title', value, {styles})
        console.log(newBlock)
        this.update(newBlock)

        event.target.value.value = ''
        event.target.styles.value = ''
    }
}

