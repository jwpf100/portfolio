import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import TextAnchor from '../TextAnchor'

const Navbar = ({ sticky, className }) => (
  <header className={className}>
    <nav
      id="navbar"
      className={[
        'navbar navbar-expand-md navbar-light bg-white border-bottom',
        sticky ? 'fixed-top' : '',
      ].join(' ')}
    >
      <div className="container-xl bg-white">
        <a className="navbar-brand text-pf-flowers" href="#">
          Joe Fletcher
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-me">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

const StyledNavbar = styled(Navbar)`
  position: absolute;
  width: 100%;
  z-index: 1000;

  nav.navbar {
    background: #fff;
    padding-top: 0;
    padding-bottom: 0;
    -webkit-box-shadow: 0 1px 0 #ddd;
    box-shadow: 0 1px 0 #ddd;
  }
  button.navbar-toggler {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  nav.navbar a.nav-link {
    top: 1px;
    position: relative;
    color: #707070;
    border-bottom: 1px solid transparent;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  nav.navbar a.nav-link.active,
  nav.navbar a.nav-link:hover,
  nav.navbar a.nav-link:focus {
    color: #3f3f3f;
  }
  nav.navbar a.nav-link.active {
    border-bottom: 1px solid #333;
  }
  nav.navbar .navbar-brand {
    padding-top: 0;
    padding-bottom: 0;
  }
  div {
    background-color: white;
  }
`

export default StyledNavbar

Navbar.propTypes = {
  className: PropTypes.string,
  sticky: PropTypes.bool,
}

Navbar.defaultProps = {}
