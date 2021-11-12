import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom'
import { Row, Col, Nav, NavItem } from 'reactstrap'
import PropTypes from 'prop-types'
import aptLogo from './assets/logo-apt-white'

class Header extends React.Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props
    return (
      <React.Fragment>
        <header className='LargeHeader transparentHeader'>
          <div className='header-left can-shrink'>
            <div className='logo-div menuItemAlign verticallyCenterFlexContent'>
              <img src={aptLogo} alt='Apartment logo' className='aptLogo' />
              <div
                className='logo-link clickable inheritColor fill-white'
                title=''
                role='button'
                aria-label='Homepage Link'
                tabIndex='0'
              ></div>
            </div>
          </div>
          <div className='header-right'>
            <div className='item Phone menuItemClickable menuItemAlign verticallyCenterFlexContent'>
              <div className='contents hoverWrapper'>
                <div className='text menuItemClickable'>
                  <a href='tel:1-844-759-7732' title='Call Customer Service'>
                    <span> </span>
                    <span className='phoneNumberDigits'>1-888-555-1212</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='menuItemClickable verticallyCenterFlexContent menuItemAlign clickable withHoverShim'>
              <a
                className='inheritColor dropdownWidget'
                href='/houses-near-me'
                aria-expanded='false'
                title='Buy Menu'
                role='button'
              >
                Apartments ▾
              </a>
            </div>
            <div className='menuItemClickable verticallyCenterFlexContent menuItemAlign clickable withHoverShim'>
              <a
                className='inheritColor dropdownWidget'
                href='/selling-options'
                aria-expanded='false'
                title='Sell Menu'
                role='button'
              >
                Homes ▾
              </a>
            </div>
            <div className='menuItemClickable verticallyCenterFlexContent menuItemAlign clickable withHoverShim'>
              <a
                className='inheritColor dropdownWidget'
                href='/mortgage-rates?context=3'
                aria-expanded='false'
                title='Mortgage Menu'
                role='button'
              >
                Condos ▾
              </a>
            </div>
            <div
              tabIndex='0'
              role='button'
              className='RealEstateAgentsLink inline-block menuItemClickable verticallyCenterFlexContent menuItemAlign clickable withHoverShim'
              id='topMenuRealEstateAgentsLink'
              aria-expanded='false'
            >
              <a
                className='menuItemClickable dropdownWidget'
                href='/real-estate-agents'
              >
                Townhouses ▾
              </a>
            </div>
            <a
              className='topMenuFeedMenuLink inline-block menuItemClickable verticallyCenterFlexContent menuItemAlign clickable'
              href='/feed'
              title='Feed'
              role='button'
            >
              Blog{' '}
            </a>
            <div className='margin-horiz-medium'>
              <button
                type='button'
                className='button Button tertiary-alt compact headerMenuButton'
                tabIndex='0'
                role='button'
              >
                <span>Log In</span>
              </button>
            </div>
            <div className='joinLinkWrapper'>
              <button
                type='button'
                className='button Button tertiary compact headerMenuButton'
                tabIndex='0'
                role='button'
              >
                <span>Sign Up</span>
              </button>
            </div>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Header
