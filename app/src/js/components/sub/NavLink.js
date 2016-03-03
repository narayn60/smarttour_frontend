// modules/NavLink.js
import React from 'react';
import { Link } from 'react-router';
import { NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class NavLink extends React.Component {
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
}

export class NavHeaderLink extends React.Component {
  render() {
    return (
        <LinkContainer to={{ pathname: this.props.path}}>
        <NavItem class="page-scroll" eventKey={this.props.key}>{this.props.name}</NavItem>
        </LinkContainer>
    );
  }
}
