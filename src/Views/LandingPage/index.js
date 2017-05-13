import React, { Component } from 'react'
import { Link } from 'react-router'
import segmentData from '../../Data/LandingPageSegments'
import Segment from '../../Components/Segment'
import AnimatedButton from '../../Components/AnimatedButton'
import './index.css'

export default class LandingPage extends Component {
  render () {
    return (
      <div id='viewport' className='container-large row'>
        <div className='container'>
          <div className='row row--clear-margin'>
            <div className='col-sm-9 col-sm-offset-0 col-xs-10 col-xs-offset-1 quote'>
              <h2 className='quote__author'>Sergeev Studio —</h2>
              <p className='quote__body'>We focus our energy on creating the best photography and post-production for the advertising industry.</p>
            </div>
          </div>
        </div>
        {segmentData.map((segment, index) => <Segment key={index} {...segment} bindSegment={this.bindSegment} />)}
        <div className='container'>
          <div className='row row--clear-margin'>
            <div className='col-sm-9 col-sm-offset-0 col-xs-10 col-xs-offset-1 landing__bottom-text'>
              <h1>Not convinced? Learn more about the man behind the studio.</h1>
              <Link to='/about'>
                <AnimatedButton>About</AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
