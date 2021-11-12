import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Hero from './components/Hero'
// import PropTypes from 'prop-types'
class App extends React.Component {
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
        <div>
          <Header />
          <Hero />
          {logged_in && (
            <div>
              <a href={sign_out_route}>Sign Out</a>
            </div>
          )}
          {!logged_in && (
            <div>
              <a href={sign_in_route}>Sign In</a>
            </div>
          )}
          <div className='container-fluid'></div>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default App;