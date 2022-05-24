/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react'
import '../styles/Navbar.css'
import lupa from '../imagepool/lupa1.png'

const Navbar = () => {
  const tituloTV = 'Tv & Home'

  return (
    <div className="navbar">
      <div className="items_list">
        <ul className="grclassName_items">
          <li className="nav_home">
            <a href="" />
          </li>
          <li className="nav_li">
            <p className="nav_item">Store</p>
          </li>
          <li className="nav_li">
            <p className="nav_item">Mac</p>
          </li>
          <li className="nav_li">
            <p className="nav_item">iPad</p>
          </li>
          <li className="nav_li">
            <p className="nav_item">iPhone</p>
          </li>
          <li className="nav_li">
            <p className="nav_item">Watch</p>
          </li>
          <li className="nav_li">
            <p className="nav_item">AirPods</p>
          </li>
          <li className="nav_li">
            <p className="nav_item">{tituloTV}</p>
          </li>
          <li className="nav_li">
            <p className="nav_item">Only on Apple</p>
          </li>
          <li className="nav_li">
            <p className="nav_item">Accesories</p>
          </li>
          <li className="nav_li">
            <p className="nav_item">Support</p>
          </li>
          <li className="nav_search">
            <img src={lupa} alt="lupa" width="15px" height="15px" />
          </li>
          <li className="nav_bag">
            <a href="" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
