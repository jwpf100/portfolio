import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const HeroText = ({ children, className }) => (
  <div className={className}>
    <div className="container clearfix">
      <div className="row">
        <div className="col-md-8 col-xxl-7 text-white text-center text-md-start">
          <h1
            className="text-uppercase display-2 font-weight-bold mb-0"
            css={{ fontWeight: 800 }}
          >
            Joe <span className="text-pf-flowers">Fletcher</span>
          </h1>
          <h2 className="h4 font-weight-normal mb-5">
            Web <br /> Developer
          </h2>
          {children}
        </div>
      </div>
    </div>
  </div>
)

const StyledHeroText = styled(HeroText)`
  position: relative;
  width: 100%;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  z-index: 10;

  br {
    display: none;
  }

  @media (max-width: 768px) {
    .content {
      position: relative;
      padding: 80px 0;
      top: 0;
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }

    h1 {
      font-weight: 800;
    }
  }

  @media (min-width: 2450px) {
    br {
      display: inline;
    }
  }
`

export default StyledHeroText

HeroText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

HeroText.defaultProps = {}
