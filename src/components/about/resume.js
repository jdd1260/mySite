import React from 'react'

import { aboutMe } from './text'

const About = () => (
  <div className="row about">
    <div className="">
      <h1>
        <span>About Me</span>
      </h1>
    </div>
    <div>
      <div className="">
        {aboutMe}
      </div>
    </div>
  </div>
)

export default About
