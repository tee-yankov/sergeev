const publicUrl = process.env.PUBLIC_URL

export default {
  slug: 'capitol',
  title: 'Capitol',
  type: 'Placeholder',
  description: 'Placeholder',
  backgroundColor: '#FFFFFF',
  logo: publicUrl + '',
  scenes: [
    {
      image: require('../../Assets/Projects/Capitol/Capitol_01.jpg?type=blurred'),
      subscenes: [
        {
          offsetMultiplier: 5,
          subtitle: 'The award-winning calendar I made for Art Hotel Capitol was a truly conceptual work and it has been widely celebrated by many since its creation.',
          textClass: 'col-sm-offset-8 col-sm-3 text--right'
        }, {
          scrollTo: { x: -500, y: 300 },
          offsetMultiplier: 7,
          subtitle: 'Incorporating forms of art into typical hotel occupations came as the perfect solution to represent the artistic nature of the hotel\'s interior, services and vibe.',
          textClass: 'col-sm-offset-1 col-sm-3 text--left text--dark'
        }
      ]
    }, {
      image: require('../../Assets/Projects/Capitol/Capitol_02.jpg?type=blurred'),
      subscenes: [
        {
          offsetMultiplier: 6,
          textClass: 'col-sm-offset-1 col-sm-3 text--left',
          subtitle: 'The forms of art - visual arts, dance, theatre, music, literature and architecture - were cleverly insinuated into the daily tasks of different employees in the hotel.'
        }
      ]
    }, {
      image: require('../../Assets/Projects/Capitol/Capitol_03.jpg?type=blurred'),
      backgroundPosition: 'center top',
      subscenes: [
        {
          scrollTo: { x: 0, y: 100 },
          offsetMultiplier: 6,
          textClass: 'col-sm-offset-1 col-sm-3 text--left text--dark',
          subtitle: 'The shoots took place at the hotel itself and the project took over a month to develop.'
        }
      ]
    }
  ]
}
