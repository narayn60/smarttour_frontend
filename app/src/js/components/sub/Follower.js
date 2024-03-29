import React from 'react';
import { Row, Col, Button, Image } from "react-bootstrap";
import { browserHistory } from "react-router";
import PersonalTourActions from 'PersonalTourActions';
import GuideActions from 'GuideActions';

export default class Follower extends React.Component {

  constructor(props) {
    super(props);
  }

  __followerClicked(follower_id) {
    browserHistory.push('/guides/' + follower_id + '/')
    PersonalTourActions.fetchTours(follower_id);
    GuideActions.fetchGuide(follower_id);
  }

  render() {

    const follower = this.props.guide;

    if (follower === undefined) {
      return <div></div>;
    }


    return (
      <Col md={6} onClick={() => this.__followerClicked(follower.id)}>
        <div class="box box-widget widget-user">
          <div class="widget-user-header bg-yellow" style={{background: 'url(' + follower.cover_url + ') center center;'}}>
            <h3 class="widget-user-username">{follower.full_name}</h3>
            <h5 class="widget-user-desc">{follower.email}</h5>
          </div>
          <div class="widget-user-image">
            <Image class="img-circle" src={follower.img_url} />
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
                  <h5 class="description-header">{(JSON.parse(follower.following)).length}</h5>
                  <span class="description-text">Following</span>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="description-block">
                  <h5 class="description-header">{(JSON.parse(follower.followers)).length}</h5>
                  <span class="description-text">Followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}
