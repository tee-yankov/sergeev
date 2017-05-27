/* global google */
import React, { Component, PropTypes } from 'react'
import mapStyles from './styles.json'
import './index.css'

export default class GoogleMap extends Component {
  static propTypes = {
    center: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }).isRequired,
    marker: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }).isRequired,
    zoom: PropTypes.number,
    children: PropTypes.any
  }

  componentDidMount () {
    this.interval = window.setInterval(() => {
      if (google && google.maps) {
        window.clearInterval(this.interval)
        this.mapInit()
      }
    }, 1000)
  }

  compnentWillUnmount () {
    window.clearInterval(this.interval)
  }

  mapInit () {
    this.map = new google.maps.Map(this.mapRoot, {
      center: this.props.center,
      zoom: this.props.zoom || 12,
      styles: mapStyles,
      disableDefaultUI: true,
      // zoomControl: false,
      // scrollwheel: false,
      // navigationControl: false,
      // mapTypeControl: false,
      // scaleControl: false,
      // draggable: false,
      // gestureHandling: 'none',
    })

    this.mapMarker = new google.maps.Marker({
      position: this.props.marker,
      map: this.map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: '#ff4949',
        strokeColor: '#ff4949',
        scale: 10
      }
    })
  }

  bindElement = (element) => {
    if (element && !this.mapRoot) {
      this.mapRoot = element
    }
  }

  removeMapElements () {
    const gmStyle = [ ...document.querySelectorAll('.gm-style') ]
    gmStyle.forEach((element) => {
      console.log(element.children)
    })
  }

  render () {
    return (
      <div style={{ position: 'relative' }} className={this.props.className}>
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} ref={this.bindElement} />
        <div style={{ position: 'absolute', pointerEvents: 'none' }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
