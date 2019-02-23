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
    // this.app.ondragleave = this.onDragleave.bind(this)
    this.app.ondragenter = this.onDragenter.bind(this)
    this.app.ondrop = this.onDrop.bind(this)
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
    if (this.isPuzzlePiece(e)) {
      e.target.classList.add('dropped')
      let topPositions = []
      let leftPositions = []
      document.querySelectorAll('.piece:not(.dropped)').forEach((piece) => {
          topPositions.push(piece.getBoundingClientRect().top)
          leftPositions.push(piece.getBoundingClientRect().left)
      })
      let nearestTop = this.closestPosition(e.target.getBoundingClientRect().top + 10, topPositions)
      let nearestLeft = this.closestPosition(e.target.getBoundingClientRect().left + 10, leftPositions)
      e.target.classList.remove('dropped')
    }
  }
  
  onDrop(e) {
    e.preventDefault()
  }
  
  isPuzzlePiece(e) {
    return e.target.classList.contains('piece')
  }
  
  closestPosition(e, positions) {
    let index = positions.map((k) => Math.abs(k - e))
    let min = Math.min.apply(Math, index)
    return positions[index.indexOf(min)]
  }
  
  render () {
    return`<div class="puzzle-container">
              ${`<div class="piece" draggable="true"></div>`.repeat(this.pieceNumber)}
           </div>`
  }
}
