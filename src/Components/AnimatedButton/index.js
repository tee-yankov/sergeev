import React, { PropTypes, Component } from 'react'
import './index.css'

class AnimatedButton extends Component {
  static propTypes = {
    color: PropTypes.string,
    secondaryColor: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    style: PropTypes.object
  }

  static defaultProps = {
    color: '#444444',
    secondaryColor: '#FFFFFF',
    onClick: () => {}
  }

  render () {
    const { props } = this
    return (
      <button type={props.type} onClick={props.onClick} disabled={props.disabled} className='btn' style={{ color: props.color, borderColor: props.color, ...props.style }}>
        <span className='btn__text' style={props.style ? { top: '50%', transform: 'translateY(-50%)' } : {}}>
          {props.children}
          <span className='btn__overlay-text' style={{ color: props.secondaryColor }}>{props.children}</span>
        </span>
      </button>
    )
  }
}

export default AnimatedButton
