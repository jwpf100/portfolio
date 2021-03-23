import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import ProjectImage from '../ProjectImage'
import TextAnchor from '../TextAnchor'

const TextImageSection = ({ id, children, className, image }) => (
  <div className={['row', className].join(' ')}>
    <div className="col-lg-6 mt-3 mb-4 mb-lg-0">
      <h2 className="text-uppercase text-pf-med mb-4">Essential Coaching</h2>
      <p className="lead">
        Responsive website created for local small business.
      </p>
      <p>
        A small business website, designed to provide information, contact
        details and booking options for Essential Coaching, a small coaching
        business.
      </p>
      <ul>
        <li>Built with Gatsby 3.0 for React</li>
        <li>Styled using Bootstrap, Emotion and SASS</li>
        <li>Continuous integration with Github Actions</li>
        <li>Storybook is used for visual testing</li>
        <li>Hosted on Amazon S3 with CloudFront CDN</li>
      </ul>
      <TextAnchor href="https://www.essentialcoaching.co.uk">
        <p className="">www.essentialcoaching.co.uk</p>
      </TextAnchor>
    </div>
    <div className="col-lg-6">
      <ProjectImage image={image} />
    </div>
  </div>
)

const StyledTextImageSection = styled(TextImageSection)``

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
