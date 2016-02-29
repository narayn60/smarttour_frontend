import React from "react";
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Row, Col, Image } from "react-bootstrap";

export default class Guide extends React.Component {
  render() {
    const { name, photo, bio, id } = this.props;
    var dummy_photo = "img/team/3.jpg";

    return (
        <div class="col-sm-4 portfolio-item">
            <Link to={`/guides/${id}`} class="portfolio-link"> 
                <div class="team-member portfolio-hover" >
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <Image src={ dummy_photo } rounded class="img-responsive" alt=""/>
            </Link>
            <div class="portfolio-caption">
                <h4>{ name }</h4>
                <p class="text-muted">{ id }</p>
            </div>
        </div>
    );
  }
}