import React from 'react';
import { Image, Button, Modal } from "react-bootstrap";

export default class QRModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  render() {

    const qr_modal = (
      <Modal show={this.state.showModal} onHide={() => this.setState({showModal: false})}>
        <Modal.Header>
          <Modal.Title>Download QR Codes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image class="img-responsive" src={this.props.qr_path} />
        </Modal.Body>
        <Modal.Footer>
          <Button download='QR.png' href={this.props.qr_path}>Download QR Codes</Button>
          <Button bsStyle="primary" onClick={() => this.setState({showModal: false})}>Close</Button>
        </Modal.Footer>
      </Modal>
    );

    var button;
    if (this.props.button_type === "full") {
      button = (
        <Button role="button" class="btn-inverse btn-outlined btn-retainBg btn-brightblue" onClick={() => this.setState({ showModal: true })}>
          <span>{this.props.button_text}</span>
        </Button>
      );
    } else if (this.props.button_type === "link") {
      button = (
        <a onClick={() => this.setState({ showModal: true })}>
        {this.props.button_text}
      </a>
      );
    }

    return (
      <div>
        {button}
        {qr_modal}
      </div>
    );

  }
}
