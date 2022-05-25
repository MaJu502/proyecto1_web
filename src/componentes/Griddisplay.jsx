/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../styles/Griddisplay.css'
import Wwdc from './Wwdc.jsx'
import Credit from './Credit.jsx'
import Privacy from './Privacy.jsx'
import Watch from './Watch.jsx'
import Appstore from './Appstore.jsx'
import Pride from './Pride.jsx'

const Grid = () => {
  const nombre = 'hola'

  return (
    <div className="grid_elements">
      <Wwdc />
      <Credit />
      <Privacy />
      <Watch />
      <Appstore />
      <Pride />
    </div>
  )
}

export default Grid
