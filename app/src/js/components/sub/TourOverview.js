import React from 'react';
import { Col, Row, Grid } from "react-bootstrap";

export default class TourOverview extends React.Component {

  constructor(props) {
    super(props);
  } 
  render() {

    const panelInfo = [
      {text: 'Followers', count: 12, sub: 'Complete Task', image_class: 'fa fa-users fa-5x', panel_type: 'panel panel-info'},
      {text: 'Points', count: 3, sub: 'Temp', image_class: 'fa fa-map-marker fa-5x', panel_type: 'panel panel-warning'},
      {text: 'Times Completed', count: 4, sub: 'Temp', image_class: 'fa fa-check fa-5x', panel_type: 'panel panel-danger'},
      {text: 'Average Review', count: "4.3/5", sub: 'Temp', image_class: 'fa fa-star fa-5x', panel_type: 'panel panel-success'}
    ];
    const panels = panelInfo.map((panel) => {
      return (
        <Col lg={3}>
          <div class={panel.panel_type}>
            <div class="panel-heading">
              <div class="row">
                <Col xs={6}>
                  <i class={panel.image_class}></i>
                </Col>
                <Col xs={6} class="text-right">
                  <p class="announcement-heading">{panel.text}</p>
                  <p class="announcement-text">{panel.count}</p>
                </Col>
              </div>
            </div>
            <a href="#">
              <div class="panel-footer announcement-bottom">
                <div class="row">
                  <Col xs={6}>
                    {panel.sub}
                  </Col>
                  <Col xs={6} class="text-right">
                    <i class="fa fa-arrow-circle-right"></i>
                  </Col>
                </div>
              </div>
            </a>
          </div>
        </Col>
      );
    });

    return (
      <div>
        <Row>
          <h1>Tour Overview</h1>
          <ol class="breadcrumb">
            <li class="active">
              <i class="fa fa-dashboard"></i>
              Dashboard
            </li>
          </ol>
        </Row>
        <Row>
          {panels}
        </Row>
      </div>
    );
  }

}
