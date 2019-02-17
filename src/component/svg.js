import { abstractComponent } from './abstract'
import data from '../content/data.json'

export class Svg extends abstractComponent {
  render (node) {
    return `<ul class="social">
           ${Object.keys(data[node]).map((item) =>`
              <li><a target="_blank" href="${data[node][item].url}" title="${item}">
                  <svg viewBox="0 0 512 512">
                     <path d="${data[node][item].path}"></path>
              </svg></a></li>
           `).join('')}
          </ul>`
  }
}
