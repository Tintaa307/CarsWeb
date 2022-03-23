import React from 'react'
import './home.css'
import Img from '..//home/img-home.png'

const Home = () => {
  return (
    <section className="section-home">
      <div className="container container-home">
        <div className="container-title" id='Home'>
          <h1>Choose The Best Car</h1>
          <h2>Porsche Mission E</h2>
          <a href="#"><i className='fas fa-bolt-lightning'></i>Electric car</a>
        </div>
        <div className="container-img-home">
          <img src={Img} alt="" />
        </div>
        <div className="container-info-home">
          <div className="info-box">
            <a href="#"><i className='fas fa-thermometer'></i></a>
            <h2>24°</h2>
            <h3>TEMPERATURE</h3>
          </div>
          <div className="info-box">
            <a href="#"><i className='fas fa-clock'></i></a>
            <h2>873</h2>
            <h3>MILEAGE</h3>
          </div>
          <div className="info-box">
            <a href="#"><i class="fas fa-bolt-lightning"></i></a>
            <h2>97%</h2>
            <h3>BATTERY</h3>
          </div>
        </div>
        <div className="btn-start">
            <a href="#Featured">START</a>
        </div>
      </div>
    </section>
  )
}

export default Home