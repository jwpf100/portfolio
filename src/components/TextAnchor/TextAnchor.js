import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const TextAnchor = ({ children, href, className }) => (
  <a
    type="link"
    className={[className, ''].join(' ')}
    target="_blank"
    rel="noreferrer"
    href={href}
  >
    {children}
  </a>
)

const StyledTextAnchor = styled(TextAnchor)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #ce3f32;
  }
`

export default StyledTextAnchor

TextAnchor.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
  href: PropTypes.string,
}

TextAnchor.defaultProps = {}
