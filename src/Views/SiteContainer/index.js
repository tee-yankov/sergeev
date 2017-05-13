import React from 'react'
import { RouteTransition } from 'react-router-transition'
import Navigation from '../../Components/Navigation'
import Footer from '../../Components/Footer'
import ModalContainer from '../../Containers/Modal'
import Sidenav from '../../Containers/Sidenav'

const absoluteRoutes = [/\/about/, /\/project\/.*/]

const SiteContainer = (props) => {
  const isAbsolute = (() => {
    const { pathname } = props.router.getCurrentLocation()
    const matches = absoluteRoutes.map((rex) => rex.test(pathname)).filter((a) => a)
    return matches[0]
  })()

  return (
    <div>
      <RouteTransition
        pathname={props.location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        <Navigation absolute={isAbsolute} />
        <Sidenav />
        <div>{props.children}</div>
        <Footer />
      </RouteTransition>
      <ModalContainer />
    </div>
  )
}

export default SiteContainer
