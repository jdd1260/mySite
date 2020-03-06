import React from 'react'

import '../assets/css/main.css'

import ResumeHeader from '../components/resume-header'
import Resume from '../components/Resume'

const IndexPage = () => (
  <div>
    <ResumeHeader />
    <Resume showAbout={true} />
  </div>
)

export default IndexPage
