import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import inlineSvgConverter from '../Util/inline-svg-converter'
import logoSVG from '../../Assets/logo-symbol.svg'
import './index.css'


const inlineSvg = inlineSvgConverter(logoSVG)

export default class Navigation extends Component {
  static propTypes = {
    inverted: PropTypes.bool,
    absolute: PropTypes.bool
  }

  render () {
    const { inverted, absolute } = this.props

    return (
      <div className='container'>
        <div style={{ position: absolute ? 'absolute' : 'relative' }} className={`row row--clear-margin navigation${inverted ? '--inverted' : ''}`}>
          <div className='col-sm-6 col-xs-12 center-xs start-sm'>
            <Link to='/home'>
              <div className='navigation__logo-container' dangerouslySetInnerHTML={{ __html: inlineSvg }} />
            </Link>
          </div>
          <div className='col-xs-12 center-xs col-sm-6 end-sm hidden-xs'>
            <ul className='navigation__list row middle-xs'>
              <li className='col-xs-4 navigation__list-item'>
                <Link
                  className='navigation__link'
                  activeClassName='navigation__link--active'
                  to='/home'>
                  Work
                </Link>
              </li>
              <li className='col-xs-4 navigation__list-item'>
                <Link
                  className='navigation__link'
                  activeClassName='navigation__link--active'
                  to='/about'>
                  About
                </Link>
              </li>
              <li className='col-xs-4 navigation__list-item'>
                <Link
                  className='navigation__link'
                  activeClassName='navigation__link--active'
                  to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
