import React from 'react';
import { Navbar, NavItem, NavDropdown, Dropdown, MenuItem, Nav, Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { IndexLink, Link } from 'react-router';
import { NavHeaderLink } from '../sub/NavLink';
import AuthStore from 'AuthStore';
import Gravatar from 'react-gravatar';
import '../../../css/navbar.scss';


export default class NavHeader extends React.Component {
  constructor() {
    super();
    this.links = [
      {link: '/about', title: 'About'},
      {link: '/login', title: 'Login'},
      {link: '/register', title: 'Register'}
    ];
    if (AuthStore.isLoggedIn()) {
      this.links.push(
        {link: '/browse', title: 'Browse'},
        {link: '/tourcreator', title: 'Tour Creation'},
        {link: '/createtour', title: 'Create Tour'},
        {link: '/guides', title: 'Guides'}
      );
    };
    this.navLinks = this.links.map((links, i) => <NavHeaderLink key={i} path={links.link} name={links.title}/>);
  }


  render() {

    const userName = AuthStore.isLoggedIn() ? AuthStore.getName() : "";
    const userGravatar = AuthStore.isLoggedIn() ? <Gravatar https email={AuthStore.getEmail()} /> : "";
    const dropdownIndex = this.navLinks.length + 1;

    let preventDefault = e => e.preventDefault();

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


            <NavDropdown eventkey={dropdownIndex} title="HI" id="basic-nav-dropdown">
              <MenuItem eventKey={dropdownIndex + 0.1}>
                <div class="navbar-login">
                  <Row>
                    <p class="text-center">
                      <span class="glyphicon glyphicon-user icon-size"></span>
                    </p>
                  </Row>
                  <Row>
                    <Col xs={6} md={4}>
                      <p class="text-left"><strong>Salman Khan</strong></p>
                      <p class="text-left small">crazytodevelop@@gmail.com</p>
                      <p class="text-left">
                        <a href="#" class="btn btn-primary btn-block btn-sm">Profile</a>
                      </p>
                    </Col>
                  </Row>
                </div>
              </MenuItem>
              <MenuItem eventKey={dropdownIndex + 0.2} href="#">
                Account Settings
                <span class="glyphicon glyphicon-cog pull-right"></span>
              </MenuItem>
            </NavDropdown>
            {userName}
            {userGravatar}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

//                     <div class="col-lg-4">
//                       <p class="text-center">
//                         <span class="glyphicon glyphicon-user icon-size"></span>
//                       </p>
//                     </div>
//                     <div class="col-lg-8">
//                       <p class="text-left"><strong>Salman Khan</strong></p>
//                       <p class="text-left small">crazytodevelop@@gmail.com</p>
//                       <p class="text-left">
//                         <a href="#" class="btn btn-primary btn-block btn-sm">Profile</a>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </MenuItem>
//               <MenuItem eventKey={dropdownIndex + 0.2} href="#">
//                 Account Settings
//                 <span class="glyphicon glyphicon-cog pull-right"></span>
//               </MenuItem>
//             </NavDropdown>
//             {userName}
//             {userGravatar}
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     );
//   }
// }
