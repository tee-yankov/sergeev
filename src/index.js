import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import SiteContainer from './Views/SiteContainer'
import LandingPage from './Views/LandingPage'
import About from './Views/About'
import Contact from './Views/Contact'
import ProjectDetails from './Components/ProjectDetails'
import { Provider } from 'react-redux'
import scrollToTop from './Components/Util/scroll-to-top'
import { store } from './Stores'
import './polyfills'
// ScrollMagic Plugins
import 'animation.gsap'
import 'debug.addIndicators'
import './index.css'

function onUpdateRouter () {
  scrollToTop(1000)
}

const App = () => (
  <Provider store={store}>
    <Router onUpdate={onUpdateRouter} history={browserHistory}>
      <Route path='/' component={SiteContainer}>
        <IndexRedirect to='home' />
        <Route path='home' component={LandingPage} />
        <Route path='about' component={About} />
        <Route path='contact' component={Contact} />
        <Route path='project/:slug' component={ProjectDetails} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
