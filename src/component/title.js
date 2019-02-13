export class Title {
  
  constructor () {
    this.words = [ "Job Title_", "Web something", "Frontend deve", "Javascript devel", "mannagg" ];
    this.loopNum = 0;
    this.interval = parseInt(2000, 10) || 2000;
    this.txt = '';
    this.isDeleting = false;
    this.typeText()
  }
  
  typeText () {
    let i = this.loopNum % this.words.length
    let fullTxt = this.words[i];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
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
              <h1>Irene Iaccio</h1>
              <div id="job-title">Web</div>
           </div>`
  }
}
