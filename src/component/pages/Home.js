import { abstractComponent } from './../abstract'
import { Puzzle } from '../puzzle'
import { Title } from '../title'
import { Svg } from '../svg'
import { Tags } from '../tags'
let html = require('../../content/home.md')

export class Home extends abstractComponent {
  
  constructor () {
    super()
    this.puzzle = new Puzzle()
    this.title = new Title()
    this.icons = new Svg()
    this.tag = new Tags()
  }
  
  render () {
    return`${this.title.render()}
           ${this.puzzle.render()}
           <div class="black-board">
              <section>
                 <h3>Toolbox</h3>
                 <h4>Favorite</h4>
                 ${this.tag.render('lovedTechnologies')}
                 <h4>Other</h4>
                 ${this.tag.render('knownTechnologies')}
              </section>
              <section>
                  ${html}
              </section>
              ${this.icons.render('social')}
           </div>`
  }
}
