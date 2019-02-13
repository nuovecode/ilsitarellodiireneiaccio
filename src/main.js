import { Home } from './pages/Home'
import { Header } from './component/header'
import { Footer } from './component/footer'
import './css/style.css'

const app = document.getElementById('app')

let page = new Home() // manage routing if needed
let header = new Header()
let footer = new Footer()

app.innerHTML = header.render() + page.render() + footer.render()

