import React from 'react';
import Gravatar from 'react-gravatar';
import { Row, Col, Button } from "react-bootstrap";
import Follower from './Follower';
import GuideStore from 'GuideStore';
import GuideActions from 'GuideActions';
import connectToStores from 'alt-utils/lib/connectToStores';

export default class MyFollowing extends React.Component {

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
  }

  componentDidMount() {
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

    const followers = this.state.following.map((follower) => {

      return (
        <Follower guide={follower} />
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

export default connectToStores(MyFollowing);
