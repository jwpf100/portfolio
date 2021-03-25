import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'

// Add Fonts
import '@fontsource/montserrat'
import '@fontsource/open-sans'

const Layout = ({ children, className }) => (
  <>
    {/* <Helmet>
      <style>{`body {position: relative;}`}</style>
    </Helmet> */}
    <main data-bs-spy="scroll" data-bs-target="#navbar" className={className}>
      {children}
    </main>
  </>
)

const StyledLayout = styled(Layout)`
  background-attachment: fixed;
  position: relative;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default StyledLayout
