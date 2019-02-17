import { abstractComponent } from './abstract'
import '../css/puzzle.css'

export class Puzzle extends abstractComponent {
  
  constructor () {
    super();
    this.pieceNumber = 9
    this.handleEventListeners()
  }
  
  handleEventListeners() {
    // dragover / dragstart
    this.app.onclick = this.onClick.bind(this)
    this.app.ondragend = this.onDragend.bind(this)
    this.app.ondragleave = this.onDragleave.bind(this)
    this.app.ondragenter = this.onDragenter.bind(this)
    this.app.ondrop = this.onDrop.bind(this)
  }
  
  isPuzzlePiece(e) {
    return e.target.classList.contains('piece')
  }
  
  onClick(e) {
    if (this.isPuzzlePiece(e)) {
      e.preventDefault();
      let selected = document.querySelector('.selected')
      if(selected) selected.classList.remove('active')
      e.target.classList.add('selected')
    }
  }
  
  onDragend(e) {
    if (this.isPuzzlePiece(e)) {
      console.log('dragend')
      e.target.classList.remove('moving')
      let left = e.clientX - (e.target.clientWidth / 2)
      let top = e.clientY - (e.target.clientHeight / 2)
      let position = 'left:' + left + 'px;top:' + top + 'px;'
      setTimeout(()=> e.target.setAttribute('style', position), 0)
    }
  }
  
  onDragenter(e) {
    if (e.target.classList.contains('piece')) {
      e.target.classList.add('moving')
    }
  }
  
  onDragleave(e) {
    console.log(e)
    if (this.isPuzzlePiece(e)) {
      e.preventDefault()
      console.log('dragleave')
      console.log(e)
      document.querySelectorAll('.piece').forEach((piece) =>
        console.log(piece.clientHeight)
      )
    }
  }
  
  onDrop(e) {
    e.preventDefault()
  }
  
  render () {
    return`<div class="puzzle-container">
              ${`<div class="piece" draggable="true"></div>`.repeat(this.pieceNumber)}
           </div>`
  }
}
