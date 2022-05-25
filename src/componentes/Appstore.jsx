/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../styles/Appstore.css'

const Appstore = () => {
  const textoLearn = 'Play now >'

  return (
    <div className="containerappstore">
      <div className="copycontainer">
        <h2 className="tituloappstore" />
        <br />
        <h3 className="titulo1appstore">Be any legend anywhere with</h3>
        <h3 className="titulo2appstore">Apex Legends Mobile.</h3>
        <br />
        <ul className="linksappstore">
          <li className="li_linkappstore">
            <p>{textoLearn}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Appstore
