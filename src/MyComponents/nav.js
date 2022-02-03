import React from 'react';
import logo from '../Logo.png';

export default function nav() {
  return (
      <header className="header">
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation-nav">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar" src=""></span>
            </button>
            <img src={logo} alt=""/>
          </div>
          <div className="collapse navbar-collapse" id="navigation-nav">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a className="section-scroll" href="#wrapper">Home</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
)
}
