import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { stack as Menu } from 'react-burger-menu'
import './index.css'

export default class Sidenav extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className='sidenav visible-xs'>
        <Menu className='sidenav__list'>
          <div>
            <Link className='sidenav__list-item' to='/home'>Home</Link>
          </div>
          <div>
            <Link className='sidenav__list-item' to='/about'>About</Link>
          </div>
          <div>
            <Link className='sidenav__list-item' to='/contact'>Contact</Link>
          </div>
        </Menu>
      </div>
    )
  }
}
