import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import TimeLine from '../TimeLine'
import TimeLineItem from '../TimeLineItem'

import inputData from '../../pagesInput/experience'

const { experienceArray } = inputData

const ExperienceSection = ({ id, children, className, image }) => (
  <div className={['', className].join(' ')}>
    <h2 className="text-uppercase text-pf-flowers lined mb-4">Experience</h2>
    <TimeLine>
      {experienceArray.map((item) => (
        <TimeLineItem
          year={item.year}
          title={item.title}
          company={item.company}
          text={item.text}
        />
      ))}
    </TimeLine>
  </div>
)

const StyledExperienceSection = styled(ExperienceSection)`
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

export default StyledExperienceSection

ExperienceSection.propTypes = {
  children: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.object,
}

ExperienceSection.defaultProps = {
  children: '',
  className: '',
}
