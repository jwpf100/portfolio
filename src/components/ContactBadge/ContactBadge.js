import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextAnchor from '../TextAnchor'
import '../../utilities/fontawsome'

const ContactBadge = ({
  faIcon,
  title,
  text,
  classNameSpecific,
  phone,
  href,
  children,
  className,
}) => {
  console.log(faIcon)
  console.log(faIcon[0])
  console.log(faIcon[1])
  return (
    <div className={[className, 'col-lg-3 col-sm-6 mb-4 mb-lg-0'].join(' ')}>
      <TextAnchor
        bs="px-4 py-2 py-sm-5 text-center shadow-sm d-block text-anchor"
        href={href}
        phone={phone}
      >
        <FontAwesomeIcon
          className={['icon mb-4'].join(' ')}
          icon={[faIcon[0], faIcon[1]]}
          size="3x"
        />
        <h4 className="contact-item-title h5 text-uppercase">{title}</h4>
        <p className={['text-break mb-0', classNameSpecific].join(' ')}>
          {text}
        </p>
      </TextAnchor>
    </div>
  )
}

const StyledContactBadge = styled(ContactBadge)`
  .text-small {
    @media (min-width: 542px) {
      font-size: 0.7rem;
    }
  }
  color: #707070;
  transition: all 0.3s;
  p {
    font-size: 0.9rem;
  }
  .reset-anchor {
    color: inherit;
    text-decoration: none;
  }
  .text-anchor {
    background: #fff;
    position: relative;
    transition: all 0.4s;
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 4px;
      left: 4px;
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      background: none;
      border: 2px solid #fff;
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      opacity: 0;
      transition: all 0.3s;
    }
    &:hover {
      background: #ddd;
      color: #ce3f32;
      .icon,
      .contact-item-title,
      p {
        color: #ce3f32;
      }
      &:before {
        -webkit-transform: none;
        transform: none;
        opacity: 1;
      }
    }
  }
`

export default StyledContactBadge

ContactBadge.propTypes = {
  children: PropTypes.array,
  faIcon: PropTypes.array,
  title: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  classNameSpecific: PropTypes.string,
  phone: PropTypes.bool,
  href: PropTypes.string,
}

ContactBadge.defaultProps = {}
