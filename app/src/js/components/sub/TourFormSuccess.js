import React from 'react';
import { Image, Row, Col, Button, Well, Modal, Collapse } from "react-bootstrap";
import ImageLoad from './ImageLoad';
import AuthStore from 'AuthStore';
import Global from 'Global';

export default class TourFormSuccess extends React.Component {

  constructor() {
    super();
    this.state = {
      open: false,
      showModal: false
    };
  }

  render() {

    const qr_path = "/media/tours/" + this.props.newTourID + "/qrcode_grid/";
    const qr_full_path = Global.backend_url + AuthStore.getUid() + qr_path;

    const success_modal = (
        <Modal show={this.state.showModal} onHide={() => this.setState({showModal: false})}>
          <Modal.Header>
            <Modal.Title>Download QR Codes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image class="img-responsive" src={qr_full_path} />
          </Modal.Body>
          <Modal.Footer>
            <Button href={qr_full_path} download="Test">Download QR Codes</Button>
            <Button bsStyle="primary" onClick={() => this.setState({showModal: false})}>Close</Button>
          </Modal.Footer>
        </Modal>
    );


    return (
      <div>
        <h2>Successfully Created {this.props.fieldValues.name}!</h2>
        <Row class="text-center">
          <Button bsStyle="success" bsSize="large" class="tourButton text-center" onClick={() => this.setState({ showModal: true })}>
            Download your QR codes
          </Button>
        </Row>
        {success_modal}
      </div>
    );
  }
}
