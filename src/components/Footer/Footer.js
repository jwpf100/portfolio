import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../utilities/fontawsome'
import TextAnchor from '../TextAnchor'

import { footerContact } from '../../pagesInput/heroContact'

const footerArray = footerContact
console.log(footerArray)

const ContentBlock = ({ id, children, className, color, navBarMargin }) => (
  <footer id={id} className={[className].join(' ')}>
    <div className="container">
      <div className="row content text-center">
        <div className="col">
          {footerArray.map((item, index) => (
            <TextAnchor
              key={index}
              bs="round-icons"
              href={item.href}
              phone={item.phone}
            >
              <FontAwesomeIcon
                icon={
                  item.faIconAlt
                    ? [item.faIconAlt[0], item.faIconAlt[1]]
                    : [item.faIcon[0], item.faIcon[1]]
                }
                size="2x"
              />
            </TextAnchor>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

const StyledContentBlock = styled(ContentBlock)`
  background-color: #3f3f3f;
  padding: 20px 0;
  .content {
  }
  .round-icons {
    background-color: #707070;
    padding: 0.5rem;
    display: inline-flex;
    align-items: center;
    border-radius: 100%;
    margin: 0.5rem;
    @media (min-width: 542px) {
      padding: 0.75rem;
      margin: 0.5rem 1rem;
    }
    @media (min-width: 768px) {
      padding: 0.75rem;
      margin: 0.5rem 2rem;
    }
  }
`

export default StyledContentBlock

ContentBlock.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  navBarMargin: PropTypes.bool,
  color: PropTypes.bool,
}

ContentBlock.defaultProps = {
  children: '',
  className: '',
}
