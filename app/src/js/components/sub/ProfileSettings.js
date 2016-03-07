import React from "react";
import { NavDropdown, MenuItem, Row } from 'react-bootstrap';
import AuthStore from 'AuthStore';
import Gravatar from 'react-gravatar';


export default class ProfileSettings extends React.Component {

  render() {
    const glyph_classes = 'fa pull-right ';
    const accountOptions = [
      {text: 'Account Settings', glyph: glyph_classes + 'fa-cog', href: '#'},
      {text: 'Logout', glyph: glyph_classes + 'fa-sign-out', href: '/logout'}
    ].map((links, i) =>
          <MenuItem key={i} eventKey={this.props.dropIndex + (0.1 * (i + 2))} href={links.href}>
          {links.text} 
          <span class={links.glyph}></span>
          </MenuItem>
         );

    const userName = AuthStore.getName();
    const userEmail = AuthStore.getEmail();
    const dropdownTitle = "Hi, " + userName.split(" ", 2)[0];
    const gravatarSize = 100;



    return (
      <NavDropdown eventkey={this.props.dropIndex} title={dropdownTitle} id="basic-nav-drop down">
        <MenuItem eventKey={this.props.dropIndex + 0.1} class="navbar-login">
          <Row>
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
