import React from 'react'
import { Link } from 'react-router'
import Award from '../../Components/Award'
import Tiles from '../../Components/Tiles'
import awardData from '../../Data/Awards'
import clientData from '../../Data/Clients'
import AnimatedButton from '../../Components/AnimatedButton'
import PublicationsList from '../../Components/PublicationList'
import './index.css'

const publicUrl = process.env.PUBLIC_URL

const renderAward = (award, index) => (
  <div className='col-sm-4 col-sm-offset-1 col-md-3 col-md-offset-1 col-xs-8 col-xs-offset-2' style={{ marginBottom: '9rem' }} key={index}>
    <Award {...award} />
  </div>
)

const About = () => (
  <div className='container-large'>
    <div className='about__hero-container about__segment'>
      <div className='row middle-xs start-xs'>
        <div className='col-sm-6 col-xs-12'>
          <img className='about__hero' src={publicUrl + '/Self.jpg'} alt='lubo portrait' />
        </div>
        <div className='col-md-5 col-sm-12 col-xs-10 col-xs-offset-1 col-sm-offset-0'>
          <h1>The man behind the studio - Lyubomir Sergeev, or for short, Lubo, is a creator of the highest caliber.</h1>
        </div>
      </div>
    </div>
    <div className='row center-sm start-xs about__segment'>
      <p className='col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0 text--left'>An award-winning digital artist, photographer, and impeccable visual storyteller, boasting a hauntingly beautiful, timeless, and seductive aesthetic. With 20 years of experience in advertising and high-end retouching, his conceptual genius and lust for creation truly make him a force to be reckoned with.</p>
    </div>
    <div className='row center-xs container awards about__segment'>
      <h1>Awards</h1>
      <div className='row row--no-margin between-xs'>
        {awardData.map(renderAward)}
      </div>
    </div>
    <div className='row center-sm start-xs about__segment'>
      <p className='col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0 text--left'>His work is exquisite, possessing an innate attention to detail where every nuance is accounted for, no drop of water or pop of color left behind, leaving viewers in a constant state of awe. Lubo’s perfectionist planning is a talent in itself; a process that allows him to be involved at all levels of production-casting, location scouting, and art direction-making him a sought-after addition to any project.</p>
    </div>
    <div className='center-xs container about__segment'>
      <h1 className='about__segment-title'>Notable Clients</h1>
      <div className='row'>
        {clientData.map((client, index) => (
          <div key={index} className='col-md-2 col-sm-4 col-xs-6 about__client'>
            <img className='about__client-image' src={client.imagePath} alt={client.name} />
          </div>
        ))}
      </div>
    </div>
    <div className='row start-xs center-sm about__segment'>
      <p className='col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0 text--left'>Lubo’s most remarkable advertorial campaigns and personal projects capture the purity, sensuality and serenity of movement in all its glowing grace. Women’s smooth, flawless, and often-nude figures are the centerpiece, used as an angelic homage to becoming one with your passion-a rippling ribbon of sacrifice.</p>
    </div>
    <div className='row center-xs about__segment' style={{ marginBottom: 0 }}>
      <h1 className='about__segment-title'>Events, workshops & lectures</h1>
    </div>
    <div className='about__segment'>
      <Tiles />
    </div>
    <div className='row center-sm start-xs about__segment'>
      <p className='col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0 text--left'>Whether exposed or elaborately costumed, the models weave a simultaneously controversial and inspirational tale, adding to Lubo’s allure. Men are portrayed at the behest of their darker minds where temptation, deceit, desire and aggression reign, while his use of the woman’s body, radiant and regal, is a dominating force-encouraging them to rise above the conventional archetypes of Western media.</p>
    </div>
    <div className='row center-xs about__segment'>
      <img alt='Lubo Sergeev B&W' style={{ objectFit: 'cover' }} className='col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1' src={require('../../Assets/B&W Self.jpg').original}/>
    </div>
    <div className='row center-sm start-xs about__segment'>
      <p className='col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0 text--left'>When asked what it takes to be a successful photographer, Lubo lists three things: faith, dedication, and repetition-the necessity to take many bad photos in order to learn how to make magnificent ones. This rings most true, for there is nothing more magnificent than losing oneself in the powerful, striking and ever-vivid realm of the one and only, Lubo.</p>
    </div>
    <div className='row row--clear-margin center-xs about__segment'>
      <div className='start-sm center-xs col-sm-6 col-xs-12'>
        <h1 className='about__segment-title'>Publications</h1>
        <PublicationsList />
      </div>
    </div>
    <div className='row center-xs about__segment'>
      <div className='start-sm col-sm-6 col-xs-10'>
        <h1 className='about__segment-title text--left'>Feel free to reach out! We will be happy to provide you with more stories.</h1>
        <Link to='/contact'>
          <AnimatedButton>Contact</AnimatedButton>
        </Link>
      </div>
    </div>
  </div>
)

export default About
