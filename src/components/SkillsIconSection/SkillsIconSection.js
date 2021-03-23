import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope as faEnvelopeSolid,
  faDatabase,
  faTools,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons'
import {
  faGithub,
  faLinkedin,
  faWordpress,
  faWordpressSimple,
  faHtml5,
  faCss3,
  faCss3Alt,
  faJs,
  faNode,
  faBootstrap,
  faGit,
  faGitAlt,
  faGithubAlt,
  faGithubSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

import SkillBadge from '../SkillBadge'

const SkillsIconSection = ({ children, className }) => (
  <div className={[className, ''].join('')}>
    <div className="row d-flex flex-wrap justify-content-around">
      <SkillBadge icon={faHtml5} name="HTML 5" />
      <SkillBadge icon={faCss3Alt} name="CSS 3" />
      <SkillBadge icon={faJs} name="JavaScript" />
      <SkillBadge icon={faReact} name="React" />
      <SkillBadge icon={faGit} name="git" />
      <SkillBadge icon={faGithub} name="github" />
      <SkillBadge icon={faBootstrap} name="Bootstrap" />
      <SkillBadge icon={faNode} name="Node.js & Express" />
      <SkillBadge icon={faDatabase} name="MongoDB MySQL GraphQL" />
      <SkillBadge icon={faTools} name="ESLint Mocha Docker" />
    </div>
  </div>
)

const StyledSkillsIconSection = styled(SkillsIconSection)`
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export default StyledSkillsIconSection

SkillsIconSection.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
}

SkillsIconSection.defaultProps = {}
