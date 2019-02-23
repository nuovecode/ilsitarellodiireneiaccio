import { abstractComponent } from './abstract'
import '../css/puzzle.css'

export class Puzzle extends abstractComponent {
  
  constructor () {
    super()
    this.pieceNumber = 9
    this.precision = 5
    this.handleEventListeners()
  }
  
  handleEventListeners() {
    this.app.onclick = this.onClick.bind(this)
    this.app.ondragend = this.onDragend.bind(this)
    this.app.ondragenter = this.onDragenter.bind(this)
    this.app.ondragover = this.onDragover.bind(this)
    this.app.ondrop = this.onDrop.bind(this)
  }
  
  onClick(e) {
    if (this.isPuzzlePiece(e)) {
      e.preventDefault()
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
    e.preventDefault()
    if (e.target.classList.contains('piece')) {
      e.target.classList.add('moving')
    }
  }
  
  onDragover(e) {
    e.preventDefault()
  }
  
  onDrop(e) {
    if (this.isPuzzlePiece(e)) {
      e.target.classList.add('dropped')
      document.querySelectorAll('.piece:not(.dropped)').forEach((piece) => {
        let top = (piece.getBoundingClientRect().top + (e.target.clientHeight / 2)) - e.clientY
        let left = Math.abs((piece.getBoundingClientRect().left + (e.target.clientWidth / 2)) -  e.clientX)
        if(this.getNearestPiece(top, left, e) || this.getNearestPiece(left, top, e)) {
          let topDifference = piece.getBoundingClientRect().top - e.clientY - (e.target.clientHeight / 2)
          let leftDifference = piece.getBoundingClientRect().left - e.clientX - (e.target.clientWidth / 2)
          let topPosition = 0
          let leftPosition = 0
          if(-this.precision < topDifference < this.precision) {
            topPosition = piece.getBoundingClientRect().top
            if (145 < leftDifference < 155) {
              leftPosition = piece.getBoundingClientRect().left + 150
            } else {
              leftPosition = piece.getBoundingClientRect().left - 150
            }
          } else if(145 < topDifference < 155) {
             topPosition = piece.getBoundingClientRect().top + 150
             leftPosition = piece.getBoundingClientRect().left
          } else {
            topPosition = piece.getBoundingClientRect().top - 150
            leftPosition = piece.getBoundingClientRect().left
          }
          let position = 'left:' + leftPosition + 'px;top:' + topPosition + 'px;'
          e.target.setAttribute('style', position)
          return
        }
      })
      e.target.classList.remove('dropped')
    }
  }
  
  getNearestPiece (value1, value2, e) {
    return -this.precision < value1 < this.precision && (e.target.clientHeight -this.precision) < value2 < (e.target.clientHeight + this.precision)
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
