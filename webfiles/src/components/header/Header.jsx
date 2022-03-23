import React from 'react'
import './header.css'

const Header = () => {
  return (
    <section className="section-header">
      <div className="container container-header">
        <div className="container-icon">
          <a href="#"><i class="fas fa-car"></i>Elecar</a>
        </div>
        <ul className='list-nav'>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Popular">Popular</a>
          </li>
          <li>
            <a href="#Featured">Featured</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Header