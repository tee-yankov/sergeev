import React, { Component } from 'react'
import AnimatedButton from '../../Components/AnimatedButton'
import Clock from '../../Components/Clock'
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
        <div className='row'>
          <div className='col-sm-6'>
            <Clock timezone='Europe/Sofia' />
          </div>
          <div className='col-sm-6'>
            <Clock timezone='America/New_York' />
          </div>
        </div>
      </div>
    )
  }
}