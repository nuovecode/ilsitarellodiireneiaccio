export class Puzzle {
  
  constructor () {
    this.eventListeners()
  }
  
  eventListeners() {
    let app = document.getElementById('app')
    app.addEventListener('click', this.onClick)
    app.addEventListener('dragstart', this.onDragstart)
    app.addEventListener('dragend', this.onDragend)
    app.addEventListener('dragover', this.onDragover)
    app.addEventListener('dragenter', this.onDragenter)
    app.addEventListener('dragleave', this.onDragleave)
    app.addEventListener('drop', this.onDrop)
  }
  
  onClick(e) {
    e.preventDefault();
    if (e.target.classList.contains('piece')) {
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
              <div class="piece" draggable="true"></div>
              <div class="piece" draggable="true"></div>
              <div class="piece" draggable="true"></div>
              <div class="piece" draggable="true"></div>
              <div class="piece" draggable="true"></div>
              <div class="piece" draggable="true"></div>
              <div class="piece" draggable="true"></div>
              <div class="piece" draggable="true"></div>
              <div class="piece" draggable="true"></div>
           </div>`
  }
}
