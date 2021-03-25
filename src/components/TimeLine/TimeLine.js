import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const TimeLine = ({ className, children }) => (
  <ul className={[className, ''].join(' ')}>{children}</ul>
)

const StyledTimeLine = styled(TimeLine)`
  /* Timeline holder */

  list-style-type: none;
  position: relative;
  padding-left: 1.5rem;

  /* Timeline vertical line */
  &:before {
    content: ' ';
    background: #ededed;
    display: inline-block;
    position: absolute;
    left: 16px;
    width: 4px;
    height: 100%;
    z-index: 400;
    border-radius: 1rem;
  }

  &:after {
    content: ' ';
    background: #ce3f32;
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 9px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 3px solid #fff;
    z-index: 400;
  }
`

export default StyledTimeLine

TimeLine.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

TimeLine.defaultProps = {}
