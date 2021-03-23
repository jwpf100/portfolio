import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

const ProfileImage = ({ className, image }) => (
  <GatsbyImage
    className={['d-block mx-auto', className].join(' ')}
    image={image}
    alt="Project"
  />
)

const StyledProfileImage = styled(ProfileImage)`
  width: 300px;
  height: auto;
`

export default StyledProfileImage

ProfileImage.propTypes = {
  className: PropTypes.string,
}

ProfileImage.defaultProps = {}
