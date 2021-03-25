import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import ProjectImage from '../ProjectImage'
import MainButton from '../MainButton'
import TextAnchor from '../TextAnchor'
import LineSpacer from '../LineSpacer'

const TextImageSection = ({
  id,
  children,
  className,
  image,
  title,
  lead,
  text,
  bullets,
  links,
}) => (
  <div className={['row', className].join(' ')}>
    <div className="col-lg-6 mb-4 mb-lg-0">
      <h2 className="text-uppercase text-pf-med mb-4">{title}</h2>
      <p className="lead">{lead}</p>
      {text.map(para => (
        <p>{para}</p>
      ))}
      <ul>
        {bullets.map(bullet => (
          <li>{bullet}</li>
        ))}
      </ul>
    </div>
    <div className="col-lg-6 py-2 d-flex align-items-center">
      <ProjectImage image={image} />
    </div>
    <div className="pt-3 text-muted text-center">
      {links.map(link => (
        <TextAnchor href={link.link}>
          <MainButton label={link.title} className="" primary />
        </TextAnchor>
      ))}
    </div>
    <LineSpacer />
  </div>
)

const StyledTextImageSection = styled(TextImageSection)`
  padding-top: 50px;

  @media (max-width: 768px) {
    padding-top: 25px;
  }
`

export default StyledTextImageSection

TextImageSection.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.string,
  lead: PropTypes.string,
  text: PropTypes.array,
  bullets: PropTypes.array,
  links: PropTypes.array,
}

TextImageSection.defaultProps = {
  children: '',
  className: '',
}
