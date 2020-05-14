import React, { Component } from 'react';
import MainNavbar from "./Containers/MainNavbar.js"
import WelcomeSection from "./Containers/WelcomeSection"
import WelcomeJumbo from "./Containers/WelcomeJumbo"
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {


  render(){
    return (
      <div className="App">
        <MainNavbar />
        <WelcomeSection />
        <WelcomeJumbo/>
      </div>
    );
  }
}

export default App;
