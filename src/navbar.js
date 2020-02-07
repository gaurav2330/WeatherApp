import React, { Component } from 'react';
import {Link} from "react-router-dom";


import {Form,Button} from 'react-bootstrap'
export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Weather App</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <Link to="/" className="nav-link">Today</Link>
        </li>
        <li className="navbar-item">
        <Link to="/tomorrow" className="nav-link">Next 5 Days</Link>
        </li>
        </ul>
        <Form inline>
        <Button  title="Click me" onClick={ ()=>{window.location.href='https://github.com/gaurav2330'}}>Help</Button>
        </Form>     
        </div>   
      </nav>
    );
  }
}