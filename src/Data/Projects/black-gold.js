export default {
  slug: 'black-gold',
  title: 'Black Gold',
  type: 'Calendar',
  description: 'An award winning calendar for motor oil company.',
  backgroundColor: '#FFFFFF',
  scenes: [
    {
      image: require('../../Assets/Projects/Black Gold/High Res/Black gold 01.jpg?type=blurred'),
      subscenes: [
        {
          scrollTo: { x: -600, y: 400, scale: 2.5 }
        }, {
          scrollTo: { x: 800, y: -300, scale: 2.5 }
        }
      ]
    }, {
      image: require('../../Assets/Projects/Black Gold/High Res/Black gold 02.jpg?type=blurred'),
      subscenes: [
        {
          scrollTo: { x: 0, y: 500, scale: 2.5 }
        }, {
          scrollTo: { x: -300, y: -300, scale: 3 }
        }
      ]
    }, {
      image: require('../../Assets/Projects/Black Gold/High Res/Black Gold 03.jpg?type=blurred'),
      backgroundPosition: 'center 60%',
      subscenes: [
        {
          scrollTo: { x: 0, y: -300 }
        }
      ]
    }, {
      image: require('../../Assets/Projects/Black Gold/High Res/Black Gold 04.jpg?type=blurred'),
      subscenes: [
        {
          scrollTo: { x: -400, y: 300, scale: 3 }
        }
      ]
    }, {
      image: require('../../Assets/Projects/Black Gold/High Res/Black gold 05.jpg?type=blurred'),
      subscenes: [
        {
          scrollTo: { x: 0, y: 400, scale: 2.5 }
        }
      ]
    }, {
      image: require('../../Assets/Projects/Black Gold/High Res/Black gold 06.jpg?type=blurred'),
      subscenes: [
        {
          scrollTo: { x: -200, y: 200 }
        }
      ]
    }
  ]
}
