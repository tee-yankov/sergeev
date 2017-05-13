export default {
  slug: 'ciela',
  title: 'Ciela',
  type: 'Advertising Campaign',
  description: 'The mystical power of books portrayed in a campaign for leading publishing house.',
  backgroundColor: '#FFFFFF',
  scenes: [
    {
      image: require('../../Assets/Projects/Ciela/High Res/Ciela - Book Power.jpg?type=blurred'),
      simple: true
    }, {
      image: require('../../Assets/Projects/Ciela/High Res/Ciela - Book Power.jpg?type=blurred'),
      subscenes: [
        {
          scrollTo: { x: -400, y: 300 }
        }, {
          scrollTo: { x: -400, y: -300 }
        }, {
          scrollTo: { x: 400, y: 200 }
        }
      ]
    }
  ]
}
