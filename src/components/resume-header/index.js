import React from 'react'

import text from './text'

const Footer = () => (
  <div id="resume-header">
    <div className="row">
      <div className="twelve columns text-center">
        <div className="title">{text.name}</div>
        {text.title} <br />
        {text.location} <br />
        <a href={text.website}> {text.website} </a>
      </div>
    </div>
  </div>
)

export default Footer
