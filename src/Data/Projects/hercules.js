export default {
  slug: 'hercules',
  title: 'The 12 labours of Hercules',
  type: 'Project for a calendar',
  description: 'The 12 labours of Hercules inspired by the Greek mythology.',
  backgroundColor: '#FFFFFF',
  scenes: [
    {
      image: require('../../Assets/Projects/Hercules/High Res/The 12 labours of Hercules 01.jpg?type=blurred'),
      simple: true
    }, {
      image: require('../../Assets/Projects/Hercules/High Res/The 12 labours of Hercules 01.jpg?type=blurred'),
      backgroundPosition: 'center 60%',
      subscenes: [
        {
          offsetMultiplier: 9,
          title: 'Herculesse & Cerberus',
          subtitle: '“The 12 labours of Herculesse” is a project currently for sale. I started this assignment for  a calendar for The Russian  Athletics Federation, which  got cancelled soon after  the production started.',
          textClass: 'col-sm-offset-1 col-sm-3 text--left'
        }, {
          scrollTo: { x: 150, y: 300, scale: 2.75 },
          subtitle: 'Nevermind. I decided that the work on  the concept and the preproduction  was so extensive and advanced,  it was worth continuing the project.',
          offsetMultiplier: 9,
          textClass: 'col-sm-offset-8 col-sm-3 text--right'
        }, {
          scrollTo: { x: 400, y: -300, scale: 2.75 }
        }
      ]
    }, {
      image: require('../../Assets/Projects/Hercules/High Res/The 12 labours of Hercules 02.jpg?type=blurred'),
      simple: true
    }, {
      image: require('../../Assets/Projects/Hercules/High Res/The 12 labours of Hercules 02.jpg?type=blurred'),
      backgroundPosition: 'center 60%',
      subscenes: [
        {
          offsetMultiplier: 9,
          title: 'Herculesse & Amazons',
          subtitle: 'The 12 Labours of Hercules  recasts the mythical hero as a woman.  It is a project dedicated to  women’s strength, grace, will,  and dedication.',
          textClass: 'col-sm-offset-8 col-sm-3 text--right text--dark'
        }, {
          scrollTo: { x: 100, y: 300, scale: 2.5 }
        }, {
          scrollTo: { x: -700, y: -500, scale: 2.5 },
        }
      ]
    }, {
      image: require('../../Assets/Projects/Hercules/High Res/The 12 labours of Hercules 03.jpg?type=blurred'),
      simple: true
    }, {
      image: require('../../Assets/Projects/Hercules/High Res/The 12 labours of Hercules 03.jpg?type=blurred'),
      subscenes: [
        {
          title: 'Herculesse & The Lernaean Hydra',
          subtitle: 'All the talents in the project are athletes and were ',
          textClass: 'col-sm-offset-1 col-sm-3 text--left text--dark',
          offsetMultiplier: 9
        }, {
          scrollTo: { x: 0, y: -600, scale: 3 },
          subtitle: 'Excluding some of the CGI elements  in this project, everything is shot on set.  All the costumes are handmade  using materials and crafting techniques  typical for the period of ancient  history evoked in the project.',
          textClass: 'col-sm-offset-8 col-sm-3 text--right',
        }
      ]
    }, {
      image: require('../../Assets/Projects/Hercules/High Res/The 12 labours of Hercules 05.jpg?type=blurred'),
      subscenes: [
        {
          title: 'Herculesse & Ceryneian Hind',
          textClass: 'col-sm-offset-1 col-sm-10 text--left',
          offsetMultiplier: 10
        }, {
          scrollTo: { x: 0, y: 300, scale: 2.5 }
        }, {
          scrollTo: { x: -500, y: -500, scale: 2.5 }
        }
      ]
    }, {
      image: require('../../Assets/Projects/Hercules/High Res/The 12 labours of Hercules 05.jpg?type=blurred'),
      simple: true
    }
  ]
}
