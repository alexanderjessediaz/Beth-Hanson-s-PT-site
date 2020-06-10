import React, { Component } from 'react'
import MainNavbar from "./Components/MainNavbar.js"
import WelcomeSection from "./Components/WelcomeSection"
import WelcomeJumbo from "./Components/WelcomeJumbo"
import ServicesContainer from "./Components/ServicesContainer"
import ServicesDivide from "./Components/ServicesDivide"
import Contact from "./Components/Contact"
import FAQDivide from "./Components/FAQDivide"
import FAQ from "./Components/FAQ"
import SchedulingPage from './Components/SchedulingPage'
import ContactDivide from './Components/ContactDivide'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



import 'bootstrap/dist/css/bootstrap.min.css'




class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">
          <MainNavbar />
          <Route exact path="/">
          <WelcomeSection />
          <WelcomeJumbo/>
          <ServicesDivide/>
          <ServicesContainer/>
          <ContactDivide/>
          <Contact/>
          <FAQDivide/>
          <FAQ/>
          </Route>
        <Switch>
          <Route exact path="/SchedulingPage" component={SchedulingPage}/>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
