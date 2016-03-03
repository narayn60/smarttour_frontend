// modules/App.js
import React from 'react';
import 'base_css';
import { Link } from "react-router";

// Page components
import NavHeader from "../components/layout/NavHeader";
import Footer from "../components/layout/Footer";
import About from './About';

export default class App extends React.Component {
    render() {
        return (
            <div>
              <NavHeader/>
                {this.props.children}
              <Footer/>
            </div>
        );
    }
}
