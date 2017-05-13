import React, { Component, PropTypes } from 'react'
import ScrollMagic from 'scrollmagic'
import TweenMax from 'TweenMax'
import BackgroundImage from '../BackgroundImage'
import projectData from '../../Data/Projects'
import segmentData from '../../Data/LandingPageSegments'
import Segment from '../../Components/Segment'
import BackToTop from '../../Components/BackToTop'
import './index.css'

const timeline = (element, subscenes) => {
  if (!subscenes) return TweenMax.to(element, 1)

  const internalTimeline = new TweenMax.TimelineMax()

  const computedStyle = window.getComputedStyle(element)

  const containerHeight = parseInt(computedStyle.height, 10)

  const containerWidth = parseInt(computedStyle.width, 10)

  subscenes.forEach((subscene, index) => {
    const elementHeight = window.parseInt(window.getComputedStyle(element.children[index + 1]).height, 10)

    if (subscene.scrollTo) {
      const scale = subscene.scrollTo.scale || 2
      const { x, y } = subscene.scrollTo
      const offsetY = containerHeight / scale < Math.abs(y) ? Math.sign(y) * containerHeight / scale : y
      const offsetX = containerWidth / scale < Math.abs(x) ? Math.sign(x) * containerWidth / scale : x
      internalTimeline.to(element.children[0], 1, {
        scale,
        x: offsetX,
        y: offsetY
      })
    }
    internalTimeline.to(element.children[index + 1], 1, {
      y: -containerHeight * (subscene.offsetMultiplier / 10) || -elementHeight
    })
    internalTimeline.to(element.children[index + 1], 1, { y: -containerHeight - elementHeight })
  })

  return internalTimeline
}

export default class ProjectDetails extends Component {
  static propTypes = {
    routeParams: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.boundElements = []
    this.controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    })
    let projectIndex = 0
    const project = projectData.find((project, index) => {
      if (project.slug === this.props.routeParams.slug) {
        projectIndex = index
        return true
      } else {
        return false
      }
    })
    this.state = {
      project,
      projectIndex
    }
  }

  playVideo (element) {
    // Start the video after a short delay
    window.setTimeout(() => element.play(), 1000)
  }

  bindElement = (element, scene) => {
    // Don't rebind elements several times
    if (!element || ~this.boundElements.indexOf(element.id)) return
    this.boundElements.push(element.id)

    new ScrollMagic.Scene({
      triggerElement: element,
      duration: scene.subscenes ? screen.height * 3 * scene.subscenes.length : screen.height / 2
    })
      .setPin(element)
      .setTween(timeline(element, scene.subscenes))
      .addTo(this.controller)
  }

  renderScene = (scene, index) => {
    const { simple, image, subscenes, backgroundPosition, backgroundSize } = scene

    return (
      <div
        key={index}
        id={`scene-${index}`}
        className='container-large project-details__segment-container'
        ref={(element) => {
          this.bindElement(element, scene)
        }}
      >
        <BackgroundImage
          src={image}
          style={{
            backgroundSize: backgroundSize || (simple ? 'auto 100%' : 'cover'),
            backgroundPosition: backgroundPosition || (simple ? null : 'center center')
          }}
          className='project-details__segment-image'
        />
        {subscenes && subscenes.map(this.renderSubscene)}
      </div>
    )
  }

  renderSubscene = (sceneText, index) => {
    const { textClass, title, subtitle, video } = sceneText

    return (
      <div
        key={index}
        className={`project-details__segment-text ${textClass}`}
      >
        {title
          ? <h1 className='project-details__segment-title'>{title}</h1>
          : null
        }
        {video
          ? <video
            src={video.url}
            className='project-details__segment-video'
            width={300}
            controls={false}
            ref={this.playVideo}
            loop
            muted
          />
          : null
        }
        {subtitle
          ? <p className='project-details__segment-subtitle'>{subtitle}</p>
          : null
        }
      </div>
    )
  }

  renderProjectPreviews = () => {
    const { projectIndex } = this.state

    const previousIndex = (projectIndex - 1 + projectData.length) % projectData.length

		const nextIndex = (projectIndex + 1 + projectData.length) % projectData.length

    const previousProjectSlug = projectData[previousIndex].slug
    const nextProjectSlug = projectData[nextIndex].slug

    let previousProject = null
    let nextProject = null

    segmentData.forEach((segment) => {
      const segmentLink = segment.linkTo.replace('/project/', '')
      if (segmentLink === previousProjectSlug) {
        previousProject = segment
      } else if (segmentLink === nextProjectSlug) {
        nextProject = segment
      }
    })

    return (
      <div className='row row--clear-margin'>
        {this.renderProjectPreview(previousProject)}
        {this.renderProjectPreview(nextProject)}
      </div>
    )
  }

  renderProjectPreview (segment) {
    return (
      <Segment
        {...segment}
        halfWidth
      />
    )
  }

  render () {
    const { project: { title, type, logo, scenes, description, backgroundColor } } = this.state
    const titles = title.split('\n')

    return (
      <div className='container-large' style={{ backgroundColor }}>
        <div className='container row project-details__heading'>
          <div className='row col-sm-8'>
            <h3 className='col-xs-12 project-details__type'>{type}</h3>
            {titles.map((text, index) => (<h1 className='col-xs-12 project-details__title' key={index} style={{ marginBottom: index + 1 === titles.length ? '10rem' : 0 }}>{text}</h1>))}
            <p className='project-details__description col-xs-12'>{description}</p>
          </div>
          {logo
              ? <div className='col-sm-4 end-xs'>
                <img src={logo} alt='project logo' />
              </div>
              : null
          }
        </div>
        {scenes.map(this.renderScene)}
        {this.renderProjectPreviews()}
        <BackToTop />
      </div>
    )
  }
}
