import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Overlay = ({ className }) => <div className={className} />

const StyledOverlay = styled(Overlay)`
  width: 100%;
  height: 64px;
`

export default StyledOverlay

Overlay.propTypes = {
  className: PropTypes.string,
}

Overlay.defaultProps = {}
