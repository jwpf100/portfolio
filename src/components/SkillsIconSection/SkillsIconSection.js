import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import '../../utilities/fontawsome'

import SkillBadge from '../SkillBadge'

const SkillsIconSection = ({ children, className }) => (
  <div className={[className, ''].join('')}>
    <div className="row d-flex flex-wrap justify-content-around">
      <SkillBadge icon={['fab', 'html5']} name="HTML 5" />
      <SkillBadge icon={['fab', 'css3-alt']} name="CSS 3" />
      <SkillBadge icon={['fab', 'js']} name="JavaScript" />
      <SkillBadge icon={['fab', 'react']} name="React" />
      <SkillBadge icon={['fab', 'bootstrap']} name="Bootstrap" />
      <SkillBadge icon={['fab', 'sass']} name="SASS" />
      <SkillBadge icon={['fab', 'aws']} name="AWS" />
      <SkillBadge icon={['fab', 'git']} name="git" />
      <SkillBadge icon={['fab', 'github']} name="github" />
      <SkillBadge icon={['fab', 'node']} name="Node.js & Express" />
      <SkillBadge icon={['fas', 'database']} name="MongoDB MySQL GraphQL" />
      <SkillBadge icon={['fas', 'tools']} name="ESLint Mocha Docker" />
    </div>
  </div>
)

const StyledSkillsIconSection = styled(SkillsIconSection)`
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export default StyledSkillsIconSection

SkillsIconSection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

SkillsIconSection.defaultProps = {}
