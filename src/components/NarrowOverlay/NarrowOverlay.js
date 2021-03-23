import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const NarrowOverlay = ({ className }) => <div className={className} />

const StyledNarrowOverlay = styled(NarrowOverlay)`
  position: absolute;
  width: 40%;
  height: 100%;
  left: 0;
  top: 0;
  background: black;
  z-index: 3;
  opacity: 0.4;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export default StyledNarrowOverlay

NarrowOverlay.propTypes = {
  className: PropTypes.string,
}

NarrowOverlay.defaultProps = {}
