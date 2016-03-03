import React from "react";
import { NavDropdown, MenuItem, Row } from 'react-bootstrap';
import AuthStore from 'AuthStore';
import Gravatar from 'react-gravatar';
import '../../../css/navbar.scss';


export default class ProfileSettings extends React.Component {

  render() {
    const glyph_classes = 'glyphicon pull-right ';
    const accountOptions = [
      {text: 'Account Settings', glyph: glyph_classes + 'glyphicon-cog', href: '#'},
      {text: 'Logout', glyph: glyph_classes + 'glyphicon-log-out', href: '/logout'}
    ].map((links, i) =>
          <MenuItem eventKey={this.props.dropIndex + (0.1 * (i + 2))} href={links.href}>
          {links.text} 
          <span class={links.glyph}></span>
          </MenuItem>
         );

    const userName = AuthStore.getName();
    const userEmail = AuthStore.getEmail();
    // const userName = "Andrew Stuart";
    // const userEmail = "narayn60@gmail.com";
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

  // <span class="glyphicon glyphicon-user icon-size"></span>
