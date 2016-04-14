import React from 'react';
import Gravatar from 'react-gravatar';
import { Row, Col, Button } from "react-bootstrap";
import GuideStore from 'GuideStore';
import GuideActions from 'GuideActions';
import connectToStores from 'alt-utils/lib/connectToStores';

export default class FollowingList extends React.Component {

  constructor(props) {
    super(props);
    this.state = GuideStore.getState();
    this.checked = new Set();
  }

  static getStores() {
    return [GuideStore];
  }

  static getPropsFromStores() {
    return GuideStore.getState();
  }

  componentWillMount() {
    GuideStore.listen(this.onChange.bind(this));
    GuideActions.fetchMyFollowing();
  }

  componentWillUnmount() {
    GuideStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    const gravatarSize = 125;

    const following = this.state.guides.map((following) => {

      return (
        <Col md={6}>
          <div class="box box-widget widget-user">
            <div class="widget-user-header bg-yellow" style={{background: 'url("http://lorempixel.com/500/320/nature/1/") center center;'}}>
              <h3 class="widget-user-username">{following.full_name}</h3>
              <h5 class="widget-user-desc">{following.email}</h5>
            </div>
            <div class="widget-user-image">
              <Gravatar class="img-circle" email={following.email} size={gravatarSize} https />
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
    );

    return (
      <div>
        {following}
      </div>
    );
  }

}

export default connectToStores(FollowingList);
