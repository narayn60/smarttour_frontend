import React from "react";
import connectToStores from 'alt-utils/lib/connectToStores';
import { Image, NavDropdown, MenuItem, Row } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import AuthStore from 'AuthStore';
import Gravatar from 'react-gravatar';
import ProfileStore from 'ProfileStore';
import ProfileActions from 'ProfileActions';


export default class ProfileSettings extends React.Component {

  constructor() {
    super();
    this.state = {
      profile: null
    };
  }

  static getStores() {
    return [ProfileStore];
  }

  static getPropsFromStores() {
    return {
      ...ProfileStore.getState()
    };
  }

  componentDidMount() {
    ProfileStore.listen(this.onChange.bind(this));
    ProfileActions.getProfile();
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  __rowClick(url) {
    browserHistory.push('/' + url + '/');
  }

  render() {

    if (!this.state.profile) {
      return (
          <div>
          </div>
      );
    }

    const profile = this.state.profile;

    const glyph_classes = 'fa pull-right ';
    //TODO: Hook up the settings
    const accountOptions = [
      // {text: 'Account Settings', glyph: glyph_classes + 'fa-cog', href: '#'},
      {text: 'My Tours', glyph: glyph_classes + 'fa-map', href: '/profile'},
      {text: 'Logout', glyph: glyph_classes + 'fa-sign-out', href: '/logout'}
    ].map((links, i) =>
      <MenuItem class="profile-dropdown" key={i} eventKey={this.props.dropIndex + (0.1 * (i + 2))} href={links.href}>
        {links.text} 
        <span class={links.glyph}></span>
      </MenuItem>
    );

    const dropdownTitle = "Hi, " + profile.full_name.split(" ", 2)[0];

    return (
      <NavDropdown class="profile-dropdown" eventkey={this.props.dropIndex} title={dropdownTitle} id="basic-nav-drop down">
        <MenuItem eventKey={this.props.dropIndex + 0.1} class="navbar-login">
          <Row onClick={() => this.__rowClick('profile')}>
            <p class="text-center">
              <Image src={profile.img_url} style={{height: '100px', width: '100px'}} />
            </p>
          </Row>
          <Row>
            <p class="text-center">
              <strong>
                {profile.full_name}
              </strong>
            </p>
            <p class="text-center small">
              {profile.email}
            </p>
          </Row>
        </MenuItem>
        {accountOptions}
      </NavDropdown>
    );
  }
}

export default connectToStores(ProfileSettings);
