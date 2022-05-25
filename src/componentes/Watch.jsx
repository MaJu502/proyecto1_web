/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../styles/Watch.css'

const Watch = () => {
  const textoLearn = 'Learn More >'
  const textoBuy = 'Buy >'

  return (
    <div className="containerwatch">
      <div className="copycontainer">
        <h2 className="titulowatch" />
        <br />
        <h3 className="titulo1watch">It's our largest display yet</h3>
        <br />
        <ul className="linkswatch">
          <li className="li_linkwatch">
            <p>{textoLearn}</p>
          </li>
          <li className="li_linkwatch">
            <p>{textoBuy}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Watch
