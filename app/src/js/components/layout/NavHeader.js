import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { IndexLink, Link } from 'react-router';
import { NavHeaderLink } from '../sub/NavLink';
import AuthStore from 'AuthStore';
import ProfileSettings from '../sub/ProfileSettings';

export default class NavHeader extends React.Component {
  constructor() {
    super();
    
    if (AuthStore.isLoggedIn()) {
      this.links = [
        {link: '/browse', title: 'Browse'},
        {link: '/tourcreator', title: 'Tour Creation'},
        {link: '/createtour', title: 'Create Tour'},
        {link: '/guides', title: 'Guides'}
      ];
    } else {
      this.links = [
        {link: '/about', title: 'About'},
        {link: '/login', title: 'Login'}
        // {link: '/register', title: 'Register'}
      ];
    }

    this.navLinks = this.links.map((links, i) => <NavHeaderLink key={i} path={links.link} name={links.title}/>);
  }


  render() {

    const dropdownIndex = this.navLinks.length + 2;
    const userProfileSettings = AuthStore.isLoggedIn() ? <ProfileSettings dropIndex={dropdownIndex} /> : "";

    // let preventDefault = e => e.preventDefault();


    return (

      <Navbar staticTop class="navbar-default">
        <Navbar.Header>
          <LinkContainer to={{ pathname: '/'}}>
            <Navbar.Brand>
              Jaffna Tour
            </Navbar.Brand>
          </LinkContainer>
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            {this.navLinks}
            {userProfileSettings}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
