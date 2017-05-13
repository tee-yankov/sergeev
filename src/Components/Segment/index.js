import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import AnimatedButton from '../AnimatedButton'
import BackgroundImage from '../BackgroundImage'
import './index.css'

export default class Segment extends Component {
  static propTypes = {
    backgroundImage: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    halfWidth: PropTypes.bool,
    backgroundPosition: PropTypes.string,
    backgroundSize: PropTypes.string,
    placeholderImage: PropTypes.string,
    isExplicit: PropTypes.bool
  }

  render () {
    const { title, backgroundImage, halfWidth, color, backgroundPosition, backgroundSize, linkTo, secondaryColor, isExplicit } = this.props

    return (
      <BackgroundImage
        className={`segment ${halfWidth ? 'col-md-6 col-xs-12' : 'col-xs-12'}`}
        src={backgroundImage}
        style={{
          backgroundPosition: backgroundPosition || 'center 20%',
          backgroundSize: backgroundSize || 'cover',
          backgroundAttachment: !halfWidth ? 'fixed' : null,
          willChange: 'transform',
          backgroundRepeat: 'none'
        }}
      >
        <div className={`segment__text-container ${halfWidth ? 'segment__text-container--half-width' : ''}`}>
          {isExplicit
              ? <span style={{ color, textTransform: 'uppercase' }}>Mature Content</span>
              : null
          }
          <h1 style={{ color }} className='segment__title'>{title}</h1>
          <Link
            to={linkTo}
            className='segment__link'
          >
            <AnimatedButton
              color={color}
              secondaryColor={secondaryColor}
            >View Project</AnimatedButton>
          </Link>
        </div>
      </BackgroundImage>
    )
  }
}
