import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const HeroText = ({ children, className }) => (
  <div className={className}>
    <div className="container clearfix">
      <div className="row">
        <div className="col-lg-8 col-md-12 mx-auto">
          <p className="italic">Oh, hello, nice to meet you!</p>
          <h1>I am B&amp;W Landing page or portfolio Theme.</h1>
          <p className="italic">
            I am a ready to be your portfolio, telling your stories and short
            presentations.
          </p>
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
}

@media (max-width: 767.98px) {
  .content {
    position: relative;
    padding: 80px 0;
    top: 0;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
`

export default StyledHeroText

HeroText.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
}

HeroText.defaultProps = {}
