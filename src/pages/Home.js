import { Puzzle } from '../component/puzzle'
import { Title } from '../component/title'

export class Home {
  
  constructor () {
    this.puzzle = new Puzzle()
    this.title = new Title()
  }
  
  render () {
    return`<div class="container">
               ${this.title.render()}
               ${this.puzzle.render()}
           </div>`
  }
}
