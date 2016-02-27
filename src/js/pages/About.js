// modules/About.js
import React from 'react';
// import NavLink from './NavLink';
// import '../../css/index.scss';
import { Link } from "react-router";
import Service from '../components/sub/Service';

export default class About extends React.Component {
    
    render() {

    	const Services = [
		<Service key={1} name={"Interactive Tours"} bio={"Digital tours!"}/>,
		<Service key={2} name={"Tour Guides"} bio={"Free and easy to design!"}/>,
		<Service key={3} name={"Go on tours, for free"}  bio={"Discover the hidden Canadian wonders on offer in Bristol"}/>,
		<Service key={4} name={"Register Free"}bio={"Get an account now!"}/>,
		];

        return (
	   	 <section id="services">
	        <div class="container">
	            <div class="row">
	                <div class="col-lg-12 text-center">
	                    <h2 class="section-heading">About</h2>
	                    <h3 class="section-subheading text-muted">What we offer.</h3>
	                </div>
	            </div>
	            <div class="row text-center"> {Services} </div>
	        </div>
	       </section>
        );
    }
}

