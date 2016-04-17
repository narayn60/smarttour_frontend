import React from 'react';
import {Button, Row, Col } from 'react-bootstrap';
import PhotoEditModal from './PhotoEditModal';

export default class AccountSettings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editPhotoClicked: null,
      imgValue: null,
      showModal: false
    };
  }

  __deleteAccount() {
    //TODO: Make this into a modal
    alert("Are you sure");
  }

  __openModal(photo_clicked) {
    this.setState({
      showModal: true,
      editPhotoClicked: photo_clicked
    });
  }

  __closeModal() {
    this.setState({
      showModal: false
    });
  }

  __updateImage(e) {
    const file = e.target.files[0];
    this.setState({
      imgValue: file
    });
  }

  __uploadImage() {
    if (this.state.imgValue) {
      // Do it here to avoid rewriting functionality
      const formData = new FormData();
      formData.append(this.state.editPhotoClicked, this.state.imgValue);
      /* UserTourActions.updateTourPhoto(this.props.tour_id, formData); */
    }
  }


  render() {

    const temp_image = 'http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?144847670';
    const images = {photo: temp_image, cover_photo: temp_image};
    const titles = {photo: 'Edit Profile Photo', cover_photo: 'Edit Cover Photo'};

    return(
      <div>
        <Row id="account_settings">
          <Col md={4}>
            <h5>Profile Image</h5>
            <div class="account_profile_image avatar-link" onClick={() => this.__openModal('photo')}>
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
            <div class="account_cover_image avatar-link" onClick={() => this.__openModal('cover_photo')}>
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
        <PhotoEditModal
          title={titles[this.state.editPhotoClicked]}
          showModal={this.state.showModal}
          __closeModal={this.__closeModal.bind(this)}
          img_url={images[this.state.editPhotoClicked]}
          __updateImage={this.__updateImage.bind(this)}
          __uploadImage={this.__uploadImage.bind(this)}
        />
      </div>
    );
  }
}
