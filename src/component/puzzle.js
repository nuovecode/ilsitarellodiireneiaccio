import { abstractComponent } from './abstract'
import '../css/puzzle.css'

export class Puzzle extends abstractComponent {
  
  constructor () {
    super();
    this.pieceNumber = 9
    this.eventListeners()
  }
  
  eventListeners() {
    this.app.addEventListener('click', this.onClick)
    this.app.addEventListener('dragstart', this.onDragstart)
    this.app.addEventListener('dragend', this.onDragend)
    this.app.addEventListener('dragover', this.onDragover)
    this.app.addEventListener('dragenter', this.onDragenter)
    this.app.addEventListener('dragleave', this.onDragleave)
    this.app.addEventListener('drop', this.onDrop)
  }
  
  onClick(e) {
    if (e.target.classList.contains('piece')) {
      e.preventDefault();
      let selected = document.querySelector('.selected')
      if(selected) selected.classList.remove('active')
      e.target.classList.add('selected')
    }
  }
  
  
  onDragstart(e) {
    console.log('dragstart')
    // e.preventDefault()
  }
  
  onDragend(e) {
    if (e.target.classList.contains('piece')) {
      e.target.classList.remove('moving')
      let left = e.clientX - (e.target.clientWidth / 2)
      let top = e.clientY - (e.target.clientHeight / 2)
      let position = 'left:' + left + 'px;top:' + top + 'px;'
      setTimeout(()=> e.target.setAttribute('style', position), 0)
    }
  }
  
  onDragover(e) {
    console.log('DRAGOVER')
    // e.preventDefault()
  }
  
  onDragenter(e) {
    if (e.target.classList.contains('piece')) {
      e.target.classList.add('moving')
    }
  }
  
  onDragleave(e) {
    e.preventDefault()
    console.log('dragleave')
    // console.log(e)
  }
  
  onDrop(e) {
    e.preventDefault()
    console.log('drop')
    console.log(e)
    document.querySelectorAll('.piece').forEach((piece) =>
      console.log(piece)
    )
  }
  
  render () {
    return`<div class="puzzle-container">
              ${`<div class="piece" draggable="true"></div>`.repeat(this.pieceNumber)}
           </div>`
  }
}
