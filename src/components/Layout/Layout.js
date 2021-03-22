import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

// Add Fonts

const Layout = ({ children, className }) => (
  <>
    <main className={className}>{children}</main>
  </>
)

const StyledLayout = styled(Layout)`
  background-attachment: fixed;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default StyledLayout
