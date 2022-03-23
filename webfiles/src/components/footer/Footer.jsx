import React from 'react'
import './footer.css'
import Img from '..//footer/car-foot.png'
import Tesla from '..//featured/featured-logo3.png'
import Audi from '..//featured/featured-logo2.png'
import Porsche from '..//featured/featured-logo.png'
import Lambo from '..//featured/featured-logo4.png'
import Bmw from '..//footer/logo5-foot.png'
import Marca6 from '..//footer/logo6-foot.png'

const Footer = () => {
  return (
    <section className="section section-footer">
      <div className="container container-footer">
        <div className="container-info-pre-footer">
          <h1>Do You Want To Recive</h1>
          <h2>Special Offers?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae inventore libero laboriosam, soluta officiis unde voluptatibus ipsam excepturi repellendus eaque iste blanditiis cum possimus? Animi perspiciatis quaerat molestias illum ipsa?</p>
          <button>Susbcribe Now</button>
        </div>
        <div className="container-img-footer">
          <img src={Img} alt="" />
        </div>
        <div className="container-footer-final">
          <div className="container-icons">
            <img src={Tesla} alt="" />
            <img src={Audi} alt="" className='audi'/>
            <img src={Porsche} alt="" />
            <img src={Lambo} alt="" />
            <img src={Bmw} alt="" />
            <img src={Marca6} alt="" />
          </div>
          <div className="container-info-footer">
            <div className="info">
              <a href="#"><i className='fas fa-car'></i>ELecar</a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque officiis magni quas id.</p>
            </div>
            <div className="info">
              <h2>Company</h2>
              <h3>About</h3>
              <h3>Cars</h3>
              <h3>History</h3>
              <h3>Shop</h3>
            </div>
            <div className="info">
              <h2>Information</h2>
              <h3>Request a quote</h3>
              <h3>Find a dealer</h3>
              <h3>Contact us</h3>
              <h3>Services</h3>
            </div>
            <div className="info">
              <h2>Follow us</h2>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-twitter'></i>
            </div>
          </div>
          <div className="container-copy">
            <h3>Ⓒ TintaDevelopment | All Right Reserved</h3>
          </div>
          <div className="container-button-up">
            <a href="#Home"><i class="fa-solid fa-circle-arrow-up"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer