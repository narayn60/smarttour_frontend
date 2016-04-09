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

    const gravatarSize = 75;

    const followers = this.followers.map((follower) => {


      return (

        <tr ondata-status="pagado">
          <td>
            <div class="media">
              <a href="#" class="pull-left">
                <Gravatar class="media-photo" email="narayn60@gmail.com" size={gravatarSize} https />
              </a>
              <div class="table-body">
                <span class="media-meta pull-right">Febrero 13, 2016</span>
                <h4 class="title">
                </h4>
                <p class="summary"></p>
              </div>
            </div>
          </td>
        </tr>
      );
    }
    );

    return (
      <div class="container">
        <Row>
          <section class="content">
            <h1>Followers</h1>
            <div>
              <div class="panel panel-default">
                <div class="panel-body">
                  <div class="table-container">
                    <table class="table table-filter">
                      <tbody>
                        {followers}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Row>
      </div>
    );
  }

}
