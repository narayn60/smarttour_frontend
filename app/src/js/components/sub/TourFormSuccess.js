import React from 'react'
import { Row, Col, Button, Well, Collapse } from "react-bootstrap";

export default class TourFormSuccess extends React.Component {

	constructor() {
	    super();
	    this.state = {};
	}

	
	render() {
		return (
			<div>
				 <h2>Successfully Created {this.props.fieldValues.name}!</h2>
				 <Row class="text-center">
		   			 <Button bsStyle="success" bsSize="large" class="tourButton text-center" onClick={ ()=> this.setState({ open: !this.state.open })}>
		             	Download your QR codes
		             </Button>
		            <Collapse in={this.state.open}>
		              <div>
		                <Well>
		                  Generate some QR codes.
		                </Well>
		              </div>
		            </Collapse>
                </Row>
			</div>
		)
	}
}