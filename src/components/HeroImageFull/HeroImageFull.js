import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'
import Overlay from '../Overlay'
import NarrowOverlay from '../NarrowOverlay'

const HeroImageFull = ({ sources, children, className }) => {
  const heroImage = sources
  return (
    <BackgroundImage
      Tag="section"
      className={['', className].join(' ')}
      fluid={heroImage}
    >
      <Overlay />
      <NarrowOverlay />
      {children}
    </BackgroundImage>
  )
}

const StyledHeroImageFull = styled(HeroImageFull)`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #111;
  min-height: 600px;
  padding: 0;
  overflow: hidden;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledHeroImageFull

HeroImageFull.propTypes = {
  sources: PropTypes.object,
  children: PropTypes.array,
  className: PropTypes.string,
}

HeroImageFull.defaultProps = {}
