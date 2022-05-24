/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../styles/Iphonese.css'

const Iphonese = () => {
const textoLearn = 'Learn More >'
const textoBuy = 'Buy >'

  return (
    <div className="containerIphonse">
      <div className="copycontainer">
        <h2 className="titulonew">The new</h2>
        <h2 className="tituloIphonese" />
        <br />
        <h3 className="titulopower">Love the power. Love the price.</h3>
        <br />
        <div className="container_lista_links">
          <ul className="lista_links">
            <li className="li_link">
              <p>{textoLearn}</p>
            </li>
            <li className="li_link">
              <p>{textoBuy}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Iphonese
