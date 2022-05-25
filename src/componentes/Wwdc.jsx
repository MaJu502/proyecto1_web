/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../styles/Wwdc.css'

const Wwdc = () => {
  const textoLearn = 'Learn More >'

  return (
    <div className="containerwwdc">
      <div className="copycontainer">
        <h2 className="titulowwdc" />
        <br />
        <h3 className="titulo1">The Worlwide Developers Conference</h3>
        <h3 className="titulo2">is coming. Join us online June 6-10.</h3>
        <br />
        <ul className="linkswwdc">
          <li className="li_linkwwdc">
            <p>{textoLearn}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Wwdc
