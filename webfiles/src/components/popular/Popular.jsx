import React from 'react'
import './popular.css'
import Car1 from '..//popular/car1-popular.png'
import Car2 from '..//popular/car2-popular.png'
import Car3 from '..//popular/car3-popular.png'
import Car4 from '..//popular/car4-popular.png'
import Car5 from '..//popular/car5-popular.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = 
[
{
  modelo: 'Turbo S',
  auto: Car1,
  precio: '$175.000'
},
{
  modelo: 'Taycan',
  auto: Car2,
  precio: '$114.500'
},
{
  modelo: 'Turbo S Cross',
  auto: Car3,
  precio: '$150.900'
},
{
  modelo: 'Boxster 718',
  auto: Car4,
  precio: '$125.700'
},
{
  modelo: 'Cayman',
  auto: Car5,
  precio: '$128.900'
},
]

const Popular = () => {
  return (
    <section className="section section-popular" id='Popular'>
      <div className="container container-popular">
        <div className="container-titles">
          <h1>Choose Your Electric Car</h1>
          <h2>Of The Porsche Brand</h2>
        </div>
        <div className="container-cards-popular">
          <Swiper className="container-pos-cards"
            modules={[ Pagination ]}
            spaceBetween={24}
            slidesPerView= 'auto'
            loop={true}
            grabCursor={true}
            pagination={{ clickable: true,
              dynamicBullets: true}}>
            {
              data.map (({modelo, auto, precio}, index) => {
                return(
                  <SwiperSlide key={index} className="card">
                      <h1>Porsche</h1>
                      <h2>{modelo}</h2>
                    <img src={auto} alt="" />
                    <div className="container-info-card">
                      <a href="#"><i className='fas fa-clock'></i>3.7 Sec</a>
                      <a href="#"><i className='fas fa-chart-line'></i>356 km/h</a>
                      <a href="#" className='special'><i className='fas fa-charging-station'></i>Electric</a>
                    </div>
                    <h3>{precio}</h3>
                    <div className="container-btn">
                      <button><i className='fas fa-cart-shopping'></i></button>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}

/*{
              data.map (({modelo, auto, precio}, index) => {
                return(
                  <SwiperSlide key={index} className="card">
                      <h1>Porsche</h1>
                      <h2>{modelo}</h2>
                    <img src={auto} alt="" />
                    <div className="container-info-card">
                      <a href="#"><i className='fas fa-clock'></i>3.7 Sec</a>
                      <a href="#"><i className='fas fa-chart-line'></i>356 km/h</a>
                      <a href="#" className='special'><i className='fas fa-charging-station'></i>Electric</a>
                    </div>
                    <h3>{precio}</h3>
                    <div className="container-pedido">
                    <a href="#" className='pedido'><i className='fas fa-envelope'></i></a>
                    </div>
                  </SwiperSlide>
                )
              })
            }*/

export default Popular