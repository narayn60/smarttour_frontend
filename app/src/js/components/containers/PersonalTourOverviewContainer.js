import React from 'react';
import { Row, Col } from "react-bootstrap";

import TourMap from '../gmaps/TourMap';
import LocationTable from '../sub/LocationTable';

export default class PersonalTourOverviewContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
    }

    __handleClick(index) {
        this.setState({selected: index});
    }

    render() {

        console.log("PersonalTourOverview", this.props.locations, this.state.selected);

        if (this.props.locations.length === 0) {
            return (
                    <div>
                    No Locations Created
                    </div>
                   )
        }

        return (
            <div class="container">
                <Row style={{height: '400px'}}>
                    <Col md={6} style={{height: '100%'}}>
                        <TourMap
                            handleClick={this.__handleClick.bind(this)}
                            locations={this.props.locations}
                            selected={this.state.selected}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <LocationTable locations={this.props.locations} onClick={this.__handleClick.bind(this)}/>
                    </Col>
                </Row>
            </div>
           )
    }
}
                    // <div style={{position: 'absolute', left: 0, top: 0, width: '52%', height: '100%'}}>
                    // <div style={{position: 'absolute', right: 0, top: 0, width: '48%', height: '100%'}}>
                    // </div>
                // <Row style={{height: '400px', position: 'relative', overflow: 'hidden'}}>
