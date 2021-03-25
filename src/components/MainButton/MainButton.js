import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import styled from '@emotion/styled'

const MainButton = ({ primary, className, label, href, bs, small }) => {
  const mode = primary
    ? 'btn btn-outline-pf-flowers mainbutton mx-2 d-inline-block'
    : 'btn btn-outline-gray mx-2 d-inline-block'

  return (
    <button type="button" className={[mode, className, bs].join(' ')}>
      {label}
    </button>
  )
}

const StyledMainButton = styled(MainButton)`
  color: #ce3f32;
  &:hover {
    color: white;
  }
`

export default StyledMainButton

MainButton.propTypes = {
  href: PropTypes.string,
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * additional bootstrap classes
   */
  bs: PropTypes.string,
  /**
   * additional bootstrap classes
   */
  small: PropTypes.bool,
  /**
   * additional bootstrap classes
   */
  className: PropTypes.string,
}

MainButton.defaultProps = {
  primary: false,
  bs: '',
}
