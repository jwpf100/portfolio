import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ProjectsSection = ({ id, children, className, image }) => (
  <div className={['', className].join(' ')}>
    <h2 className="text-uppercase text-pf-flowers lined mb-4">Projects</h2>
    {children}
  </div>
)

const StyledProjectsSection = styled(ProjectsSection)`
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

export default StyledProjectsSection

ProjectsSection.propTypes = {
  children: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.object,
}

ProjectsSection.defaultProps = {
  children: '',
  className: '',
}
