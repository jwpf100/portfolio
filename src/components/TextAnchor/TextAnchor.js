import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const TextAnchor = ({ children, phone, bs, href, className }) => {
  if (!phone) {
    return (
      <a
        type="link"
        className={[className, bs, ''].join(' ')}
        target="_blank"
        rel="noreferrer"
        href={href}
      >
        {children}
      </a>
    )
  }
  return (
    <a
      type="link"
      className={[className, bs, ''].join(' ')}
      rel="noreferrer"
      href={href}
    >
      {children}
    </a>
  )
}
const StyledTextAnchor = styled(TextAnchor)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #ce3f32;
  }
`

export default StyledTextAnchor

TextAnchor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  phone: PropTypes.bool,
  bs: PropTypes.string,
}

TextAnchor.defaultProps = {}
