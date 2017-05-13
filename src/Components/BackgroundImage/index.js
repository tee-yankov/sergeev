import React, { Component, PropTypes } from 'react'

export default class BackgroundImage extends Component {
  static propTypes = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    getRef: PropTypes.func
  }

  constructor (props) {
    super(props)

    const { src } = props

    this.state = {
      currentImage: typeof src === 'object' ? src.placeholder : src
    }
  }

  componentDidMount () {
    const { src } = this.props

    if (typeof src === 'object') {
      const image = new Image()

      image.addEventListener('load', () => {
        this.setState({ currentImage: src.original })
      })

      image.src = src.original
    }
  }

  render () {
    const { style, children, className, getRef } = this.props
    const { currentImage } = this.state

    return (
      <div
        className={className}
        ref={getRef}
        style={{
          ...style,
          backgroundImage: `url("${currentImage}")`
        }}
      >
        {children}
      </div>
    )
  }
}
