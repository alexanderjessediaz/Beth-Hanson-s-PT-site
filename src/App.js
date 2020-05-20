import React, { Component } from 'react'
import MainNavbar from "./Components/MainNavbar.js"
import WelcomeSection from "./Components/WelcomeSection"
import WelcomeJumbo from "./Components/WelcomeJumbo"
import ServicesContainer from "./Components/ServicesContainer"
import ServicesDivide from "./Components/ServicesDivide"
import ContactDivide from "./Components/ContactDivide"
import Contact from "./Components/Contact"
import FAQDivide from "./Components/FAQDivide"
import FAQ from "./Components/FAQ"


import 'bootstrap/dist/css/bootstrap.min.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// library.add(fab)



class App extends Component {


  render(){
    return (
      <div className="App">
        <MainNavbar />
        <WelcomeSection />
        <WelcomeJumbo/>
        <ServicesDivide/>
        <ServicesContainer/>
        <ContactDivide/>
        <Contact/>
        <FAQDivide/>
        <FAQ/>
      </div>
    );
  }
}

export default App;
