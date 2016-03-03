import React from 'react';
import CreateTourForm from '../components/sub/CreateTourForm';

export default class CreateTour extends React.Component {

	render() {

	    return (
	    	<section id="contact">
		        <div class="container">
		            <div class="row">
		                <div class="col-lg-12 text-center">
		                    <h2 class="section-heading">Create a tour</h2>
		                    <h3 class="section-subheading text-muted">Complete the form to get started</h3>
		                </div>
		            </div>
		            <div class="row">
		                <div class="col-lg-12">
				             {this.props.children}
				    	</div>
				    </div>
				</div>
			</section>
	      );
	}
}
