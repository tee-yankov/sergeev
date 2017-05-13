import React, { Component, PropTypes } from 'react'
import moment from 'moment-timezone'
import './index.css'

export default class Clock extends Component {
  static propTypes = {
    timezone: PropTypes.string.isRequired
  }

  getTimeTransforms () {
    const { timezone } = this.props
    const now = moment().tz(timezone)
    const template = (angle) => `translate(-50%, -100%) rotate(${angle}deg)`
    const secondsAngle = now.seconds() * 6
    const minutesAngle = now.minutes() * 6
    const hoursAngle = (now.hours() * 30) + (now.minutes() / 2)
    const zone = moment.tz.zone(timezone)
    return {
      hours: { transform: template(hoursAngle) },
      minutes: { transform: template(minutesAngle) },
      seconds: { transform: template(secondsAngle) },
      abbr: zone.abbr(moment()),
      offset: zone.offset(moment())
    }
  }

  componentDidMount () {
    window.setInterval(() => this.forceUpdate(), 1000)
  }

  render () {
    const timeTransforms = this.getTimeTransforms()
    const offset = timeTransforms.offset / 60 > 0 ? '+' + (timeTransforms.offset / 60) : timeTransforms.offset /60

    return (
      <div className='clock__body'>
        <div className='clock__hours' style={timeTransforms.hours} />
        <div className='clock__minutes' style={timeTransforms.minutes} />
        <div className='clock__seconds' style={timeTransforms.seconds} />
        <span className='clock__label'>{offset} {timeTransforms.abbr}</span>
      </div>
    )
  }
}
