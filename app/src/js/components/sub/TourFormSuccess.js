import React from 'react';
import { Image, Row, Col, Button, Modal } from "react-bootstrap";
import AuthStore from 'AuthStore';
import Global from 'Global';
import QRModal from './QRModal';

export default class TourFormSuccess extends React.Component {

  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  render() {

    const qr_full_path = Global.backend_url + AuthStore.getUid() + "/media/tours/" + this.props.newTourID + "/qrcode_grid/";

    return (
      <div>
        <h2>Successfully Created {this.props.fieldValues.name}!</h2>
        <Row class="text-center">
          <QRModal qr_path={qr_full_path} button_text="Download your QR Codes" button_type="full" />
        </Row>
      </div>
    );
  }
}
