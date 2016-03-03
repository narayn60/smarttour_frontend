// modules/Home.js
import React from 'react';
import { Button } from "react-bootstrap";

export default class Home extends React.Component {
    render() {
        return (
		    <header>
		        <div class="container">
		            <div class="intro-text">
		                <div class="intro-lead-in">Jaffna Tours</div>
		                <Button class="page-scroll btn btn-xl">Take a tour</Button>
		            </div>
		        </div>
		    </header>
        	);
    }
}
