import { abstractComponent } from './abstract'
import data from "../content/data";

export class Tags extends abstractComponent {
  render (info) {
    return`<ul class="tags">
             ${data[info].map((item) =>`<li>${item}</li>`).join('')}
           </ul>`
  }
}
