import React from "react";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { IndexLink, Link } from "react-router";
import { NavHeaderLink } from "../sub/NavLink";

export default class NavHeader extends React.Component {
  constructor() {
    super();
    // this.state = {
    //     collapsed: true
    // };
    this.navLinks = [
      {link: '/about', title: 'About'},
      // {link: '/repos', title: 'Repos'},
      {link: '/browse', title: 'Browse'},
      {link: '/tourcreator', title: 'Tour Creation'},
      {link: '/createtour', title: 'Create Tour'},
      {link: '/guides', title: 'Guides'},
      {link: '/login', title: 'Login'},
      {link: '/register', title: 'Register'},
    ].map((links, i) => <NavHeaderLink key={i} path={links.link} name={links.title}/>);
  }


  render() {
    return (
      <Navbar staticTop class="navbar-default">
        <Navbar.Header>
          <Button class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </Button>
          <LinkContainer to={{ pathname: '/'}}>
            <Navbar.Brand>
              Jaffna Tour
            </Navbar.Brand>
          </LinkContainer>
        </Navbar.Header>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            {this.navLinks}
          </ul>
        </div>
      </Navbar>
    );
  }
}

