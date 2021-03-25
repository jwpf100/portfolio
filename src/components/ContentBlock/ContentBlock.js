import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ContentBlock = ({ id, children, className, color, navBarMargin }) => (
  <section id={id} className={[className].join(' ')}>
    <div className="container">{children}</div>
  </section>
)

const StyledContentBlock = styled(ContentBlock)`
  margin-top: ${props => (props.navBarMargin ? '58px' : '0px')};
  background-color: ${props => (props.color ? '#ddd' : 'white')};
  padding-top: 100px;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    padding-top: 75px;
    padding-bottom: 50px;
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
