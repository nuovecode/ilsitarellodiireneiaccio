import { Puzzle } from '../puzzle'
import { Title } from '../title'
import { Social } from '../social'

export class Home {
  
  constructor () {
    this.puzzle = new Puzzle()
    this.title = new Title()
    this.social = new Social()
  }
  
  render () {
    return`<div class="container">
               ${this.title.render()}
               ${this.puzzle.render()}
               <div class="black-board">
                 <section>${this.social.render()}</section>
                 <section>Technologies I love</section>
                 <section>Pet projects</section>
                 <section>Passionate intermittently to</section>
                 <section>People I care</section>
               </div>
           </div>`
  }
}
