import React, { Component } from 'react';
import MainNavbar from "./Containers/MainNavbar.js"
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {


  render(){
    return (
      <div className="App">
        <MainNavbar />
      </div>
    );
  }
}

export default App;
