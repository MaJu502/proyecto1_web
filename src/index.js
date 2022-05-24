import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './componentes/Navbar.jsx'
import Divunicef from './componentes/Unicef.jsx'
import DivTV from './componentes/Divtv.jsx'
import './styles/Master.css'

const App = () => (
  <nav>
    <Navbar />
    <br />
    <Divunicef />
    <br />
    <DivTV />
  </nav>
)

ReactDOM.render(<App />, document.getElementById('root'))
