import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons'
import {
  faGithub,
  faLinkedin,
  faWordpress,
  faWordpressSimple,
} from '@fortawesome/free-brands-svg-icons'

import TextAnchor from '../TextAnchor'

const HeroContactIcons = ({ children, className }) => (
  <div className={[className, 'row'].join('')}>
    <div className="col-md-6 d-flex justify-content-around">
      <TextAnchor href="https://github.com/jwpf100">
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </TextAnchor>
      <TextAnchor href="mailto:joseph.fletcher100@gmail.com">
        <FontAwesomeIcon icon={faEnvelopeRegular} size="3x" />
      </TextAnchor>
      <TextAnchor href="https://www.linkedin.com/in/joseph-fletcher-25a69818/">
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </TextAnchor>
      <TextAnchor href="http://3.140.151.152/wordpress/">
        <FontAwesomeIcon icon={faWordpressSimple} size="3x" />
      </TextAnchor>
    </div>
  </div>
)

const StyledHeroContactIcons = styled(HeroContactIcons)``

export default StyledHeroContactIcons

HeroContactIcons.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
}

HeroContactIcons.defaultProps = {}
