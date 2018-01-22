import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'
import 'normalize.css'

// importing fonts
import NeueHaasGrotTextRoman_eot from "../assets/fonts/NeueHaasGrotText-55Roman-Web.eot"
import NeueHaasGrotTextRoman_woff from "../assets/fonts/NeueHaasGrotText-55Roman-Web.woff"
import NeueHaasGrotTextRoman_woff2 from "../assets/fonts/NeueHaasGrotText-55Roman-Web.woff2"
import NeueHaasGrotTextItalic_eot from "../assets/fonts/NeueHaasGrotText-56Italic-Web.eot"
import NeueHaasGrotTextItalic_woff from "../assets/fonts/NeueHaasGrotText-56Italic-Web.woff"
import NeueHaasGrotTextItalic_woff2 from "../assets/fonts/NeueHaasGrotText-56Italic-Web.woff2"
import NeueHaasGrotDispRoman_eot from "../assets/fonts/NeueHaasGrotDisp-55Roman-Web.eot"
import NeueHaasGrotDispRoman_woff from "../assets/fonts/NeueHaasGrotDisp-55Roman-Web.woff"
import NeueHaasGrotDispRoman_woff2 from "../assets/fonts/NeueHaasGrotDisp-55Roman-Web.woff2"
import NeueHaasGrotDispItalic_eot from "../assets/fonts/NeueHaasGrotDisp-56Italic-Web.eot"
import NeueHaasGrotDispItalic_woff from "../assets/fonts/NeueHaasGrotDisp-56Italic-Web.woff"
import NeueHaasGrotDispItalic_woff2 from "../assets/fonts/NeueHaasGrotDisp-56Italic-Web.woff2"

import facebookCard from "../assets/images/facebook_card.png"
import twitterCard from "../assets/images/twitter_card.png"

/*
  Layout File
  this file is the base of every page
  useful for headers & navs

  this is where global styles/font loading lives
*/


// styled components
const Container = styled.div`
  height: 100%;
`

// page component
const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet
      title="THE NEXT"
      meta={[
        { name: 'description', content: 'Graduate Design Show byYork University/Sheridan College' },
        { name: 'keywords', content: 'York University, Sheridan College, ysdn, design, york, sheridan, the next, the next gradshow' },
        { property: 'author', content: 'York University/Sheridan College Joint Program in Design' },
        { property: 'og:url', content: 'http://announcing.thenext.website' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'THE NEXT' },
        { property: 'og:description', content: 'Graduate Design Show by York University/Sheridan College' },
        { property: 'og:image', content: 'http://announcing.thenext.website' + facebookCard },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: 'THE NEXT' },
        { property: 'twitter:description', content: 'Graduate Design Show byYork University/Sheridan College' },
        { property: 'twitter:image', content: 'http://announcing.thenext.website' + twitterCard },
        { property: 'twitter:image:alt', content: 'THE NEXT' },
      ]}
    />

    {children()}

  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper


/* Global Site Styles
 * used for importing fonts and setting up sizes
 * also for default values
 * avoid using for anything else
 */
injectGlobal`
  *, *:before, *:after {
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
  }

  html {
    ${'' /* Maybe Try?  font-size: calc(1.25vw + 62.5%); */}
    font-size: calc(0.4vw + 62.5%);
    ${'' /* font-size: 62.5%; */}
    height: 100%;
  }

  body {
      margin: 0;
      height: 100%;

      font-size: 1.6em;
      line-height: 1.6;
      font-weight: 400 !important;
      font-family: 'Haas Grot Text', 'Helvetica', 'Arial', sans-serif;
      color: #222;
      webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      text-rendering: optimizeLegibility;
  }

  #___gatsby {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Haas Grot Display', 'Helvetica', 'Arial', sans-serif;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Haas Grot Text';
    src: url(${NeueHaasGrotTextRoman_eot});
    src: url('${NeueHaasGrotTextRoman_eot}?#iefix') format('embedded-opentype'),
      url('${NeueHaasGrotTextRoman_woff2}') format('woff2'),
      url('${NeueHaasGrotTextRoman_woff}') format('woff');
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'Haas Grot Text';
    src: url(${NeueHaasGrotTextRoman_eot});
    src: url('${NeueHaasGrotTextItalic_eot}?#iefix') format('embedded-opentype'),
      url('${NeueHaasGrotTextItalic_woff2}') format('woff2'),
      url('${NeueHaasGrotTextItalic_woff}') format('woff');
    font-weight: 400;
    font-style: italic;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'Haas Grot Display';
    src: url(${NeueHaasGrotDispRoman_eot});
    src: url('${NeueHaasGrotDispRoman_eot}?#iefix') format('embedded-opentype'),
      url('${NeueHaasGrotDispRoman_woff2}') format('woff2'),
      url('${NeueHaasGrotDispRoman_woff}') format('woff');
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'Haas Grot Display';
    src: url(${NeueHaasGrotDispItalic_eot});
    src: url('${NeueHaasGrotDispItalic_eot}?#iefix') format('embedded-opentype'),
      url('${NeueHaasGrotDispItalic_woff2}') format('woff2'),
      url('${NeueHaasGrotDispItalic_woff}') format('woff');
    font-weight: 400;
    font-style: italic;
    font-stretch: normal;
  }
`
