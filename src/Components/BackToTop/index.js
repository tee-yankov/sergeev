import React, { Component } from 'react'
import Headroom from 'headroom.js'
import scrollToTop from '../Util/scroll-to-top'
import './index.css'

export default class BackToTop extends Component {
  bindElement = (elm) => {
    if (this.elementBound || !elm) return
    const headroom = new Headroom(elm, {
      tolerance: 10,
      offset: 500
    })
    headroom.init()
    this.elementBound = true
  }

  scrollToTop () {
    scrollToTop(1000)
  }

  render () {
    return (
      <div
        ref={this.bindElement}
        onClick={this.scrollToTop}
        className='back-to-top'
      >
        <a>Bring to top</a>
      </div>
    )
  }
}
