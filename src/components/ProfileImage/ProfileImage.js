import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

const ProfileImage = ({ className, image }) => (
  <GatsbyImage
    className={['rounded-circle d-block mx-auto', className].join(' ')}
    image={image}
    alt="Joe Fletcher"
  />
)

const StyledProfileImage = styled(ProfileImage)`
  max-width: 350px;
  max-height: 350px;
`

export default StyledProfileImage

ProfileImage.propTypes = {
  className: PropTypes.string,
}

ProfileImage.defaultProps = {}
