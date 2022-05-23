import React from 'react'
import collection2 from '../../images/collection-2.png'

export default function HeroHome() {
  return (
    <section className="hero hero--home">
      <div className="hero--home_imgCtn">
        <img className="hero--home_img" src={collection2} alt="img not found" />
      </div>
      <div className="hero--home_descCtn">
        <h1 className="hero--home_title">SMARTWATCH <br /> Series 6</h1>
        <h2 className="hero--home_subtitle">Available now</h2>
        <div className="home--buttons">
          <a href="" className="home--buttons-btn home--btn_1">Shop now</a>
          <a href="" className="home--buttons-btn home--btn_2">Learn more</a>
        </div>
      </div>
    </section>
  )
}