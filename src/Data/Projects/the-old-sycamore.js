export default {
  slug: 'the-old-sycamore',
  title: 'The Old Sycamore',
  type: 'Advertising Campaign',
  description: 'Creating outstanding series for several years in a row for the same client is a challenge that constantly keeps us on our toes. We love it.',
  backgroundColor: '#FFFFFF',
  scenes: [
    {
      image: require('../../Assets/Projects/The Old Sycamore/High Res/The old sycamore 01.jpg?type=blurred'),
      backgroundPosition: 'center center',
      subscenes: [
        {
          scrollTo: { x: 800, y: 500, scale: 4 },
          offsetMultiplier: 9,
          subtitle: 'One of the most important assets of any restaurant, apart from the food, is the vibe it has. It is a mixture of ambience, decor, staff, etc. The proper mood and atmosphere of a place is among its most precious merits.',
          textClass: 'col-sm-offset-8 col-sm-3 text--right'
        }, {
          scrollTo: { x: 0, y: -400, scale: 4 }
        }, {
          scrollTo: { x: 1800, y: -800, scale: 4 }
        }
      ]
    }, {
      image: require('../../Assets/Projects/The Old Sycamore/High Res/The old sycamore 02.jpg?type=blurred'),
      backgroundPosition: 'center center',
      subscenes: [
        {
          scrollTo: { x: -200, y: -100 },
          offsetMultiplier: 8,
          subtitle: 'In order to enhance that feeling I decided to depict this project like an oil painting.',
          textClass: 'col-sm-offset-1 col-sm-3 text--left'
        }, {
          scrollTo: { x: 1000, y: -600, scale: 3 },
          offsetMultiplier: 8,
          subtitle: 'Dark shadows, loaded with saturated colors, groups of merry people, animals and moody lights were the key for creating the proper feel for this campaign.',
          textClass: 'col-sm-offset-1 col-sm-3 text--left'
        }, {
          scrollTo: { x: 0, y: -600, scale: 3 }
        }
      ]
    }, {
      image: require('../../Assets/Projects/The Old Sycamore/High Res/The old sycamore 03.jpg?type=blurred'),
      backgroundPosition: 'center center',
      subscenes: [
        {
          scrollTo: { x: 300, y: -300 },
          offsetMultiplier: 8,
          textClass: 'col-sm-offset-8 col-sm-3 text--right',
          subtitle: 'Every set was shot on location with elaborate lighting settings and complex directing.'
        }, {
          scrollTo: { x: -150, y: 100, scale: 3 },
          offsetMultiplier: 8,
          textClass: 'col-sm-offset-8 col-sm-3 text--right',
          subtitle: 'The studio took care for of casting, costumes, and retouching.'
        }, {
          scrollTo: { x: -800, y: -100, scale: 3 }
        }
      ]
    }
  ]
}
