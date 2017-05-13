const publicUrl = process.env.PUBLIC_URL

export default  {
  slug: 'bulgarian-rhythmic-gymnastic-federation',
  title: 'As Light as\nBulgarian Rhythmic Gymnastic Federation',
  type: 'Advertising Campaign',
  description: 'When I got commissioned for shooting the campaign I didn\'t have a brief, no guidelines, no nothing. I was hired as a concept photographer and part of the job was to come up with the concept.',
  backgroundColor: '#FFFFFF',
  logo: publicUrl + '/Logos/BRGF-logo.png',
  scenes: [
    {
      image: require('../../Assets/Projects/As light as/High Res/As light as 01.jpg?type=blurred'),
      subscenes: [
        {
          scrollTo: { x: 200, y: 500 },
          offsetMultiplier: 7,
          subtitle: 'My desire was to capture that elusive, surreal moment of extraordinary perfection. Adding a touch of magical feeling through digital postproduction just came naturally.',
          textClass: 'col-sm-offset-1 col-sm-3'
        }
      ]
    }, {
      image: require('../../Assets/Projects/As light as/High Res/As light as 02.jpg?type=blurred'),
      subscenes: [
        {
          scrollTo: { x: -200, y: 200, scale: 3 },
          offsetMultiplier: 7,
          textClass: 'col-sm-offset-8 col-sm-3',
          subtitle: 'I wanted to capture my fascination with rhythmic gymnastics in these works to the extent that the viewer can experience my feelings, this sense of motion.',
          video: {
            url: publicUrl + '/Projects/As light as/Bulgarian Rhythmic Gymnastics Federation.mp4'
          }
        }, {
          offsetMultiplier: 7,
          textClass: 'col-sm-offset-1 col-sm-3',
          subtitle: 'The athletes were shot on location where they felt most comfortable. The background and other elements, especially shot for this project, were added later in Photoshop.'
        }
      ]
    }, {
      image: require('../../Assets/Projects/As light as/High Res/As light as 03.jpg?type=blurred')
    }
  ]
}
