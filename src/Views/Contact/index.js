import React, { Component } from 'react'
import AnimatedButton from '../../Components/AnimatedButton'
import Clock from '../../Components/Clock'
import GoogleMap from '../../Components/GoogleMap'
import './index.css'

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    errors: [],
    success: false
  }

  send = (e) => {
    e.preventDefault()

    const { name, email, message } = this.state

    const errors = []

    if (!name) {
      errors.push('Hey, we won\'t know what to call you.')
    }

    if (!email) {
      errors.push('Oh look, we won\'t know where to send back our answer.')
    }

    if (!message) {
      errors.push('Don\'t you want to tell us something?')
    }

    this.setState({ errors })

    if (errors.length) {
      return
    }

    window.open(`mailto:studio@sergeevstudio.com?subject=Request&body=${message}`)

    this.setState({
      name: '',
      email: '',
      message: '',
      success: true
    })
  }

  handleInput (name) {
    return (e) => this.setState({ [name]: e.target.value })
  }

  render () {
    const { errors, name, email, message, success } = this.state

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <h2 className='contact__text--title'>Have an interesting project in mind?</h2>
            <h2 className='contact__text--title'>We'd love to learn more</h2>
          </div>
          <form onSubmit={this.send} className='row row--clear-margin col-sm-6'>
            <div className='col-xs-12'>
              <input onChange={this.handleInput('name')} value={name} className='contact__input' type='text' placeholder='Name' />
            </div>
            <div className='col-xs-12'>
              <input onChange={this.handleInput('email')} value={email} className='contact__input' type='email' placeholder='E-Mail' />
            </div>
            <div className='col-xs-12'>
              <textarea onChange={this.handleInput('message')} value={message} className='contact__input' cols='30' rows='8' placeholder='Message'></textarea>
            </div>
            {errors.map((error, index) => (<p key={index} className='contact--error'>{error}</p>))}
            {success
            ? <p className='contact--success'>Thank you for your interest! We'll get back to you as soon as we can.</p>
            : null
            }
            <div className='col-xs-12 contact__submit-container'>
              <AnimatedButton style={{ padding: '24px' }} disabled={success} type='submit'>Send your message</AnimatedButton>
            </div>
          </form>
        </div>
        <div className='row' style={{ marginBottom: '10rem' }}>
          <GoogleMap
            className='contact__clock'
            center={{ lat: 40.731786, lng: -73.977425 }}
            marker={{ lat: 40.7285109, lng: -73.9592147 }}
            zoom={14}
          >
            <Clock
              timezone='America/New_York'
              label='UTC -5'
              style={{ marginBottom: '3rem' }}
              location={{ lat: 40.7285109, lng: -73.9592147 }}
            />
            <p className='text-bold'>New York</p>
            <p>Greenpoint Terminal Warehouse</p>
            <p>67 West St, Brooklyn</p>
            <p>NY 11222, United States</p>
            <p>+1-929-239-6646</p>
          </GoogleMap>
          <GoogleMap
            className='contact__clock'
            center={{ lat: 42.663670, lng: 23.311322 }}
            marker={{ lat: 42.6621421, lng: 23.3170278 }}
            zoom={15}
          >
            <Clock
              timezone='Europe/Sofia'
              label='UTC +3'
              style={{ marginBottom: '3rem' }}
              location={{ lat: 42.6621421, lng: 23.3170278 }}
            />
            <p className='text-bold'>Sofia</p>
            <p>Vitosha Business Center</p>
            <p>47 Cherni vrah Blvd</p>
            <p>1407, Sofia, Bulgaria</p>
            <p>+359-888-496020</p>
          </GoogleMap>
        </div>
      </div>
    )
  }
}
