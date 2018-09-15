import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/lib/fa'

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.linkedin.com/in/joel-d-0095912b/">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/moeweiler_pack">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://github.com/jdd1260">
        <FaGithub />
      </a>
    </li>
  </ul>
)

export default SocialLinks
