import React from 'react'
import SocialLinks from '../social-links'
import { bannerTitle, bannerText } from './text'

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">{bannerTitle}</h1>
      <h3>
        <span>{bannerText}</span>
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
)

export default Banner
