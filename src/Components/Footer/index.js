import React from 'react'
import Navigation from '../Navigation'
import facebookLogo from '../../Assets/facebook.svg'
import behanceLogo from '../../Assets/behance.svg'
import instagramLogo from '../../Assets/instagram.svg'
import youtubeLogo from '../../Assets/youtube.svg'
import './index.css'

const Footer = () => (
  <div className='footer row'>
    <div className='col-xs-12'>
      <Navigation inverted />
    </div>
    <div className='footer__bottom-bar row container bottom-xs col-xs-12 between-xs'>
      <ul className='footer__social col-sm-2 col-xs-10 col-xs-offset-1 col-sm-offset-0'>
        <li className='footer__social-item'>
          <a href='https://www.facebook.com/sergeevstd/' target='_blank'><img src={facebookLogo} alt='facebook' /></a>
        </li>
        <li className='footer__social-item'>
          <a href='https://www.behance.net/LuboSergeev' target='_blank'><img src={behanceLogo} alt='behance' /></a>
        </li>
        <li className='footer__social-item'>
          <a href='https://www.instagram.com/lubosergeev/' target='_blank'><img src={instagramLogo} alt='instagram' /></a>
        </li>
        <li className='footer__social-item'>
          <a href='https://www.youtube.com/channel/UCohEnG7ptqfIgwkOIHsRV0A' target='_blank'><img src={youtubeLogo} alt='youtube' /></a>
        </li>
      </ul>
      <p className='footer__copyright col-sm-6 col-xs-12 center-xs end-sm'>Sergeev Studio - Copyright Reserved {new Date().getFullYear()}</p>
    </div>
  </div>
)

export default Footer
