import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Row, Col, Nav, NavItem } from 'reactstrap'
import PropTypes from 'prop-types'

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
        <header className='container-fluid'>
          <div className='hamburger'></div>
          <div className='hamburger'></div>
          <div className='hamburger'></div>
          <Row>
            <Col className='col-3'>Column</Col>
            <Col className='col-auto'>
              <Nav>
                <NavItem>Item 1</NavItem>
                <NavItem>Item 2</NavItem>
                <NavItem>Item 3</NavItem>
              </Nav>
            </Col>
            <Col className='col-3'>Column</Col>
          </Row>
        </header>
      </React.Fragment>
    )
  }
}

export default Header
