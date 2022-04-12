import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import Login from './components/Login.js'
import SignUp from './components/SignUp'
import Error from './components/Error'
import Donor from './components/Donor'
import Request from './components/Request'
import Aboutus from './components/Aboutus'
import Dashboard from './components/Dashboard'



function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Showcase />
          <Destinations />
        </Route>
        <Route path='/aboutus'>
          <Aboutus />
        </Route>
        <Route path='/donate'>
          <Donor />
        </Route>
        <Route path='/request'>
          <Request />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
        <Route path='/adminPanel'>
          <Dashboard />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
