import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SkillBadge = ({ icon, name, children, className }) => (
  <div
    className={[className, 'col-6 col-md-3 col-lg-2 p-3 text-center'].join(' ')}
  >
    <FontAwesomeIcon icon={icon} size="3x" />
    <h6>{name}</h6>
  </div>
)

const StyledSkillBadge = styled(SkillBadge)`
  h6 {
    margin-top: 1rem;
  }
`

export default StyledSkillBadge

SkillBadge.propTypes = {
  children: PropTypes.array,
  icon: PropTypes.object,
  name: PropTypes.string,
  className: PropTypes.string,
}

SkillBadge.defaultProps = {}
