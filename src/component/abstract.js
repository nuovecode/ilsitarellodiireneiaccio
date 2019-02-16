export class abstractComponent {
  constructor () {
    this.app = document.getElementById('app')
  }
  render () {
    throw new Error("Method 'render()' must be implemented.");
  }
}
