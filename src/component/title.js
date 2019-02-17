import { abstractComponent } from './abstract'
import data from '../content/data.json'

export class Title extends abstractComponent {
  
  constructor () {
    super()
    this.loopNum = 0
    this.interval = parseInt(1000, 10) || 1000
    this.txt = ''
    this.isDeleting = false
    this.typeText()
  }
  
  typeText () {
    let i = this.loopNum % data.title.length
    let fullTxt = data.title[i]
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }
  
    let jobTitle = document.getElementById("job-title")
    if (jobTitle) jobTitle.innerHTML = this.txt
    
    let delta = 300 - Math.random() * 100;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.interval;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(()=> this.typeText(), delta)
  }
  
  render () {
    return`<div class="heading">
              <h1>${data.name}</h1>
              <div id="job-title"></div>
           </div>`
  }
}
