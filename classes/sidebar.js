import {block} from '../src/utils'
import {Text, Block} from '../classes/blocks'

export class SideBar{
    constructor(selector){
        this.el = document.querySelector(selector)
        this.init()
        
    }

    init(){
        this.el.insertAdjacentHTML('afterbegin', this.template)
        this.el.addEventListener('submit', this.add)
    }

    get template(){
        return block('text')
    }

    add(event){
        event.preventDefault()
        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        let newBlock

        if (type === 'text'){

            newBlock = new Text('text', value, {styles})

        }else {
            newBlock = new Block('title', value, {styles})
        }

        console.log(newBlock)
    }
}

