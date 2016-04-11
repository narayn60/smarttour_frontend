import React from 'react';
import { Col, Row, Grid } from "react-bootstrap";

export default class TourOverview extends React.Component {

  constructor(props) {
    super(props);
  } 
  render() {

    const panelInfo = [
      {text: 'Followers', count: 12, sub: 'Complete Task', image_class: 'fa fa-users fa-3x', panel_type: 'panel panel-info'},
      {text: 'Points', count: 3, sub: 'Temp', image_class: 'fa fa-map-marker fa-3x', panel_type: 'panel panel-warning'},
      {text: 'Times Completed', count: 4, sub: 'Temp', image_class: 'fa fa-check fa-3x', panel_type: 'panel panel-danger'},
      {text: 'Average Review', count: "4.3/5", sub: 'Temp', image_class: 'fa fa-star fa-3x', panel_type: 'panel panel-success'}
    ];
    const panels = panelInfo.map((panel) => {
      return (
        <Col lg={3}>
          <div class={panel.panel_type}>
            <div class="panel-heading">
              <Row>
                <Col xs={6}>
                  <i class={panel.image_class}></i>
                </Col>
                <Col xs={6} class="text-right">
                  <p class="announcement-heading">{panel.text}</p>
                  <p class="announcement-text">{panel.count}</p>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      );
    });

    return (
      <div>
        <section class="touroverview" id="overview">
          <h3>Tour Overview</h3>
          <hr/>
          <Row id="overview_panels">
            {panels}
          </Row>
        </section>
      </div>
    );
  }

}
