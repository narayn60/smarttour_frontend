import React from 'react';
import { render } from 'react-dom';
import { Row, Col, Button, Well, Collapse } from "react-bootstrap";
import { Router, Route, Link, browserHistory } from 'react-router';
import Tooltip from 'rc-tooltip';
import ImageLoad from './ImageLoad';
import 'rc-tooltip/assets/bootstrap.css';

import Global from 'Global';
import AuthStore from 'AuthStore';

export default class Tour extends React.Component {

  constructor() {
    super();
    this.state = {
      visible: false
    };
  }

  handleVisibleChange(visible) {
    this.setState({
      visible: visible
    });
  }

  handleDestroy() {
    this.setState({
      destroy:true,
    });
  }

  preventDefault(e) {
    e.preventDefault();
  }

  render() {
    const { name, owner, id, guide, img_url } = this.props.tour;
    const qr_path = "/media/tours/" + id + "/qrcode_profile/";

    return (
      <Col md={6} sm={6} class="portfolio-item">
        <div class="portfolio-heading">
          <h4>{ name }</h4>
        </div>
        <div class="portfolio-link">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <Row>
                <Col md={6} class="tour-hover-content">
                  <Link to={`/browse/tours/${id}`} class="fa fa-plus fa-2x"></Link>
                  <p> Explore </p>
                </Col>
                <Col md={6} class="tour-hover-content">
                  <Tooltip
                    visible={this.state.visible}
                    animation="zoom"
                    onVisibleChange={this.handleVisibleChange.bind(this)}
                    trigger="click"
                    overlay= {
                      <div>
                        <span>Scan</span>
                        <ImageLoad path={qr_path} />
                      </div>
                             }>
                      <a class="fa fa-arrow-down fa-2x"></a>
                  </Tooltip>
                  <p> Download </p>
                </Col>
              </Row>
            </div>
          </div>
          <img src={img_url} class="img-responsive" alt=""/>
        </div>
        <div class="portfolio-caption">
          <Row>
            <Col md={4} >
              <i class="fa fa-user"></i>
              <p>{ guide.full_name }</p>
            </Col>
            <Col md={4} >
              <i class="fa fa-at"></i>
              <p>{ guide.email }</p>
            </Col>
            <Col md={4}>
              <i class="fa fa-heart"></i>
              <p>{ this.props.tour.followers }</p>
            </Col>
          </Row>
        </div>
      </Col>
    );
  }
}
