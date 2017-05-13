export default {
  slug: 'drop-of-love',
  title: 'Drop of Love',
  type: 'Calendar',
  description: 'A calendar for motor oil company.',
  backgroundColor: '#FFFFFF',
  scenes: [
    {
      image: require('../../Assets/Projects/Drop of love/High Res/A drop of love 01.jpg?type=blurred'),
      simple: true
    }, {
      image: require('../../Assets/Projects/Drop of love/High Res/A drop of love 01.jpg?type=blurred'),
      backgroundPosition: 'center 25%'
   }, {
      image: require('../../Assets/Projects/Drop of love/High Res/A drop of love 02.jpg?type=blurred'),
      simple: true
    }, {
      image: require('../../Assets/Projects/Drop of love/High Res/A drop of love 02.jpg?type=blurred'),
      backgroundPosition: 'center center',
      subscenes: [
        {
          offsetMultiplier: 9,
          scrollTo: { x: -300, y: -100 },
          textClass: 'col-sm-offset-8 col-sm-3 text--right text--dark',
          subtitle: 'We all have to constantly prove ourselves to the world. Every single day, every second, forever. To people we don\'t know, to those we know, to ourselves. We strive to look polished, ready for action, flawless on the outside and the inside.',
        }
      ]
    }, {
      image: require('../../Assets/Projects/Drop of love/High Res/A drop of love 04.jpg?type=blurred'),
      simple: true
    }, {
      image: require('../../Assets/Projects/Drop of love/High Res/A drop of love 04.jpg?type=blurred'),
      backgroundPosition: 'top 25%',
      subscenes: [
        {
          scrollTo: { x: -200, y: 150 },
          offsetMultiplier: 6,
          textClass: 'col-sm-offset-8 col-sm-3 text--right text--dark',
          subtitle: 'And we take our time doing this. It may start with vanity but it can lead to inner peace. And love. You have to love yourself first in order to be loved by the world.'
        }
      ]
    }, {
      image: require('../../Assets/Projects/Drop of love/High Res/A drop of love 05.jpg?type=blurred'),
      simple: true
    }, {
      image: require('../../Assets/Projects/Drop of love/High Res/A drop of love 05.jpg?type=blurred' ),
      backgroundPosition: 'center 60%',
      subscenes: [
        {
          scrollTo: { x: 200, y: -300 },
          offsetMultiplier: 8,
          textClass: 'col-sm-offset-1 col-sm-3 text--dark',
          subtitle: 'So how does a cybernetic organism put on make up? What does she do to prove to the world once more that she is still flawless and operates in the right way? She uses the most important substance for us all: love.'
        }
      ]
    }, {
      image: require('../../Assets/Projects/Drop of love/High Res/A drop of love 06.jpg?type=blurred'),
      simple: true
    }, {
      image: require('../../Assets/Projects/Drop of love/High Res/A drop of love 06.jpg?type=blurred' ),
      subscenes: [
        {
          scrollTo: { x: 300, y: 0 },
          offsetMultiplier: 4,
          textClass: 'col-sm-offset-1 col-sm-3 text--left text--dark',
          subtitle: 'The act of cybernetic females lubricating themselves evokes many things - proper function, enhanced performance, self-love. And it is sexy as hell.'
        }
      ]
    }, {
      image: require('../../Assets/Projects/Drop of love/High Res/A drop of love 03.jpg?type=blurred'),
      simple: true
    }, {
      image: require('../../Assets/Projects/Drop of love/High Res/A drop of love 03.jpg?type=blurred' ),
      subscenes: [
        {
          scrollTo: { x: 300, y: -200 },
          offsetMultiplier: 6,
          textClass: 'col-sm-offset-1 col-sm-3 text--right text--dark',
          subtitle: 'The calendar was shot in studio in one day. The 3D elements and retouching took only 2 weeks to develop. The 40 megapixel Hasselblad H4D, Autodesk 3ds Max and Photoshop CC collaborated perfectly on this project.'
        }
      ]
    }, {
      image: require('../../Assets/Projects/Drop of love/High Res/A drop of love 07.jpg?type=blurred'),
      backgroundSize: 'auto 100%'
    }, {
      image: require('../../Assets/Projects/Drop of love/3D model.jpeg?type=blurred' ),
    }
  ]
}
