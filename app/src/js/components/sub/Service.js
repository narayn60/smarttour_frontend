import React from "react";
import { Image, Row, Col } from 'react-bootstrap';

export default class Service extends React.Component {
  render() {
    const { name, photo, bio, step, path } = this.props;

    return (
        <li class="about-list">
            <Row>
                <div class="about-panel">
                    <h3> Step { step } </h3>
                    <h4>{ name }</h4>
                    <p class="text-muted">{ bio }</p>
                </div>
            </Row>
            <Row>
                <div class="about-image">
                    <Image src={ path } />
                </div>
            </Row>
        </li>
    );
  }
}
