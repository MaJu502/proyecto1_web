import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './componentes/Navbar.jsx'
import Divunicef from './componentes/Unicef.jsx'
import DivTV from './componentes/Divtv.jsx'
import Iphone13pro from './componentes/Iphone13pro.jsx'
import './styles/Master.css'

const App = () => (
  <nav>
    <Navbar />
    <br />
    <Divunicef />
    <DivTV />
    <br />
    <Iphone13pro />
  </nav>
)

ReactDOM.render(<App />, document.getElementById('root'))
