import React from 'react'
import SocialLinks from '../social-links'

import { FaChevronCircleUp } from 'react-icons/lib/fa'

import text from './text'

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright">
          <li>
            &copy; Copyright {text.copyrightYear} {text.copyrightName}
          </li>
          <li>
            Design by{' '}
            <a title="Styleshout" href="http://www.styleshout.com/">
              Styleshout
            </a>
          </li>
          <li>
            Developed in React ⚛️ by{' '}
            <a href="http://www.amanhimself.me">{text.author}</a>
          </li>
        </ul>
      </div>

      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
