import React from "react";
import { browserHistory } from 'react-router';
import { Col, Image } from "react-bootstrap";
import Gravatar from 'react-gravatar';

export default class Guide extends React.Component {

  guideClick(guide_id) {
    browserHistory.push('/guides/' + guide_id);
  }


  render() {
    var gravatarSize = 225;
    const guide = this.props.guide;

    return (
      <Col md={4} onClick={() => this.guideClick(guide.id)}>
        <div class="box box-widget widget-user-2">
          <div class="widget-user-header" style={{backgroundColor: 'rgb(85, 89, 93)'}}>
            <div class="widget-user-image">
              <Image class="img-circle" src={guide.img_url} alt="User Avatar"/>
            </div>
            <h3 class="widget-user-username">{guide.full_name}</h3>
            <h5 class="widget-user-desc">{guide.bio}</h5>
          </div>
          <div class="box-footer no-padding">
            <ul class="nav nav-stacked">
              <li><a href="#">Tours <span class="pull-right badge bg-blue">Needs replacing</span></a></li>
              <li><a href="#">Followers <span class="pull-right badge bg-aqua">{((JSON.parse(guide.followers)).length)}</span></a></li>
              <li><a href="#">Following <span class="pull-right badge bg-red">{((JSON.parse(guide.following)).length)}</span></a></li>
              <li><a href="#">Average Rating <span class="pull-right badge bg-green">12</span></a></li>
            </ul>
          </div>
        </div>
      </Col>
    );
  }
}
