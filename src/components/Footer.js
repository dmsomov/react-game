import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
      <a href="https://rs.school/js/">
        <img 
          src={'https://rs.school/images/rs_school_js.svg'}
          alt='logoRS' />
      </a>
      <a href="https://github.com/dmsomov/">Link Github</a>
      <span>2021</span>
        
      </footer>
    )
  }
}

export default Footer;