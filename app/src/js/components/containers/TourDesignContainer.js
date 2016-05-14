import React from 'react';
import { Row, Col, Grid, Image, Button, Modal } from "react-bootstrap";
import connectToStores from 'alt-utils/lib/connectToStores';

import pluralize from 'pluralize';

import LocationActions from 'LocationActions';
import LocationStore from 'LocationStore';
import NotesStore from 'NotesStore';
import PhotoStore from 'PhotoStore';
import UserTourActions from 'UserTourActions';
import UserTourStore from 'UserTourStore';

import EditLocationOrderContainer from './EditLocationOrderContainer';
import PersonalTourOverviewContainer from './PersonalTourOverviewContainer';
import PhotoEditModal from '../sub/PhotoEditModal';
import QRModal from '../sub/QRModal';

import Global from 'Global';
import AuthStore from 'AuthStore';


export default class TourDesignContainer extends React.Component {

  constructor(props) {
    super(props);
    this.tour_id = props.tour_id;
    UserTourActions.fetchTour(this.tour_id);
    LocationActions.fetchLocations(this.tour_id);
    this.state = {
      overview: true,
      photos: [],
      audio: [],
      bio: null,
      showModal: false,
      imgValue: null,
      editPhotoClicked: null,
      coverPhotoButtonHover: false
    };
  }

  static getStores() {
    return [NotesStore, LocationStore, PhotoStore, UserTourStore];
  }

  static getPropsFromStores() {
    return {
      ...UserTourStore.getState(),
      ...LocationStore.getState(),
      ...NotesStore.getState(),
      ...PhotoStore.getState()
    };
  }

  componentDidMount() {
    UserTourStore.listen(this.onChange.bind(this));
    LocationStore.listen(this.onChange.bind(this));
    NotesStore.listen(this.onChange.bind(this));
    PhotoStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    UserTourStore.unlisten(this.onChange.bind(this));
    LocationStore.unlisten(this.onChange.bind(this));
    NotesStore.unlisten(this.onChange.bind(this));
    PhotoStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  __onClick() {
    this.setState({
      overview: !this.state.overview
    });
  }

  __openModal(photo_clicked) {
    this.setState({
      showModal: true,
      editPhotoClicked: photo_clicked
    });
  }

  __onCreateLocation() {
    let answer = confirm("Create new location?");
    if (answer) {
      UserTourActions.createLocation(this.tour_id);
      alert("Location successfully created");
    }
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
      UserTourActions.updateTourPhoto(this.props.tour_id, formData);
    }
  }

  __coverPhotoButtonOver() {
    this.setState({
      coverPhotoButtonHover: true
    });
  }

  __coverPhotoButtonOut() {
    this.setState({
      coverPhotoButtonHover: false
    });
  }




  render() {

    if (!this.state.tour || !this.state.locations) {
      return (
        <div>
          <i class="fa fa-spin fa-spinner"></i>
          Tour Loading
        </div>
      );
    }

    var chosen_section,
        button_text,
        button_download_qr,
        button_create_location;

    const qr_link = Global.backend_url + AuthStore.getUid() + '/media/tours/' + this.tour_id + "/qrcode_grid/?" + this.state.location_created;

    if (this.state.overview) {
      chosen_section = (
        <PersonalTourOverviewContainer
          locations={this.state.locations}
          tour={this.state.tour}
        />
      );
      button_text = "Edit Tour";
      button_download_qr = "";
      button_create_location = "";
    } else {
      chosen_section = (
        <EditLocationOrderContainer
          locations={this.state.locations}
          tour_id={this.props.tour_id}
          photos={this.state.photos}
          audio={this.state.audio}
          videos={this.state.videos}
          about={this.state.about}
          notes={this.state.notes}
        />
      );
      button_text = "Tour Overview";
      button_download_qr = (
        <QRModal qr_path={qr_link} button_text="Download QR Codes" button_type="full" />
      );
      button_create_location = (
        <Button role="button" class="btn-inverse btn-outlined btn-retainBg btn-brightblue" onClick={() => this.__onCreateLocation()}>
          Create new Location
        </Button>
      );
    }

    const tour_info = [
      {class: "trophy", text: "Rank 1"},
      {class: "users", text: pluralize("Follower", 0, true)},
      {class: "map-marker", text: pluralize("Location", this.state.locations.length, true)},
      {class: "bookmark", text: this.state.tour.genre}
    ].map((info) => (
      <li style={{lineHeight: '40px'}}>
        <i class={"fa fa-2x fa-" + info.class} style={{float: 'left', verticalAlign: 'middle', height: '30px', paddingTop: '8px'}}></i>
        {info.text}
      </li>
    ));


    const images = {photo: this.state.tour.img_url, cover_photo: this.state.tour.cover_url};
    const titles = {photo: 'Edit Tour Photo', cover_photo: 'Edit Tour Cover'};

    const coverButtonText = this.state.coverPhotoButtonHover ? "Upload cover photo" : "";

    return (
      <Grid>
        <Row id="cover_row" style={{backgroundImage: 'url(' + this.state.tour.cover_url + ')'}}>
          <div class="social-cover"></div>
          <Col md={3} mdOffset={3} mdPush={6} id="tourcover_right" style={{height: '400px'}}>
            <div class="tour_image avatar-link" onClick={() => this.__openModal('photo')}>
              <div class="avatar-hover">
                <div class="avatar-hover-content">
                  <Row>
                    <i class="fa fa-camera fa-2x"></i>
                  </Row>
                </div>
              </div>
              <img class="tour_image img-avatar" src={this.state.tour.img_url + "?" + new Date().getTime()}/>
            </div>
            <h4 class="fg-white text-center">{this.state.tour.name}</h4>
            <h5 class="fg-white text-center" style={{opacity: '0.8'}}>{this.state.tour.bio}</h5>
            <hr class="border-black75" style={{borderWidth: '2px'}}/>
            <div class="text-center">
              <Button role="button" class="btn-inverse btn-outlined btn-retainBg btn-brightblue" onClick={() => this.__onClick()}>
                <span>{button_text}</span>
              </Button>
              {button_download_qr}
              {button_create_location}
            </div>
          </Col>
          <Col md={3} mdPull={6} id="tourcover_left">
            <h5 class="fg-white text-center" style={{opacity: '0.8'}}>Tour Stats</h5>
            <hr class="border-black75" style={{borderWidth: '2px'}}/>
            <ul class="fg-white text-center" style={{opacity: '0.8'}}>
              {tour_info}
            </ul>
          </Col>
          <div style={{position: 'absolute', bottom: '0'}}>
            <Button role="button" class="btn-inverse cover-button btn-retainBg" onClick={() => this.__openModal('cover_photo')} onMouseOver={() => this.__coverPhotoButtonOver()} onMouseOut={() => this.__coverPhotoButtonOut()}>
              <span>
                <i class={"fa fa-camera"}></i>
                {coverButtonText}
              </span>
            </Button>
          </div>
        </Row>
        <Row style={{marginTop: '16px'}}>
          {chosen_section}
        </Row>
        <PhotoEditModal
          title={titles[this.state.editPhotoClicked]}
          showModal={this.state.showModal}
          __closeModal={this.__closeModal.bind(this)}
          img_url={images[this.state.editPhotoClicked]}
          __updateImage={this.__updateImage.bind(this)}
          __uploadImage={this.__uploadImage.bind(this)}
        />
      </Grid>
    );

  }
};

export default connectToStores(TourDesignContainer);
