import React from 'react';
import Gravatar from 'react-gravatar';
import { Row, Col, Button } from "react-bootstrap";

export default class FollowersList extends React.Component {

  constructor(props) {
    super(props);
    this.checked = new Set();
    this.followers = [1,2,2,3];
  }

  render() {

    const gravatarSize = 125;

    const followers = this.followers.map((follower) => {


      return (
        <Col md={4} sm={6} class="follower-item">
          <div class="ibox-content text-center">
            <h2 class="h-name">Andrew Stuart</h2>
            <div class="m-b-sm">
              <Gravatar class="img-circle circle-border" email="narayn60@gmail.com" size={gravatarSize} https />
            </div>
            <p></p>
            <div class="text-center">
              <span>narayn60@gmail.com</span>
              {/* <a class="btn btn-xs btn-default"><i class="fa fa-thumbs-up"></i>  </a>
              <a class="btn btn-xs btn-info"><i class="fa fa-heart"></i> </a>
              <a class="btn btn-xs btn-primary"><i class="fa fa-envelope"></i> </a>
              <a class="btn btn-xs btn-success"><i class="fa fa-phone"></i> </a> */}
            </div>
          </div>
        </Col>
      );
    }
    );

    return (
      <div>
      {followers}
        </div>
    );
  }

}
