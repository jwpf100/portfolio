import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import ContactBadge from '../ContactBadge'

import { mainContact } from '../../pagesInput/heroContact'

const ContactSection = ({ id, children, className, image }) => (
  <div className={['', className].join(' ')}>
    <h2 className="text-uppercase text-pf-flowers lined mb-4">Contact</h2>
    <div className={['row', className].join(' ')}>
      {mainContact.map((contact, index) => (
        <ContactBadge
          key={index}
          faIcon={contact.faIcon}
          title={contact.title}
          text={contact.text}
          classNameSpecific={contact.classNameSpecific}
          href={contact.href}
          phone={contact.phone}
        />
      ))}
    </div>
  </div>
)

const StyledContactSection = styled(ContactSection)`
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

export default StyledContactSection

ContactSection.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.object,
}

ContactSection.defaultProps = {
  children: '',
  className: '',
}
