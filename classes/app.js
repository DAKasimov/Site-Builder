import {Site} from '../classes/site'
import { SideBar } from './sidebar'
export class App {
  constructor(model) {
    this.model = model
  }

  init() {
    const site = new Site("#site")
    site.render(this.model)

    new SideBar("#panel", (newBlock) => {
      this.model.push(newBlock)
      site.render(this.model)
    })
  }
}
