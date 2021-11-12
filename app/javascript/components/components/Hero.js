import React from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   NavLink,
// } from 'react-router-dom'
// import { Row, Col, Nav, NavItem } from 'reactstrap'
// import PropTypes from 'prop-types'
import hero1 from '../assets/hero2-min'

class Hero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className='LeftClearBgHeroWidget home-hero-section no-cta-section'>
          <div className='home-hero-outer'>
            <div className='home-hero-inner-transition-group'>
              <div
                className='home-hero-inner'
                style={{ backgroundImage: `url(${hero1})` }}
              >
                <div className='tabSection fluid-gutter'>
                  <h1 className='brandText'>FindMyHome</h1>
                  <h3 className='brandText'>Apartment Finder</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Hero
