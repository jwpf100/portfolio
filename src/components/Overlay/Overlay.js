import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Overlay = ({ className }) => <div className={className} />

const StyledOverlay = styled(Overlay)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: black;
  z-index: 2;
  opacity: 0.2;
`

export default StyledOverlay

Overlay.propTypes = {
  className: PropTypes.string,
}

Overlay.defaultProps = {}
