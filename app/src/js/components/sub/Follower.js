import React from 'react';
import Gravatar from 'react-gravatar';
import { Row, Col, Button } from "react-bootstrap";

export default class Follower extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const follower = this.props.guide
    const gravatarSize = 125;

      return (
        <Col md={6}>
          <div class="box box-widget widget-user">
            <div class="widget-user-header bg-yellow" style={{background: 'url("http://lorempixel.com/500/320/nature/1/") center center;'}}>
              <h3 class="widget-user-username">{follower.full_name}</h3>
              <h5 class="widget-user-desc">{follower.email}</h5>
            </div>
            <div class="widget-user-image">
              <Gravatar class="img-circle" email={follower.email} size={gravatarSize} https />
            </div>
            <div class="box-footer">
              <div class="row">
                <div class="col-sm-4 border-right">
                  <div class="description-block">
                    <h5 class="description-header">0</h5>
                    <span class="description-text">Tours</span>
                  </div>
                </div>
                <div class="col-sm-4 border-right">
                  <div class="description-block">
                    <h5 class="description-header">13,000</h5>
                    <span class="description-text">Followers</span>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="description-block">
                    <h5 class="description-header">35</h5>
                    <span class="description-text">Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      );
    }
  }