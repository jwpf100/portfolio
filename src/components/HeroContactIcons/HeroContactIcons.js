import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import '../../utilities/fontawsome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { heroContact } from '../../pagesInput/heroContact'

import TextAnchor from '../TextAnchor'

const HeroContactIcons = ({ children, className }) => (
  <div className={[className, 'row'].join('')}>
    <div className="col-md-6 d-flex justify-content-around">
      {heroContact.map((item, index) => (
        <TextAnchor key={index} href={item.href}>
          <FontAwesomeIcon icon={[item.faIcon[0], item.faIcon[1]]} size="3x" />
        </TextAnchor>
      ))}
    </div>
  </div>
)

const StyledHeroContactIcons = styled(HeroContactIcons)``

export default StyledHeroContactIcons

HeroContactIcons.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

HeroContactIcons.defaultProps = {}
