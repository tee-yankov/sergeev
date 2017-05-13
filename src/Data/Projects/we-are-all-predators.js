export default {
  slug: 'we-are-all-predators',
  title: 'We are all predators',
  type: 'Advertising Campaign',
  description: 'Campaign for dental implants.',
  backgroundColor: '#FFFFFF',
  scenes: [
    {
      image: require('../../Assets/Projects/We are all predators/High Res/We are all predators 01.jpg?type=blurred'),
      subscenes: [
        {
          scrollTo: { x: 0, y: 100 },
          subtitle: 'A dental implant is a tricky product to sell. Especially when it has to be a catchy campaign. I had no brief, only the direction: “be as creative as possible”.',
          textClass: 'col-sm-offset-1 col-sm-3 text--dark',
          offsetMultiplier: 8
        }, {
          scrollTo: { x: -300, y: -300 },
          subtitle: 'We are predators by nature. Humans are the ultimate predators, the most dangerous animals',
          textClass: 'col-sm-offset-8 col-sm-3 text--right',
          offsetMultiplier: 4
        }
      ]
    }, {
      image: require('../../Assets/Projects/We are all predators/High Res/We are all predators 02.jpg?type=blurred'),
      subscenes: [
        {
          scrollTo: { x: -300, y: 300 },
          subtitle: 'Throw in some intelligence, some vanity,  - a feeling that comes out of intelligence, mix it with our primal sense of self preservation, and you get the human at the top of the food chain.',
          textClass: 'col-sm-offset-8 col-sm-3 text--right',
          offsetMultiplier: 4
        }, {
          scrollTo: { x: -300, y: -300 },
          subtitle: 'With our carnivorous history  we Homo sapiens have to take care for our teeth - one of the predator’s main weapons.',
          textClass: 'col-sm-offset-1 col-sm-3',
          offsetMultiplier: 4
        }
      ]
    }, {
      image: require('../../Assets/Projects/We are all predators/High Res/We are all predators 03.jpg?type=blurred'),
      subscenes: [
        {
          scrollTo: { x: 0, y: 200 },
          subtitle: 'The assignment included concept, casting, special effect make up in combination with high-end retouching and digital art.',
          textClass: 'col-sm-offset-8 col-sm-3 text--dark text--right',
          offsetMultiplier: 4
        }
      ]
    }
  ]
}
