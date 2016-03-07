import React from 'react';
// import '../../css/leaflet.scss';
import LeafMap from '../components/leaflet/LeafMap';
import { Row, Col, Image, Button, Collapse, Well, Table, ListGroup, ListGroupItem } from "react-bootstrap";
import EditTourForm from '../components/sub/EditTourForm';


export default class TourDesign extends React.Component {

  constructor() {
    super();
    this.state = {
      currentlySelected: -1,
      points: [
        {
          long: -2.6183652319014072,
          lat: 51.453766227989604,
          name: 'MVB',
          data: 'The university building'
        },
        {
          long: -2.6171636022627354,
          lat: 51.45420747748235,
          name: 'Banksy',
          data: 'A famous Street Artists'
        },
        {
          long: -2.616101447492838,
          lat: 51.45366594341915,
          name: 'Queens',
          data: 'The university engineering building'
        },
      ]
    };
    
  }

  onClick(index) {
    const newSelected = this.state.currentlySelected === index ? -1 : index;
    this.setState({currentlySelected: newSelected});
  }

  render() {

    const Locations = this.state.points.map((point, i) => 
                                <tr onClick={() => this.onClick(i)}>
                                 <td>{i}</td>
                                 <td>{point.name}</td>
                                 </tr> 
                                );

    const currentlySelected = this.state.currentlySelected;
    const TourEdit = currentlySelected === -1 ? "" : <EditTourForm values={this.state.points[currentlySelected]} />;

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
            <LeafMap points={this.state.points}/>
          </Col>
        </Row>
        <Row>
          { TourEdit }
        </Row>
      </div>
    );
  }
}
