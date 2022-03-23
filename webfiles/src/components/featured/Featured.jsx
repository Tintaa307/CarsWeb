import React from 'react'
import './featured.css'
import Map from '..//featured/map-featured.svg'
import Img from '..//featured/img-featured.png'
import Car1 from '..//featured/featured1.png'
import Car2 from '..//featured/featured2.png'
import Car3 from '..//featured/featured3.png'
import Car4 from '..//featured/featured4.png'
import Car5 from '..//featured/featured5.png'
import Tesla from '..//featured/featured-logo3.png'
import Audi from '..//featured/featured-logo2.png'
import Porsche from '..//featured/featured-logo.png'
import Lambo from '..//featured/featured-logo4.png'

const Featured = () => {
  return (
    <section className="section section-featured">
      <div className="container container-featured">
        <div className="container-titles">
          <h1>More Features</h1>
        </div>
        <div className="container-info-featured" id='Featured'>
          <div className="container-img-featured">
            <img src={Map} alt="" className='map'/>
            <img src={Img} alt="" className='car'/>
          </div>
          <div className="container-info">
            <div className="expecifics">
              <h1>800v</h1>
              <h2>Turbo</h2>
              <h3>Chargin</h3>
            </div>
            <div className="expecifics">
              <h1>350</h1>
              <h2>Km</h2>
              <h3>Range</h3>
            </div>
            <div className="expecifics">
              <h1>480</h1>
              <h2>Km</h2>
              <h3>Travel</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-cars-featured" id='Cars'>
            <div className="container-titles">
              <h1>Featured Luxury Cars</h1>
            </div>
            <div className="container-marcas">
              <div className="container-pos-brand">
                <div className="brand up">
                  <button data-filter=".all">All</button>
                </div>
                <div className="brand" data-filter=".tesla">
                  <img src={Tesla} alt="" />
                </div>
                <div className="brand" data-filter=".audi">
                  <img src={Audi} alt="" className='audi' />
                </div>
                <div className="brand" data-filter=".porsche">
                  <img src={Porsche} alt="" />
                </div>
              </div>
            </div>
            <div className="container-list-cars">
              <div className="container-pos-cars">
                <div className="card mix all tesla">
                  <h1>Tesla</h1>
                  <h2>Model X</h2>
                  <img src={Car1} alt="" />
                  <h3>$98.900</h3>
                </div>
                <div className="card mix all tesla">
                  <h1>Tesla</h1>
                  <h2>Model 3</h2>
                  <img src={Car2} alt="" />
                  <h3>$45.900</h3>
                </div>
                <div className="card mix all audi">
                  <h1>Audi</h1>
                  <h2>E-Tron</h2>
                  <img src={Car3} alt="" />
                  <h3>$150.900</h3>
                </div>
                <div className="card mix all porsche">
                  <h1>Porsche</h1>
                  <h2>Boxster 718</h2>
                  <img src={Car4} alt="" />
                  <h3>$118.900</h3>
                </div>
                <div className="card mix all porsche">
                  <h1>Porsche</h1>
                  <h2>Panamera</h2>
                  <img src={Car5} alt="" />
                  <h3>$123.900</h3>
                </div>
              </div>
            </div>
          </div>
    </section>
  )
}

export default Featured