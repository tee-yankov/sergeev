import React, { Component, PropTypes } from 'react'
import Article from '../../Components/Article'
import BackgroundImage from '../../Components/BackgroundImage'
import './index.css'

export default class Tile extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    articleIndex: PropTypes.number.isRequired,
    openModal: PropTypes.func.isRequired
  }

  openArticle = () => {
    const { articleIndex } = this.props

    this.props.openModal(<Article
      articleIndex={articleIndex}
    />)
  }

  render () {
    const { name, image } = this.props

    return (
      <div onClick={this.openArticle} className='tile'>
        <BackgroundImage src={image} className='tile__image' />
        <div className='tile__subtext'>
          <span>{name}</span><a style={{ cursor: 'pointer' }} target='_blank'>Find out more.</a>
        </div>
      </div>
    )
  }
}
