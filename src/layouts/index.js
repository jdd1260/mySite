import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { siteMetadata } from '../../gatsby-config'
import GA from './ga'
import favicon from '../assets/favicon.ico'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="author" description={siteMetadata.author} />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <title>{siteMetadata.title}</title>
      <link rel="icon" href={favicon} type="image/x-icon" />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-87288968-1"
      />
      <script>{GA}</script>
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
