import React from 'react';
import { Row, Col, Grid, Image, Button, Modal } from "react-bootstrap";
import connectToStores from 'alt-utils/lib/connectToStores';

import LocationActions from 'LocationActions';
import LocationStore from 'LocationStore';
import NotesStore from 'NotesStore';
import PhotoStore from 'PhotoStore';
import UserTourActions from 'UserTourActions';
import UserTourStore from 'UserTourStore';

import EditLocationOrderContainer from './EditLocationOrderContainer';
import PersonalTourOverviewContainer from './PersonalTourOverviewContainer';




export default class TourDesignContainer extends React.Component {

  constructor(props) {
    super(props);
    this.tour_id = props.tour_id;
    UserTourActions.fetchTour(this.tour_id);
    LocationActions.fetchLocations(this.tour_id);
    this.state = {
      overview: true,
      photos: [],
      bio: null,
      showModal: false,
      imgValue: null
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

  componentWillMount() {
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

  __openModal() {
    this.setState({
      showModal: true
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
      formData.append("photo", this.state.imgValue);
      UserTourActions.updateTourPhoto(this.props.tour_id, formData);
    }
  }

  __handleSubmit(e) {
    e.preventDefault();
  }

  render() {

    var chosen_section,
        button_text;

    if (this.state.overview) {
      chosen_section = (
        <PersonalTourOverviewContainer
          locations={this.state.locations}
          tour={this.state.tour}
        />
      );
      button_text = "Edit Tour";
    } else {
      chosen_section = (
        <EditLocationOrderContainer
          locations={this.state.locations}
          tour_id={this.props.tour_id}
          photos={this.state.photos}
          about={this.state.about}
          notes={this.state.notes}
        />
      );
      button_text = "Tour Overview";
    }



    if (this.state.tour && this.state.locations) {
      const tourPhoto_modal = (
        <Modal show={this.state.showModal} onHide={this.__closeModal.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Tour Photo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row style={{textAlign: 'center'}}>
              Current Photo
            </Row>
            <Row>
              <img class="img-responsive" src={this.state.tour.img_url + "?" + new Date().getTime()} style={{textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}/>
            </Row>
            <Row>
              <Col md={6} class="text-center">
                <div class="input-group" style={{textAlign: 'center'}}>
                  <form onSubmit={this.__handleSubmit.bind(this)}>
                    <input type="file" onChange={this.__updateImage.bind(this)} name="pic" accept="image/*"/>
                  </form>
                </div>
              </Col>
              <Col md={6} style={{textAlign: 'center'}}>
                <Button type="submit" onClick={() => this.__uploadImage()} style={{float: 'center'}}>Upload new photo</Button>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.__closeModal.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      );

      const tour_info = [
        {class: "trophy", text: "Rank 1"},
        {class: "users", text: "23 Followers"},
        {class: "map-marker", text: this.state.locations.length + " Points"}
      ].map((info) => (
        <li style={{lineHeight: '40px'}}>
          <i class={"fa fa-2x fa-" + info.class} style={{float: 'left', verticalAlign: 'middle', height: '30px', paddingTop: '8px'}}></i>
          {info.text}
        </li>
      ));


      return (
        <Grid>
          <Row id="cover_row" style={{backgroundImage: 'url(' + this.state.tour.cover_url + ')'}}>
            <div class="social-cover"></div>
            <Col md={3} mdOffset={3} mdPush={6} id="tourcover_right" style={{height: '350px'}}>
                <div class="avatar-link" onClick={this.__openModal.bind(this)}>
                  <div class="avatar-hover">
                    <div class="avatar-hover-content">
                      <Row>
                        <i class="fa fa-camera fa-2x"></i>
                      </Row>
                    </div>
                  </div>
                  <img class="img-avatar" src={this.state.tour.img_url + "?" + new Date().getTime()}/>
                </div>
                <h4 class="fg-white text-center">{this.state.tour.name}</h4>
                <h5 class="fg-white text-center" style={{opacity: '0.8'}}>{this.state.tour.bio}</h5>
                <hr class="border-black75" style={{borderWidth: '2px'}}/>
                <div class="text-center">
                  <Button role="button" class="btn-inverse btn-outlined btn-retainBg btn-brightblue" onClick={this.__onClick.bind(this)}>
                    <span>{button_text}</span>
                  </Button>
                </div>
            </Col>
            <Col md={3} mdPull={6} id="tourcover_left">
              <h5 class="fg-white text-center" style={{opacity: '0.8'}}>Tour Stats</h5>
              <hr class="border-black75" style={{borderWidth: '2px'}}/>
              <ul class="fg-white text-center" style={{opacity: '0.8'}}>
                {tour_info}
              </ul>
            </Col>
          </Row>
          <Row style={{marginTop: '16px'}}>
            {chosen_section}
          </Row>
          {tourPhoto_modal}
        </Grid>
      );
    } else {
      return (
        <Grid>
          Tour Doesn't Exist
        </Grid>
      );
    }

  }
};

export default connectToStores(TourDesignContainer);
