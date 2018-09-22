import React from 'react'
import Link from 'gatsby-link'

import '../assets/css/main.css'

import Header from '../components/Header'
import About from '../components/about'
import Resume from '../components/Resume'
import Portfolio from '../components/portfolio'
import Footer from '../components/footer'

const IndexPage = () => (
  <div>
    <Header />
    <About />
    <Resume />
    <Portfolio />
    <Footer />
  </div>
)

export default IndexPage
