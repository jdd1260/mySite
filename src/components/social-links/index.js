import React from 'react'

import links from './text'

const SocialLinks = () => (
  <ul className="social">
    {links.map(link => (
      <li key={link.url}>
        <a href={link.url}>
          <link.icon />
        </a>
      </li>
    ))}
  </ul>
)

export default SocialLinks
