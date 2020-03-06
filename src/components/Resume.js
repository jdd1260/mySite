import React from 'react'

import Education from './education'
import Work from './work'
import Skills from './skills'
import About from './about/resume'

const Resume = ({ showAbout }) => (
  <section id="resume">
    <div className="row">
      <div className="four columns left-side">
        { showAbout && <About/> }
        <Skills />
      </div>
      <div className="eight columns">
        <Work />
        <Education />
      </div>
    </div>
  </section>
)

export default Resume
