import React from 'react';
import { render } from 'react-dom';
import { Row, Col, Button, Well, Collapse } from "react-bootstrap";
import { Router, Route, Link, browserHistory } from 'react-router';

export default class Tour extends React.Component {

  render() {
    const { name, owner, id, guide } = this.props.tour;

    return (
        <div class="col-md-6 col-sm-6 portfolio-item">
            <div class="portfolio-heading">
                <h4>{ name }</h4>
            </div>
            <Link to={`/browse/tours/${id}`} class="portfolio-link"> 
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img src="img/portfolio/roundicons.png" class="img-responsive" alt=""/>
            </Link>
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
        </div>
    );
  }
}
