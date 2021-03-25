import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const TimeLineItem = ({ key, className, year, title, company, text }) => (
  <li key={key} className={[className, 'ml-3 pb-4'].join(' ')}>
    <div className="timeline-arrow" />
    <div className="row g-0">
      <div className="col-lg-5 mb-4 mb-lg-0 px-3">
        <p className="font-weight-bold mb-2 text-pf-flowers text-small">
          {year}{' '}
        </p>
        <h2 className="h5 mb-0 text-uppercase">{title}</h2>
        <p className="text-small mb-0">{company}</p>
        <span className="small text-muted">United Kingdom</span>
      </div>
      <div className="col-lg-7">
        {text.map(item => (
          <p className="text-muted">{item}</p>
        ))}
      </div>
    </div>
  </li>
)

const StyledTimeLineItem = styled(TimeLineItem)`
  margin: 20px 0;

  /* Timeline item circle marker */
  &:before {
    content: ' ';
    background: #ce3f32;
    display: inline-block;
    position: absolute;
    left: 10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 3px solid #fff;
    z-index: 400;
  }
  h2 {
    font-weight: 800;
  }
`

export default StyledTimeLineItem

TimeLineItem.propTypes = {
  className: PropTypes.string,
  year: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  text: PropTypes.array,
  key: PropTypes.number,
}

TimeLineItem.defaultProps = {}
