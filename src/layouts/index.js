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


// styled components
const Container = styled.div`
  margin: 1rem;
`

const HeaderContainer = styled.div`

`

// components
function Header () {
  return (
    <HeaderContainer>
      <div>
        <h1>
          <Link to="/">
            the next base
          </Link>
        </h1>
      </div>
    </HeaderContainer>
  )
}



const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet
      title="the-next-base"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Header />

    <div>
      {children()}
    </div>

  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

/* Global Site Styles
 * used for importing fonts and setting up sizes
 */
injectGlobal`
  *, *:before, *:after {
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
  }

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
      margin: 0;

      font-size: 1.6em;
      line-height: 1.6;
      font-weight: 400;
      font-family: 'Haas Grot Text', 'Helvetica', 'Arial', sans-serif;
      color: #222;
      webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      text-rendering: optimizeLegibility;
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
