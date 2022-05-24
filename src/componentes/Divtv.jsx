import React, { useState } from 'react'
import '../styles/Divtv.css'
import play from '../imagepool/playicon.png'
import fondo from '../imagepool/backtv.png'

const Divtv = () => (
  <div className="containerTV">
    <div className="fondo">
      <div className="copycontainer">
        <div className="container_tv">
          <img src="https://www.apple.com/v/home/ao/images/logos/tv-plus-prehistoric/atv_logo__gjvol6f3enqu_large.png" alt="" />
        </div>
        <br />
        <div className="containertitulo">
          <img src="https://www.apple.com/v/home/ao/images/logos/tv-plus-prehistoric/prehistoric_logo__fl20686161ei_large.png" alt="" />
        </div>
        <br />
        <div className="containertitulo2">
          <img src="https://www.apple.com/v/home/ao/images/logos/tv-plus-prehistoric/tagline_logo__61lvp37tlpei_large.png" alt="" />
        </div>
        <br />
        <button type="button" className="streamnow">
          <ul className="listastream">
            <b>Stream now</b>
            <div className="playimage">
              <img src={play} alt="" />
            </div>
          </ul>
        </button>
      </div>
    </div>
  </div>
)

export default Divtv
