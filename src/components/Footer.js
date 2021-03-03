import React, { Component } from 'react'
import './Footer.css'
import logo from '../components/img/img.png'

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
      <a href="https://rs.school/js/">
        <img 
          src={logo}
          alt='logoRS' />
      </a>
      <a href="https://github.com/dmsomov/">Link Github</a>
      <span>2021</span>
        
      </footer>
    )
  }
}

export default Footer;