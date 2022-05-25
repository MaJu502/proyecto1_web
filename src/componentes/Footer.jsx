/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useState } from 'react'
import '../styles/Footer.css'

const Footer = () => {
  const TV = 'TV & Home'
  const ethics = 'Ethics & Compliance'

  return (
    <div className="container_footer">
      <div className="container_texto_top">
        <p className="texto_footertop">1. Get extra trade-in credit when you trade in an eligible iPhone, iPad, Mac, or Apple Watch and purchase a new Apple device through May 31, 2022. The extra trade-in credit</p>
        <p className="texto_footertop">may range from $10 to $50 for iPhone, $10 to $50 for iPad, $10 for Mac, and $20 to $40 for Apple Watch. Additional terms from Apple or Apple's trade-in partners may</p>
        <p className="texto_footertop">apply.</p>
        <br className="breaks_top" />
        <p className="texto_footertop">Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years</p>
        <p className="texto_footertop"> old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward a qualifying new device purchase, or added to an Apple Gift Card.</p>
        <p className="texto_footertop"> Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new</p>
        <p className="texto_footertop">device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may</p>
        <p className="texto_footertop"> vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any</p>
        <p className="texto_footertop"> trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may</p>
        <p className="texto_footertop">apply.</p>
        <br className="breaks_top" />
        <p className="texto_footertop">New subscribers only. $4.99/month after free trial. Plan automatically renews until cancelled. Terms apply.</p>
        <br className="breaks_top" />
        <p className="texto_footertop">Includes optional in-game purchases (includes random items). Apex Legends © 2022 Electronic Arts Inc. Apex Legends is a trademark of Electronic Arts Inc.</p>
      </div>
      <hr className="separador" />
      <div className="grid_links">
        <ul className="columna">
          <li className="nav_li_titulo">
            <p className="titulo_footer">Shop and Learn</p>
          </li>
          <li className="nav_li">
            <p>Store</p>
          </li>
          <li className="nav_li">
            <p>Mac</p>
          </li>
          <li className="nav_li">
            <p>iPad</p>
          </li>
          <li className="nav_li">
            <p>iPhone</p>
          </li>
          <li className="nav_li">
            <p>Watch</p>
          </li>
          <li className="nav_li">
            <p>Airpods</p>
          </li>
          <li className="nav_li">
            <p>{TV}</p>
          </li>
          <li className="nav_li">
            <p>iPod touch</p>
          </li>
          <li className="nav_li">
            <p>AirTag</p>
          </li>
          <li className="nav_li">
            <p>Accesories</p>
          </li>
          <li className="nav_li">
            <p>Gift Cards</p>
          </li>
        </ul>
        <ul>
          <ul className="columna">
            <li className="nav_li_titulo">
              <p className="titulo_footer">Services</p>
            </li>
            <li className="nav_li">
              <p>Apple Music</p>
            </li>
            <li className="nav_li">
              <p>Apple TV+</p>
            </li>
            <li className="nav_li">
              <p>Apple Fitness+</p>
            </li>
            <li className="nav_li">
              <p>Apple News+</p>
            </li>
            <li className="nav_li">
              <p>Apple Arcade</p>
            </li>
            <li className="nav_li">
              <p>iCloud</p>
            </li>
            <li className="nav_li">
              <p>Apple One</p>
            </li>
            <li className="nav_li">
              <p>Apple Card</p>
            </li>
            <li className="nav_li">
              <p>Apple Books</p>
            </li>
            <li className="nav_li">
              <p>Apple Podcasts</p>
            </li>
            <li className="nav_li">
              <p>App Store</p>
            </li>
          </ul>
          <ul className="columna">
            <li className="nav_li_titulo">
              <p className="titulo_footer">Account</p>
            </li>
            <li className="nav_li">
              <p>Manage Your Apple ID</p>
            </li>
            <li className="nav_li">
              <p>Apple Store Account</p>
            </li>
            <li className="nav_li">
              <p>iCloud.com</p>
            </li>
          </ul>
        </ul>
        <ul className="columna">
          <li className="nav_li_titulo">
            <p className="titulo_footer">Apple Store</p>
          </li>
          <li className="nav_li">
            <p>Find a Store</p>
          </li>
          <li className="nav_li">
            <p>Genius Bar</p>
          </li>
          <li className="nav_li">
            <p>Today at Apple</p>
          </li>
          <li className="nav_li">
            <p>Apple Camp</p>
          </li>
          <li className="nav_li">
            <p>Apple Store App</p>
          </li>
          <li className="nav_li">
            <p>Refurbished and Clearance</p>
          </li>
          <li className="nav_li">
            <p>Financing</p>
          </li>
          <li className="nav_li">
            <p>Apple Trade In</p>
          </li>
          <li className="nav_li">
            <p>Order Status</p>
          </li>
          <li className="nav_li">
            <p>Shopping Help</p>
          </li>
        </ul>
        <ul>
          <ul className="columna">
            <li className="nav_li_titulo">
              <p className="titulo_footer">For Business</p>
            </li>
            <li className="nav_li">
              <p>Apple and Business</p>
            </li>
            <li className="nav_li">
              <p>Shop for Business</p>
            </li>
          </ul>
          <ul className="columna">
            <li className="nav_li_titulo">
              <p className="titulo_footer">For Education</p>
            </li>
            <li className="nav_li">
              <p>Apple and Education</p>
            </li>
            <li className="nav_li">
              <p>Shop for K-12</p>
            </li>
            <li className="nav_li">
              <p>Shop for Collage</p>
            </li>
          </ul>
          <ul className="columna">
            <li className="nav_li_titulo">
              <p className="titulo_footer">For Healthcare</p>
            </li>
            <li className="nav_li">
              <p>Apple in Healthcare</p>
            </li>
            <li className="nav_li">
              <p>Health on Apple Watch</p>
            </li>
            <li className="nav_li">
              <p>Health Records on iPhone</p>
            </li>
          </ul>
          <ul className="columna">
            <li className="nav_li_titulo">
              <p className="titulo_footer">For Government</p>
            </li>
            <li className="nav_li">
              <p>Shop for Government</p>
            </li>
            <li className="nav_li">
              <p>Shop for Veterans and Military</p>
            </li>
          </ul>
        </ul>
        <ul>
          <ul className="columna">
            <li className="nav_li_titulo">
              <p className="titulo_footer">Apple Values</p>
            </li>
            <li className="nav_li">
              <p>Accesability</p>
            </li>
            <li className="nav_li">
              <p>Education</p>
            </li>
            <li className="nav_li">
              <p>Enviroment</p>
            </li>
            <li className="nav_li">
              <p>Inclusion and Diversity</p>
            </li>
            <li className="nav_li">
              <p>Privacy</p>
            </li>
            <li className="nav_li">
              <p>Racial Equity and Justice</p>
            </li>
            <li className="nav_li">
              <p>Supplier Responsability</p>
            </li>
          </ul>
          <ul className="columna">
            <li className="nav_li_titulo">
              <p className="titulo_footer">About Apple</p>
            </li>
            <li className="nav_li">
              <p>Newsroom</p>
            </li>
            <li className="nav_li">
              <p>Apple Leadership</p>
            </li>
            <li className="nav_li">
              <p>Career Opportunities</p>
            </li>
            <li className="nav_li">
              <p>Investors</p>
            </li>
            <li className="nav_li">
              <p>{ethics}</p>
            </li>
            <li className="nav_li">
              <p>Events</p>
            </li>
            <li className="nav_li">
              <p>Contact Apple</p>
            </li>
          </ul>
        </ul>
      </div>
      <div className="container_texto_top">
        <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</p>
      </div>
      <hr className="separador" />
      <div className="container_copyright">
        <ul className="footer_items">
          <li className="copy_text_li">
            <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
          </li>
          <li className="linkers">
            <p>Privacy Policy</p>
          </li>
          <li className="linkers">
            <p>Terms of Use</p>
          </li>
          <li className="linkers">
            <p>Sales and Refunds</p>
          </li>
          <li className="linkers">
            <p>Legal</p>
          </li>
          <li className="linkers">
            <p>Site Map</p>
          </li>
          <li className="states">
            <p>United States</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
