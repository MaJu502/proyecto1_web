/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../styles/Credit.css'

const Credit = () => {
  const textoLearn = 'Learn More >'

  return (
    <div className="containercredit">
      <div className="copycontainer">
        <h2 className="fecha_credit">Now through May 31</h2>
        <br />
        <h2 className="credittitle1">Enjoy great savings</h2>
        <h2 className="credittitle2">and extra credit.¹</h2>
        <br />
        <h3 className="titulo1credit">Benefit from incredible savings and</h3>
        <h3 className="titulo2credit">more credit with Apple Trade In.</h3>
        <br />
        <ul className="linkscredit">
          <li className="li_linkcredit">
            <p>{textoLearn}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Credit
