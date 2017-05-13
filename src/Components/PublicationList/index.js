import React, { Component } from 'react'
import Publication from '../Publication'
import publicationData from '../../Data/PublicationData.js'
import AnimatedButton from '../../Components/AnimatedButton'
import './index.css'

export default class PublicationsList extends Component {
  state = {
    amountVisible: 5
  }

  loadMore = () => {
    this.setState({ amountVisible: this.state.amountVisible + 2 })
  }

  render () {
    const { amountVisible } = this.state
    const visiblePublications = publicationData.slice(0, amountVisible)
    return (
      <div className='container'>
        <ul className='publication-list'>
          {visiblePublications.map((publication, index) => (
            <li className='publication-list__item' key={index}>
              <Publication
                {...publication}
              />
            </li>
          ))}
        </ul>
        <div className='center-xs row'>
          <AnimatedButton onClick={this.loadMore} disabled={!publicationData[amountVisible]}>Load More</AnimatedButton>
        </div>
      </div>
    )
  }
}
