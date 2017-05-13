import React, { PropTypes } from 'react'
import BackgroundImage from '../BackgroundImage'
import './index.css'

const Award = (props) => (
  <div className='award center-xs start-sm'>
    <div className='award__thumbnail'>
      <BackgroundImage className='award__thumbnail-image' src={props.image} />
    </div>
    <span className='award__year'>
      {props.year}
    </span>
    <h2 className='award__name'>
      {props.name}
    </h2>
    <p className='award__description'>
      {props.description}
    </p>
    <span className='award__link'>
      <a href={props.link.href} target='_blank'>{props.link.text}</a>
    </span>
  </div>
)

Award.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}

export default Award
