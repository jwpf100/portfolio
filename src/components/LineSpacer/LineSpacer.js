import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Overlay = ({ className }) => (
  <section className={className}>
    <div />
  </section>
)

const StyledOverlay = styled(Overlay)`
  div {
    margin: 0 auto;
    width: 50%;
    border-top: solid 1px #707070;
    opacity: 0.5;
    margin-top: 50px;
    @media (max-width: 768px) {
      margin-top: 25px;
    }
  }
`

export default StyledOverlay

Overlay.propTypes = {
  className: PropTypes.string,
}

Overlay.defaultProps = {}
