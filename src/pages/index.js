import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import HeroImageFull from '../components/HeroImageFull'
import TestContent from '../components/TestContent'
import HeroText from '../components/HeroText'

// data

// markup
const IndexPage = ({ data }) => {
  const heroImages = [
    {
      ...data.mobileImage.childImageSharp.fluid,
      media: `(max-width: 540px)`,
    },
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 541px)`,
    },
  ]

  return (
    <Layout>
      <HeroImageFull sources={heroImages}>
        <HeroText />
      </HeroImageFull>
      <TestContent />
    </Layout>
  )
}

export default IndexPage

// Select Images using pagequery below.

export const pageQuery = graphql`
  query {
    mobileImage: file(relativePath: { eq: "hero/hero-mobile-80.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 540, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    desktopImage: file(relativePath: { eq: "hero/hero-desktop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
IndexPage.propTypes = {
  data: PropTypes.object,
}

IndexPage.defaultProps = {
  data: {},
}
