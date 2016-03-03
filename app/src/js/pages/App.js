// modules/App.js
import React from 'react';
import '../../css/index.scss';
import '../../css/agency.scss';
import { Link } from "react-router";

// Page components
import NavHeader from "../components/layout/NavHeader";
import About from './About';

export default class App extends React.Component {
    render() {
        return (
            <div>
              <NavHeader/>
              {this.props.children}
            </div>
        );
    }
}
