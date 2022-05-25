/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../styles/Pride.css'

const Pride = () => {
  const textoLearn = 'Shop new Pride Edition bands >'

  return (
    <div className="containerpride">
      <div className="copycontainer">
        <h2 className="titulopridetop">Threads of</h2>
        <br />
        <h2 className="titulopride" />
        <br />
        <ul className="linkspride">
          <li className="li_linkpride">
            <p>{textoLearn}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Pride
