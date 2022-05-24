/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../styles/Unicef.css'

const Unicef = () => (
  <div className="containerUnicef">
    <ul className="contenidoUnicef">
      <li className="foto">
        <img src="https://www.apple.com/v/home/ao/images/logos/unicef-relief-fund/unicef_logo_dark__ejvlglygb3ee_large.png" alt="" />
      </li>
      <li className="estees">
        <a href="#" className="textoUnicef">Donate to support families affected by the war in Ukraine</a>
      </li>
    </ul>
  </div>
)

export default Unicef
