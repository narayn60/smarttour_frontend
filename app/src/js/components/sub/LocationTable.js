import React from "react";
import { Grid, Row, Col, Panel, Button, Image } from "react-bootstrap";
import AuthStore from 'AuthStore';
import Global from 'Global';

export default class LocationTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: new Set()
    };
  }

  __toggleCollapse(i) {
    if (this.state.open.has(i)) {
      this.state.open.delete(i);
    } else {
      this.state.open.add(i);
    }
    this.setState({
      open: this.state.open
    });
  }


  render() {

    const locations = this.props.locations;
    const path = Global.backend_url + AuthStore.getUid() + "/";

    var locationTable = locations.map((location, i) =>
      (
        <div onClick={() => this.props.onClick(i)}>
          <Row onClick={() => this.__toggleCollapse(i)}>
            <Col md={4} style={{height: '100px', width: '100px'}}>
              <Image src={path + location.qrcode_path_s3} class="img-responsive" style={{objectFit: 'contain'}}/>
            </Col>
            <Col md={8} class="location-data">
              <h5>{location.name}</h5>
              <p>
                <i class="fa fa-map-marker"></i>
                { location.address }
              </p>
            </Col>
          </Row>
          <Panel collapsible expanded={this.state.open.has(i)}>
            <Grid>
              <Row>
                About: { location.about}
              </Row>
            </Grid>
          </Panel>
        </div>
      )
    );

    return (
      <div>
        {locationTable}
      </div>
    );
  }
}
