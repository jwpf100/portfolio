import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import ProfileImage from '../ProfileImage'

const TextImageSection = ({ id, children, className, image }) => (
  <div className={['row', className].join(' ')}>
    <div className="col-lg-6 mb-4 mb-lg-0">
      <h2 className="text-uppercase text-pf-flowers lined mb-4">About Me</h2>
      <p className="lead">
        Front End Developer with background in E-Commerce <wbr /> and Finance
      </p>
      <p>Driven and capable software developer with an eye for detail. </p>
      <p> Passionate about tech, a strong communicator and team player.</p>

      <p>
        8 years of leadership roles in E-Commerce have provided me with
        extensive commercial knowledge, the skills to manage multiple varied
        stakeholders and a keen understanding of front-end user experience.{' '}
      </p>

      <p>
        {' '}
        Now after intensive study, and hands-on experience creating custom
        websites, I am ready to apply my unique skillset to help businesses
        achieve their goals.{' '}
      </p>
    </div>
    <div className="col-lg-6">
      <ProfileImage image={image} />
    </div>
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
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.object,
}

TextImageSection.defaultProps = {
  children: '',
  className: '',
}
