import React from "react";
import { browserHistory } from 'react-router';
import { Col } from "react-bootstrap";
import Gravatar from 'react-gravatar';

export default class Guide extends React.Component {

  guideClick(guide_id) {
    browserHistory.push('/guides/' + guide_id);
  }


  render() {
    var gravatarSize = 225;

    return (
      <Col md={4} onClick={() => this.guideClick(this.props.guide.id)}>
        <div class="box box-widget widget-user-2">
          <div class="widget-user-header bg-yellow">
            <div class="widget-user-image">
              <Gravatar class="img-circle" email={this.props.guide.email} size={gravatarSize} https alt="User Avatar" />
            </div>
            <h3 class="widget-user-username">{this.props.guide.full_name}</h3>
            <h5 class="widget-user-desc">Hold Location Info</h5>
          </div>
          <div class="box-footer no-padding">
            <ul class="nav nav-stacked">
              <li><a href="#">Tours <span class="pull-right badge bg-blue">31</span></a></li>
              <li><a href="#">Followers <span class="pull-right badge bg-aqua">5</span></a></li>
              <li><a href="#">Average Rating <span class="pull-right badge bg-green">12</span></a></li>
              <li><a href="#">Followers <span class="pull-right badge bg-red">842</span></a></li>
            </ul>
          </div>
        </div>
      </Col>
    );
  }
}
