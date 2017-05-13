import projectData from './Projects'

export default [
  {
    backgroundImage: require('../Assets/Projects/As light as/High Res/As light as 01.jpg?type=blurred'),
    title: 'As light as',
    color: '#FFFFFF',
    secondaryColor: '#444444',
    backgroundPosition: 'center 32%',
    linkTo: '/project/' + projectData[0].slug
  }, {
    backgroundImage: require('../Assets/Projects/The Old Sycamore/High Res/The old sycamore 01.jpg?type=blurred'),
    title: 'The Old Sycamore',
    color: '#AE8B33',
    secondaryColor: '#FFFFFF',
    backgroundPosition: 'center center',
    linkTo: '/project/' + projectData[1].slug
  }, {
    backgroundImage: require('../Assets/Projects/Vices/High Res/Who do you want us to impress 03.jpg?type=blurred'),
    title: 'Who do you want us to impress',
    color: '#FF4121',
    backgroundPosition: 'center 30%',
    secondaryColor: '#FFFFFF',
    linkTo: '/project/' + projectData[2].slug
  }, {
    backgroundImage: require('../Assets/Projects/Sacred Digitals/High Res/Sacred digitals 02.jpg?type=blurred'),
    title: 'Sacred Digitals',
    color: '#FFC477',
    backgroundPosition: '20% 40%',
    backgroundSize: '150%',
    linkTo: '/project/' + projectData[3].slug,
    isExplicit: true
  }, {
    backgroundImage: require('../Assets/Projects/Drop of love/High Res/A drop of love 04.jpg?type=blurred'),
    title: 'A drop of love',
    color: '#EA54CA',
    backgroundPosition: 'center 42%',
    linkTo: '/project/' + projectData[4].slug
  }, {
    backgroundImage: require('../Assets/Projects/Sobieski/High Res/Sobieski vodka 02.jpg?type=blurred'),
    title: 'Sobieski Vodka',
    color: '#C8FF82',
    secondaryColor: '#444444',
    backgroundPosition: 'center 16%',
    linkTo: '/project/' + projectData[5].slug
  }, {
    backgroundImage: require('../Assets/Projects/Hercules/High Res/The 12 labours of Hercules 05.jpg?type=blurred'),
    backgroundPosition: 'center 45%',
    title: 'The 12 labours of Hercules',
    color: '#D5E135',
    linkTo: '/project/' + projectData[6].slug
  }, {
    backgroundImage: require('../Assets/Projects/To the bone/High Res/To the bone 01.jpg?type=blurred'),
    title: 'To the bone',
    color: '#A68C80',
    secondaryColor: '#FFFFFF',
    backgroundPosition: 'center center',
    linkTo: '/project/' + projectData[7].slug
  }, {
    backgroundImage: require('../Assets/Projects/Ciela/High Res/Ciela - Book Power.jpg?type=blurred'),
    title: 'Ciela',
    color: '#579B19',
    secondaryColor: '#FFFFFF',
    backgroundPosition: 'center 35%',
    linkTo: '/project/' + projectData[8].slug
  }, {
    backgroundImage: require('../Assets/Projects/Bg Icons/High Res/Bg icons 01.jpg?type=blurred'),
    title: 'Bg Icons',
    color: '#DAD4A1',
    halfWidth: true,
    backgroundPosition: 'center 17%',
    linkTo: '/project/' + projectData[9].slug
  }, {
    backgroundImage: require('../Assets/Projects/Black Gold/High Res/Black gold 01.jpg?type=blurred'),
    title: 'Black Gold',
    color: '#ECB638',
    secondaryColor: '#FFFFFF',
    backgroundPosition: '60% center',
    backgroundSize: '200%',
    halfWidth: true,
    linkTo: '/project/' + projectData[10].slug,
    isExplicit: true
  }, {
    backgroundImage: require('../Assets/Projects/We are all predators/High Res/We are all predators 01.jpg?type=blurred'),
    title: 'We are all predators',
    color: '#575F6B',
    secondaryColor: '#EEEEEE',
    backgroundPosition: 'center 18%',
    backgroundSize: '150%',
    halfWidth: true,
    linkTo: '/project/' + projectData[11].slug
  }, {
    backgroundImage: require('../Assets/Projects/Red canape/Project 12 - The Red canape/The Red Canape 01.jpg?type=blurred'),
    title: 'Red Canape',
    color: '#FF4949',
    backgroundPosition: 'center 70%',
    backgroundSize: '150%',
    halfWidth: true,
    linkTo: '/project/' + projectData[12].slug,
    isExplicit: true
  }
]
