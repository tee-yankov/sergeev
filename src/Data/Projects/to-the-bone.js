export default {
  slug: 'to-the-bone',
  title: 'To the Bone',
  type: 'Project',
  description: 'A personal tribute to dance.',
  backgroundColor: '#FFFFFF',
  scenes: [
    {
      image: require('../../Assets/Projects/To the bone/High Res/To the bone 01.jpg?type=blurred'),
      simple: true
    }, {
      image: require('../../Assets/Projects/To the bone/High Res/To the bone 01.jpg?type=blurred'),
      backgroundPosition: 'center center',
      subscenes: [
        {
          offsetMultiplier: 9,
          subtitle: '"Find what you love the most and let it kill you", said a very wise man once. All things will kill you, but it\'s far better to be killed by a lover.',
          textClass: 'col-sm-offset-8 col-sm-3 text--right text--dark'
        }, {
          scrollTo: { x: 0, y: 0 }
        }, {
          scrollTo: { x: 400, y: -100 },
          offsetMultiplier: 7,
          subtitle: 'We all believe in something that shapes our being while we slowly approach the end. However, following this belief is what makes us feel alive and value this whole journey.',
          textClass: 'col-sm-offset-1 col-sm-3 text--left text--dark'
        }
      ]
    }, {
      image: require('../../Assets/Projects/To the bone/High Res/To the bone 02.jpg?type=blurred'),
      simple: true
    }, {
      image: require('../../Assets/Projects/To the bone/High Res/To the bone 02.jpg?type=blurred'),
      backgroundPosition: 'center 25%',
      subscenes: [
        {
          scrollTo: { x: -600, y: 300 }
        }, {
          scrollTo: { x: 650, y: -300 },
          subtitle: '"To The Bone" series is the homage I pay to the ones who dedicate their lives to creating beauty by jumping, flying, bending, crouching, crawling, and doing all of these movements that the rest of us mortals call dance.',
          textClass: 'col-sm-offset-1 col-sm-3 text--dark'
        }
      ]
    }, {
      image: require('../../Assets/Projects/To the bone/High Res/To the bone 03.jpg?type=blurred'),
      simple: true
    }, {
      image: require('../../Assets/Projects/To the bone/High Res/To the bone 03.jpg?type=blurred'),
      subscenes: [
        {
          offsetMultiplier: 8,
          textClass: 'col-sm-offset-8 col-sm-3 text--right text--dark',
          subtitle: 'It is an ongoing project in which I add new works whenever I find one of those rare moments when I am not as busy.'
        }, {
          scrollTo: { x: 100, y: 300 }
        }, {
          scrollTo: { x: 600, y: 300 },
          offsetMultiplier: 5,
          textClass: 'col-sm-offset-8 col-sm-3 text--right text--dark',
          subtitle: 'I am extremely happy that I continue finding artists willing to be part of this project. Feel free to contact me if you find yourself interested in collaborating on this.'
        }
      ]
    }
  ]
}
