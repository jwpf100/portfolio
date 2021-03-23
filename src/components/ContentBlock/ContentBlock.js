import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ContentBlock = ({ id, children, className }) => (
  <section id={id} className={[className].join(' ')}>
    <div className="container">{children}</div>
  </section>
)

const StyledContentBlock = styled(ContentBlock)`
  margin-top: 58px;
  padding-top: 150px;
  padding-bottom: 150px;

  @media (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`

export default StyledContentBlock

ContentBlock.propTypes = {
  children: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
}

ContentBlock.defaultProps = {
  children: '',
  className: '',
}
