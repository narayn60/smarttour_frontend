import React from 'react';
import {Button, Row, Col, Modal } from 'react-bootstrap';
import PhotoEditModal from './PhotoEditModal';
import ProfileActions from 'ProfileActions';

export default class AccountSettings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editPhotoClicked: null,
      imgValue: null,
      showModal: false,
      showDeleteModal: false
    };
  }

  __deleteAccount() {
    this.setState({
      showDeleteModal: true
    });
  }

  __confirmDelete() {
    var quit = false;
    if (confirm("Are you sure that you want to delete your account")) {
      if (confirm("This is your final chance, are you sure?")) {
        //TODO: Delete account and relevant information
      } else {
        quit = true;
      }
    } else {
      quit = true;
    }
    if (quit) {
      this.setState({
        showDeleteModal: false
      });
    }
  }

  __openModal(photo_clicked) {
    this.setState({
      showModal: true,
      editPhotoClicked: photo_clicked
    });
  }

  __closeModal(modal) {
    this.setState({
      [modal]: false
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
      ProfileActions.updateProfilePhoto(this.props.profile.id, formData);
    }
  }


  render() {

    const deleteModal = (
      <Modal show={this.state.showDeleteModal} onHide={() => this.__closeModal('showDeleteModal')}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            If you delete your account all information attatched to your acocunt will be fully delted. This action is
            irreversible so proceed with caution. There is no grace period so only delete if you're totally sure.
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.__confirmDelete()}>Delete My Account</Button>
          <Button onClick={() => this.__closeModal('showDeleteModal')}>Close</Button>
        </Modal.Footer>
      </Modal>
    );

    const images = {photo: this.props.profile.img_url, cover_photo: this.props.profile.cover_url};
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
              <img class="image-responsive account_profile_image" src={this.props.profile.img_url + "?" + new Date().getTime()}/>
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
              <img class="img-responsive account_cover_image" src={images.cover_photo + "?" + new Date().getTime()}/>
            </div>
          </Col>
        </Row>
        <Row class="text-center">
          <Button onClick={() => this.__deleteAccount()}>Delete Account</Button>
        </Row>
        <PhotoEditModal
          title={titles[this.state.editPhotoClicked]}
          showModal={this.state.showModal}
          __closeModal={this.__closeModal.bind(this, 'showModal')}
          img_url={images[this.state.editPhotoClicked]}
          __updateImage={this.__updateImage.bind(this)}
          __uploadImage={this.__uploadImage.bind(this)}
        />
        {deleteModal}
      </div>
    );
  }
}
