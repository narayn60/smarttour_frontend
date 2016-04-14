import React from 'react';
import UserTourActions from 'UserTourActions';
import UserTourStore from 'UserTourStore';
import connectToStores from 'alt-utils/lib/connectToStores';
import EditLocationOrderContainer from './EditLocationOrderContainer';
import PersonalTourOverviewContainer from './PersonalTourOverviewContainer';

import LocationActions from 'LocationActions'; import LocationStore from 'LocationStore';
import NotesStore from 'NotesStore';
import PhotoStore from 'PhotoStore';

import { Row, Col, Grid, Image, Button, Modal } from "react-bootstrap";



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

  __updateImage(event) {
    this.setState({
      imgValue: event.target.value
    });
  }

  __uploadImage() {
    if (this.state.imgValue) {
      //TODO: Actually change the photo
    }
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
          bio={this.state.bio}
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
              <img class="img-responsive" src={this.state.tour.img_url} style={{textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}/>
            </Row>
            <Row>
              <Col md={6} class="text-center">
                <div class="input-group" style={{textAlign: 'center'}}>
                  <input type="file" value={this.state.imgValue} onChange={this.__updateImage.bind(this)} name="pic" accept="image/*"/>
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

      return (
        <Grid>
          <Row>
            <div class="cover-container">
              <div class="social-cover"></div>
              <div class="social-avatar">
                <div class="avatar-link" onClick={this.__openModal.bind(this)}>
                  <div class="avatar-hover">
                    <div class="avatar-hover-content">
                      <Row>
                        <i class="fa fa-camera fa-2x"></i>
                      </Row>
                    </div>
                  </div>
                  <img class="img-avatar" src={this.state.tour.img_url}/>
                </div>
                <h4 class="fg-white text-center">{this.state.tour.name}</h4>
                <h5 class="fg-white text-center" style={{opacity: '0.8'}}>{this.state.tour.bio}</h5>
                <hr class="border-black75" style={{borderWidth: '2px'}}/>
                <div class="text-center">
                  <Button role="button" class="btn-inverse btn-outlined btn-retainBg btn-brightblue" onClick={this.__onClick.bind(this)}>
                    <span>{button_text}</span>
                  </Button>
                </div>
              </div>
            </div>
          </Row>
          <Row>
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
