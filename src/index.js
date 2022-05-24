import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './componentes/Navbar.jsx'
import './styles/Master.css'

const App = () => (
  <nav>
    <Navbar />
  </nav>
)

ReactDOM.render(<App />, document.getElementById('root'))
