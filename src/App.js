import React, { Component } from 'react'
import MainNavbar from "./Containers/MainNavbar.js"
import WelcomeSection from "./Containers/WelcomeSection"
import WelcomeJumbo from "./Containers/WelcomeJumbo"
import ServicesContainer from "./Containers/ServicesContainer"
import FAQDivide from "./Containers/FAQDivide"
import ServicesDivide from "./Containers/ServicesDivide"
import ContactDivide from "./Containers/ContactDivide"
import Contact from "./Containers/Contact"
import FAQ from "./Containers/FAQ"
import 'bootstrap/dist/css/bootstrap.min.css'



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
