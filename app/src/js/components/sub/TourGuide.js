import React from "react";
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Row, Col, Image } from "react-bootstrap";
import Gravatar from 'react-gravatar';

export default class Guide extends React.Component {
  render() {
    var gravatarSize = 225;
    console.log("GUide", this.props.guide);

    return (
      <div class="col-sm-4 portfolio-item">
        <Link to={`/guides/${this.props.guide.id}`} class="portfolio-link"> 
          <div class="team-member portfolio-hover" >
            <div class="portfolio-hover-content">
            </div>
          </div>
          <Gravatar class="img-responsive" email={this.props.guide.email} size={gravatarSize} https />
        </Link>
        <div class="portfolio-caption">
          <h4>{ this.props.guide.full_name }</h4>
          <p>{ this.props.guide.id }</p>
        </div>
      </div>
    );
  }
}
