export class Puzzle {
  
  constructor () {
    this.eventListeners()
  }
  
  eventListeners() {
    let app = document.getElementById("app")
    app.addEventListener("dragstart", this.dragstart)
    app.addEventListener("dragend", this.dragend)
    app.addEventListener("dragover", this.dragover)
    app.addEventListener("dragenter", this.dragenter)
    app.addEventListener("dragleave", this.dragleave)
    app.addEventListener("drop", this.drop)
  }
  
  dragstart(e) {
    console.log('dragstart')
    //console.log(e)
  }
  
  dragend(e) {
    if (e.target.classList.contains('piece')) {
      let left = e.clientX - (e.target.clientWidth / 2)
      let top = e.clientY - (e.target.clientHeight / 2)
      let position = 'left:' + left + 'px;top:' + top + 'px;'
      setTimeout(()=> e.target.setAttribute('style', position), 0)
    }
  }
  
  dragover(e) {
    console.log('DRAGOVER')
    e.preventDefault()
  }
  
  dragenter(e) {
    console.log('dragenter')
    //console.log(e)
    e.preventDefault()
    
  }
  
  dragleave(e) {
    console.log('dragleave')
    // console.log(e)
    
  }
  
  drop(e) {
    console.log('drop')
    //console.log(e)
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
