export default {
  slug: 'sobieski',
  title: 'Sobieski',
  type: 'Advertising Campaign',
  description: 'An award winning campaign for the famous polish vodka.',
  backgroundColor: '#FFFFFF',
  scenes: [
    {
      image: require('../../Assets/Projects/Sobieski/High Res/Sobieski vodka 01.jpg?type=blurred'),
      subscenes: [
        {
          scrollTo: { x: -300, y: -300 },
          offsetMultiplier: 8,
          subtitle: 'Orders vodka and start drinking quietly, enjoying the vibe of the place.',
          textClass: 'col-sm-offset-1 col-sm-3 text--left'
        }, {
          scrollTo: { x: 600, y: 200 },
          offsetMultiplier: 6,
          subtitle: 'After the second drink the warm fluffy feeling of a coccoon forming around it slowly starts to occur.',
          textClass: 'col-sm-offset-1 col-sm-3 text--left'
        }
      ]
    }, {
      image: require('../../Assets/Projects/Sobieski/High Res/Sobieski vodka 02.jpg?type=blurred'),
      subscenes: [
        {
          scrollTo: { x: -600, y: 150 },
          offsetMultiplier: 8,
          textClass: 'col-sm-offset-1 col-sm-3'
        }, {
          scrollTo: { x: -200, y: -300 }
        }
      ]
    }, {
      image: require('../../Assets/Projects/Sobieski/High Res/Sobieski vodka 03.jpg?type=blurred'),
      subscenes: [
        {
          scrollTo: { x: 400, y: 200 }
        }, {
          scrollTo: { x: -200, y: -300 }
        }
      ]
    }, {
      image: require('../../Assets/Projects/Sobieski/High Res/Sobieski vodka 04.jpg?type=blurred'),
      subscenes: [
        {
          offsetMultiplier: 7,
          textClass: 'col-sm-offset-1 col-sm-3',
          subtitle: 'The Sobieski Vodka "The Metamorphosis" is an award-winning series presented in a nationwide campaign. Themed parties all across Bulgaria, several Metamorphosis dance mix albums, and hundreds of promos followed the print campaign.',
        }, {
          scrollTo: { x: -400, y: 300 },
          textClass: 'col-sm-offset-8 col-sm-3 text--right',
          subtitle: 'Themed parties all across Bulgaria, several Metamorphosis dance mix albums, and hundreds of promos followed the print campaign.',
        }, {
          scrollTo: { x: 0, y: -200 }
        }
      ]
    }, {
      image: require('../../Assets/Projects/Sobieski/High Res/Sobieski vodka 05.jpg?type=blurred'),
      subscenes: [
        {
          textClass: 'col-sm-offset-1 col-sm-3',
          offsetMultiplier: 8,
          subtitle: 'All costumes, including the butterfly wings and coccoons were made especially for the production and were constantly used on location for the duration of the campaign.'
        }, {
          scrollTo: { x: -200, y: 300 }
        }, {
          scrollTo: { x: 200, y: 0 },
          offsetMultiplier: 9,
          textClass: 'col-sm-offset-1 col-sm-3',
          subtitle: 'The production included shooting on 5 different locations and took over 2 months to produce.'
        }
      ]
    }
  ]
}
