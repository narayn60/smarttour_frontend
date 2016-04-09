import React from 'react';
import { Row, Col, Grid } from "react-bootstrap";

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
            <Grid fluid={true}>
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
            </Grid>
           )
    }
}
