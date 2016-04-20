import React from 'react';
import { Row, Col, Grid, Image, Button, Modal } from "react-bootstrap";

export default class PhotoEditModal extends React.Component {

  constructor(props) {
    super(props);
  }

  __handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.__closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{textAlign: 'center'}}>
            Current Photo
          </Row>
          <Row>
            <img class="img-responsive" src={this.props.img_url + "?" + new Date().getTime()} style={{textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}/>
          </Row>
          <Row>
            <Col md={6} class="text-center">
              <div class="input-group" style={{textAlign: 'center'}}>
                <form onSubmit={this.__handleSubmit.bind(this)}>
                  <input type="file" onChange={this.props.__updateImage} name="pic" accept="image/*"/>
                </form>
              </div>
            </Col>
            <Col md={6} style={{textAlign: 'center'}}>
              <Button type="submit" onClick={this.props.__uploadImage} style={{float: 'center'}}>Upload new photo</Button>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.__closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
