import React, { Component, PropTypes } from 'react'
import lecturesData from '../../Data/Lectures'
import './index.css'

export default class Article extends Component {
  static propTypes = {
    articleIndex: PropTypes.number.isRequired
  }

  state = {
    articleIndex: this.props.articleIndex
  }

  renderArticlePreviews = () => {
    const { articleIndex } = this.state

    const previousIndex = (articleIndex - 1 + lecturesData.length) % lecturesData.length

		const nextIndex = (articleIndex + 1 + lecturesData.length) % lecturesData.length

    return (
			<div className='article-previews'>
				{this.renderArticlePreview(previousIndex, 'previous')}
				{this.renderArticlePreview(nextIndex, 'next')}
			</div>
    )
  }

  renderArticlePreview = (articleIndex, position) => {
    const article = lecturesData[articleIndex]

    return (
      <div className={`article-preview article-preview--${position}`}>
        <a onClick={() => this.openArticlePreview(articleIndex)}>
          <img className='article-preview__image' src={article.image.original} alt={article.name} />
        </a>
      </div>
    )
  }

  openArticlePreview = (articleIndex) => {
    this.setState({ articleIndex })
    // Reset scroll position to top
    window.document.querySelector('.ReactModal__Content').scrollTop = 0
  }

  renderParagraph (paragraph, index) {
    const { text, image, video } = paragraph
    return (
      <div
        key={index}
        className='paragraph'
      >
        {video
            ? <iframe width='100%' height='500px' src={`https://www.youtube.com/embed/${video}`} />
            : null
        }

        {text
            ? <p className='paragraph__text'>{text}</p>
            : null
        }

        {image && image.original
            ? <img src={image.original} alt='paragraph' className='paragraph__image' />
            : null
        }
      </div>
    )
  }

  render () {
    const article = lecturesData[this.state.articleIndex]
    const { name, image, paragraphs } = article

    return (
      <div
        className='article start-xs'
      >
        {this.renderArticlePreviews()}
        <div className='article__content'>
          <div className='article__image-container'>
            <img src={image.original} className='article__image' alt='publication' />
          </div>
          <h1 className='article__title'>{name}</h1>
          <div className='article__text'>
            {paragraphs && paragraphs.map(this.renderParagraph)}
          </div>
        </div>
      </div>
    )
  }
}
