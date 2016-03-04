import React from 'react';
import '../../css/leaflet.scss';
import LeafMap from '../components/leaflet/LeafMap';
import { Row, Col, Image, Button, Collapse, Well, Table, ListGroup, ListGroupItem } from "react-bootstrap";


export default class TourDesign extends React.Component {

    render() {

    var points = [
      {
        long: -2.6183652319014072,
        lat: 51.453766227989604,
        name: 'MVB'
      },
      {
        long: -2.6171636022627354,
        lat: 51.45420747748235,
        name: 'Banksy'
      },
      {
        long: -2.616101447492838,
        lat: 51.45366594341915,
        name: 'Queens'
      },
    ];

	    const Locations = points.map((point, i) => 
    		<tr>
    			<td>{i}</td>
    			<td>{point.name}</td>
    		</tr> 
	    );

        return (
        	<div class="container">
        		<h3> ID: { this.props.params.id } </h3>
        		<Row>
        			<Col md={3}>
        			  <Table striped bordered condensed hover>
					    <thead>
					      <tr>
					        <th>#</th>
					        <th>Name</th>
					      </tr>
					    </thead>
					    <tbody>
					    	{Locations}
					    </tbody>
					  </Table>
        			</Col>
        			<Col md={8} mdOffset={1}>
        				<LeafMap points={points}/>
        			</Col>
        		</Row>
           </div>
        );
    }
}

// <LeafMap />
