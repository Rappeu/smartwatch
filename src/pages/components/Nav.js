import React from 'react'
import cart from '../../images/cart.png'

export default function Nav() {
  return (
    <nav className="nav">
      <a className="nav--title" href="google.com"><h2 className="nav--title_txt">SMARTWATCH</h2></a>
      <ul className="nav--links">
        <li className="nav--links_itm"><a className="nav--links_itm_lnk" href="google.com">HOME</a></li>
        <li className="nav--links_itm"><a className="nav--links_itm_lnk" href="google.com">ABOUT</a></li>
        <li className="nav--links_itm"><a className="nav--links_itm_lnk" href="google.com">SHOP</a></li>
        <li className="nav--links_itm"><a className="nav--links_itm_lnk" href="google.com">CONTACT</a></li>
      </ul  >
      <button className="nav--cart">
        <img className="nav--cart_img" src={cart} alt="cart" />
      </button>
    </nav>
  )
}