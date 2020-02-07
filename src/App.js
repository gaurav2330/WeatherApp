import React from 'react';
import { BrowserRouter as Router , Route} from "react-router-dom"
import NavBar from './navbar.js'
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherApp from "./component/todayweather"
import TweatherApp from "./component/tomorrowweather" 
import Coursel from "./component/Coursel"
  

function App(){
    return (
    <Router>
     <div className="container">
     <NavBar/>
     <br/>
     <Route path="/" exact component={WeatherApp}/>
     <Route path="/tomorrow" component={TweatherApp}/>
     <p></p>
     <Coursel/>
    </div>
   </Router> 
    );
}
export default App;
// import React, { Component } from 'react';



//  class Wapp extends Component{
//     render(){
//     return (
   
//     );
//   }
// }
// export default Wapp;

