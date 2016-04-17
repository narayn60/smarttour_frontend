import React from 'react';
import {Button, Row, Col } from 'react-bootstrap';

export default class AccountSettings extends React.Component {

  constructor(props) {
    super(props);
  }

  __deleteAccount() {
    //TODO: Make this into a modal
    alert("Are you sure");
  }
  
  render() {
    return(
      <div>
        <Row id="account_settings">
          <Col md={4}>
            <h5>Profile Image</h5>
            <div class="account_profile_image avatar-link">
              <div class="avatar-hover" style={{borderRadius: '0px'}}>
                <div class="avatar-hover-content">
                  <Row>
                    <i class="fa fa-camera fa-2x"></i>
                  </Row>
                </div>
              </div>
              <img class="image-responsive account_profile_image" src='http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701'/> 
            </div>
          </Col>
          <Col md={8}>
            <h5>Cover Photo</h5>
            <div class="account_cover_image avatar-link">
              <div class="avatar-hover" style={{borderRadius: '0px'}}>
                <div class="avatar-hover-content">
                  <Row>
                    <i class="fa fa-camera fa-2x"></i>
                  </Row>
                </div>
              </div>
              <img class="img-responsive account_cover_image" src='http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701'/> 
            </div>
          </Col>
        </Row>
        <Row class="text-center">
          <Button onClick={() => this.__deleteAccount()}>Delete Account</Button>
        </Row>
      </div>
    );
  }
}
