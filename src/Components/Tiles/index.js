import React, { Component } from 'react'
import AnimatedButton from '../AnimatedButton'
import _lecturesData from '../../Data/Lectures'
import TileContainer from '../../Containers/Tile'
import './index.css'

const lecturesData = _lecturesData.map((a, originalIndex) => ({...a, originalIndex}))

export default class Tiles extends Component {
  state = {
    visibleTiles: lecturesData.slice(0, 3),
    head: 0
  }

  loadMore = () => {
    const { visibleTiles } = this.state

    const lastIndex = visibleTiles.slice(-1)[0].originalIndex

		const newHead = (lastIndex + 1 + lecturesData.length) % lecturesData.length

    let newLectures = lecturesData.slice(newHead - 1, newHead + 2)

    if (newLectures.length < 3) {
      newLectures = newLectures.concat(lecturesData.slice(0, 3 - newLectures.length))
    }

    this.setState({
      visibleTiles: newLectures,
      head: newHead
    }, () => console.log(this.state))
  }

  render () {
    const { visibleTiles } = this.state

    return (
      <div className='container-fluid'>
        <ul className='tile-list row'>
          {visibleTiles.map((lecture, index) => (
            <li
              key={index}
              className='tile-list__item col-sm-4 col-xs-12'>
              <TileContainer
                articleIndex={lecture.originalIndex}
                {...lecture}
              />
            </li>
          ))}
        </ul>
        <div className='center-xs row'>
          <AnimatedButton onClick={this.loadMore}>Load More</AnimatedButton>
        </div>
      </div>
    )
  }
}
