import { useState } from 'react';
import { ReactComponent as Hamburger } from '../../assets/img/hamburger.svg';
import { ReactComponent as Brand } from '../../assets/img/home-logo.svg';
import './navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="margin">
      <div className="container">
        <div className="home-logo">
          <Brand />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/candidate">CANDIDATE</a>
            </li>
            <li>
              <a href="/whatwedo">WHAT WE DO</a>
            </li>
            <li>
              <a href="/clients">CLIENTS</a>
            </li>
            <li>
              <a href="/blog">BLOG</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </div>
        {/* <buthrefn>LOG IN</buthrefn>
        <buthrefn>REGISTER</buthrefn> */}
      </div>
      <div className='bar'>
      </div>
    </nav>
  )
}

export default Navbar;