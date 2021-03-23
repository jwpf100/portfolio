import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import ProfileImage from '../ProfileImage'
import SkillsIconSection from '../SkillsIconSection'

const TextImageSection = ({ id, children, className, image }) => (
  <div className={['row', className].join(' ')}>
    <div className="col-lg-12 mb-4 mb-lg-0">
      <h2 className="text-uppercase text-pf-flowers lined mb-4">
        Technical Skills
      </h2>
    </div>
    <SkillsIconSection />
  </div>
)

const StyledTextImageSection = styled(TextImageSection)`
  .lined {
    display: inline-block;
    position: relative;
    padding-bottom: 0.7rem;
  }

  .lined::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 5rem;
    height: 3px;
    background: #ce3f32;
  }

  .lined::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 3rem;
    height: 2px;
    background: #ce3f32;
  }
`

export default StyledTextImageSection

TextImageSection.propTypes = {
  children: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.object,
}

TextImageSection.defaultProps = {
  children: '',
  className: '',
}
