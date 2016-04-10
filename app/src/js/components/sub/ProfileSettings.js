import React from "react";
import { NavDropdown, MenuItem, Row } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import AuthStore from 'AuthStore';
import Gravatar from 'react-gravatar';


export default class ProfileSettings extends React.Component {

  __rowClick(url) {
    browserHistory.push('/' + url + '/');
  }

  render() {
    const glyph_classes = 'fa pull-right ';
    //TODO: Hook up the settings
    const accountOptions = [
      {text: 'Account Settings', glyph: glyph_classes + 'fa-cog', href: '#'},
      {text: 'My Tours', glyph: glyph_classes + 'fa-map', href: '/profile'},
      {text: 'Logout', glyph: glyph_classes + 'fa-sign-out', href: '/logout'}
    ].map((links, i) =>
      <MenuItem class="profile-dropdown" key={i} eventKey={this.props.dropIndex + (0.1 * (i + 2))} href={links.href}>
        {links.text} 
        <span class={links.glyph}></span>
      </MenuItem>
    );

    const userName = AuthStore.getName();
    const userEmail = AuthStore.getEmail();
    const dropdownTitle = "Hi, " + userName.split(" ", 2)[0];
    const gravatarSize = 100;

    return (
      <NavDropdown class="profile-dropdown" eventkey={this.props.dropIndex} title={dropdownTitle} id="basic-nav-drop down">
        <MenuItem eventKey={this.props.dropIndex + 0.1} class="navbar-login">
          <Row onClick={() => this.__rowClick('profile')}>
            <p class="text-center">
              <Gravatar email={userEmail} size={gravatarSize} https />
            </p>
          </Row>
          <Row>
            <p class="text-center">
              <strong>
                {userName}
              </strong>
            </p>
            <p class="text-center small">
              {userEmail}
            </p>
          </Row>
        </MenuItem>
        {accountOptions}
      </NavDropdown>
    );
  }
}
