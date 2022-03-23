import React from 'react'
import './about.css'
import Img from '..//about/img-about.jpg'

const About = () => {
  return (
    <section className="section section-about" id='About'>
      <div className="container container-about">
        <div className="container-about-gral">
          <div className="container-img-about">
            <img src={Img} alt="" />
            <div className="container-info-img">
              <h1>2.500+</h1>
              <p>Supercharges placed along popular routes</p>
            </div>
          </div>
          <div className="container-info-about">
            <h1>Machines With</h1>
            <h2>Future Technology</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur natus dolor, nulla suscipit libero possimus repellendus consectetur, maxime, hic adipisci dolore accusantium modi veritatis perspiciatis voluptatem at tenetur officia ut velit! Ab error expedita et maiores facilis nostrum, voluptatibus laudantium!</p>
            <button>Know More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About