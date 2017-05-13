import React, { Component, PropTypes } from 'react'
import './index.css'

export default class Publication extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    link: PropTypes.string,
    videoUrl: PropTypes.string,
    videoThumbnail: PropTypes.string
  }

  render () {
    const { name, place, link, videoUrl, videoThumbnail, logo } = this.props

    return (
      <div className='publication'>
        {logo
            ? <div className='publication__logo' >
              <img src={logo.original} alt='publisher' />
            </div>
            : null
        }
        {videoUrl && videoThumbnail
            ? <a href={videoUrl} target='_blank' className='publication__video-thumbnail'>
              <img src={videoThumbnail} alt='video thumbnail' />
              <div className='publication__play'>
                ▶
              </div>
            </a>
            : null
        }
        <small className='publication__place'>{place}</small>
        <h2 className='publication__name'>{name}</h2>
        {link
            ? <a className='publication__link' href={link} target='_blank'>Read the full article</a>
            : null
        }
      </div>
    )
  }
}
