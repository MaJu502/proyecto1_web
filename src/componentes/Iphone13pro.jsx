/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../styles/Iphone13pro.css'

const Iphone13pro = () => {
const textoLearn = 'Learn More >'
const textoBuy = 'Buy >'

  return (
    <div className="containeriphone">
      <div className="copycontainer">
        <h2 className="tituloIphone">iPhone 13 Pro</h2>
        <br />
        <h3 className="tituloOhSoPro">Oh. So. Pro.</h3>
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

export default Iphone13pro
