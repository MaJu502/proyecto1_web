/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../styles/Privacy.css'

const Privacy = () => {
  const textoLearn = 'Learn More >'

  return (
    <div className="containerprivacy">
      <div className="copycontainer">
        <h2 className="tituloprivacy">Privacy. That's iPhone.</h2>
        <br />
        <ul className="linksprivacy">
          <li className="li_linkprivacy">
            <p>{textoLearn}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Privacy
