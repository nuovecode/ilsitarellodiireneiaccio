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
      e.target.setAttribute('style', position)
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
      let pieces = document.querySelectorAll('.piece:not(.dropped)'), i
      for (i = 0; i < pieces.length; ++i) {
        let top = (pieces[i].getBoundingClientRect().top + (e.target.clientHeight / 2)) - e.clientY
        let left = Math.abs((pieces[i].getBoundingClientRect().left + (e.target.clientWidth / 2)) -  e.clientX)
        if( -5 < left < 5 && (e.target.clientHeight -5) < top < (e.target.clientHeight + 5) || -5 < top < 5 && (e.target.clientHeight -5) < left < (e.target.clientHeight + 5)) {
          let topDifference = pieces[i].getBoundingClientRect().top - e.clientY - (e.target.clientHeight / 2)
          let leftDifference = pieces[i].getBoundingClientRect().left - e.clientX - (e.target.clientWidth / 2)
          let topPosition = 0
          let leftPosition = 0
          if(-this.precision < topDifference && topDifference < this.precision) {
            topPosition = pieces[i].getBoundingClientRect().top
            if (145 < leftDifference < 155) {
              leftPosition = pieces[i].getBoundingClientRect().left + 150
            } else {
              leftPosition = pieces[i].getBoundingClientRect().left - 150
            }
          } else if(145 < topDifference < 155) {
             topPosition = pieces[i].getBoundingClientRect().top + 150
             leftPosition = pieces[i].getBoundingClientRect().left
          } else {
            topPosition = pieces[i].getBoundingClientRect().top - 150
            leftPosition = pieces[i].getBoundingClientRect().left
          }
          let position = 'left:' + leftPosition + 'px;top:' + topPosition + 'px;'
          e.target.setAttribute('style', position)
          return
        }
      }
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
