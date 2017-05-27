import React, { Component, PropTypes } from 'react'
import moment from 'moment-timezone'
import sunCalc from 'suncalc'
import './index.css'

export default class Clock extends Component {
  static propTypes = {
    timezone: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }).isRequired
  }

  componentDidMount () {
    this.interval = window.setInterval(() => this.forceUpdate(), 1000)
  }

  componentWillUnmount () {
    window.clearInterval(this.interval)
  }

  getTimeTransforms () {
    console.log('calc')
    const { timezone, location: { lat, lng } } = this.props
    const now = moment().tz(timezone)
    const template = (angle) => `translate(-50%, -100%) rotate(${angle}deg)`
    const secondsAngle = now.seconds() * 6
    const minutesAngle = now.minutes() * 6
    const hoursAngle = (now.hours() * 30) + (now.minutes() / 2)
    const zone = moment.tz.zone(timezone)
    const isDay = sunCalc.getPosition(now.toDate(), lat, lng).altitude > 0
    return {
      hours: { transform: template(hoursAngle), borderColor: isDay ? '#3D3D3D' : '#FFFFFF' },
      minutes: { transform: template(minutesAngle), borderColor: isDay ? '#3D3D3D' : '#FFFFFF' },
      seconds: { transform: template(secondsAngle) },
      abbr: zone.abbr(moment()),
      offset: zone.offset(moment()),
      period: now.format('A'),
      isDay
    }
  }

  render () {
    const timeTransforms = this.getTimeTransforms()
    const offset = timeTransforms.offset / 60 > 0 ? '+' + (timeTransforms.offset / 60) : timeTransforms.offset /60

    return (
      <div style={{ ...this.props.style, backgroundColor: timeTransforms.isDay ? '#FFFFFF' : '#181818' }} className='clock__body'>
        <div className='clock__hours' style={timeTransforms.hours} />
        <div className='clock__minutes' style={timeTransforms.minutes} />
        <div className='clock__seconds' style={timeTransforms.seconds} />
        <span style={{ color: timeTransforms.isDay ? '#444444' : '#FAFAFA' }} className='clock__label'>{this.props.label || `${offset} ${timeTransforms.abbr}`}</span>
      </div>
    )
  }
}
