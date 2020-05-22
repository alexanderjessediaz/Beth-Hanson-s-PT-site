import React, { Component } from 'react'
import MainNavbar from "./Components/MainNavbar.js"
import WelcomeSection from "./Components/WelcomeSection"
import WelcomeJumbo from "./Components/WelcomeJumbo"
import ServicesContainer from "./Components/ServicesContainer"
import ServicesDivide from "./Components/ServicesDivide"
import Contact from "./Components/Contact"
import FAQDivide from "./Components/FAQDivide"
import FAQ from "./Components/FAQ"


import 'bootstrap/dist/css/bootstrap.min.css'




class App extends Component {


  // captureContactFormData = (newMessage) =>{
    
  // }


  render(){
    return (
      <div className="App">
        <MainNavbar />
        <WelcomeSection />
        <WelcomeJumbo/>
        <ServicesDivide/>
        <ServicesContainer/>
        <Contact/>
        <FAQDivide/>
        <FAQ/>
      </div>
    );
  }
}

export default App;
