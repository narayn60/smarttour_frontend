import React from 'react';
import { Nav, NavItem, MenuItem, Row, Col, Image, Button, Collapse, Well, Table, ListGroup, ListGroupItem } from "react-bootstrap";
import EditTourForm from '../components/sub/EditTourForm';
import PhotoItem from '../components/sub/PhotoItem';
import classNames from 'classnames';

import LocationActions from 'LocationActions';
import LocationStore from 'LocationStore';
import NotesActions from 'NotesActions';
import NotesStore from 'NotesStore';
import PhotoActions from 'PhotoActions';
import PhotoStore from 'PhotoStore';

import connectToStores from 'alt-utils/lib/connectToStores';

import Gallery from 'react-photo-gallery';
import UserTourStore from 'UserTourStore';

import TourMap from '../components/gmaps/TourMap';

import SortableTable from '../components/sub/SortableTable';

import UserTourActions from 'UserTourActions';

export default class TourDesign extends React.Component {

  constructor(props) {
    super(props);
    this.tour_id = this.props.params.id;
    UserTourActions.fetchTour(this.tour_id);
    LocationActions.fetchLocations(this.tour_id);
    this.state = LocationStore.getState();
    Object.assign(this.state, {
      subselected: 0,
      selected: null
    });
  }

  static getStores() {
    return [NotesStore, LocationStore, PhotoStore];
  }

  static getPropsFromStores() {
    return {
      ...LocationStore.getState(),
      ...NotesStore.getState(),
      ...PhotoStore.getState(),
      ...UserTourStore.getState()
    };
  }

  componentWillMount() {
    LocationStore.listen(this.onChange.bind(this));
    NotesStore.listen(this.onChange.bind(this));
    PhotoStore.listen(this.onChange.bind(this));
    UserTourStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    LocationStore.unlisten(this.onChange.bind(this));
    NotesStore.unlisten(this.onChange.bind(this));
    PhotoStore.unlisten(this.onChange.bind(this));
    UserTourStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  __handleClick(index) {
    this.setState({selected: index});
    NotesActions.fetchNotes(this.tour_id, this.state.locations[index].id);
    PhotoActions.fetchPhotos(this.state.locations[index].id);
  }

  __handleSelect(selectedKey) {
    this.setState({subselected: selectedKey});
  }

  __saveOrder() {
    //TODO: Make it so it extracts the relevant tour id so we can re-order the tour on the server
    const new_order = [].map.call(
      document.getElementsByClassName('location-name'),
      ((currentValue, index, collection) => Number(currentValue.id)) //textContent for inner text
    );
    LocationActions.updateOrder(this.tour_id, new_order);
  }

  __deleteLocation(location_id) {
    const answer = confirm("Are you sure"); //TODO: Change this to something nicer
    if (answer) {
      LocationActions.deleteLocation(this.tour_id, location_id);
    }
  }

  render() {

    const location_info = {
      bio: this.state.bio
    };

    // Account for case where no locations have been created
    // TODO: Make this page a lot nicer than it currently is
    if (this.state.locations.length === 0) {
      return (
        <div class="container">
          No Locations Created for tour
        </div>
      );
    }

    const currentlySelected = this.state.selected;

    const EditSelection = currentlySelected === null ? "" : (
      <Nav bsStyle="tabs" activeKey={this.state.subselected} onSelect={this.__handleSelect.bind(this)}>
        <NavItem eventKey={0} title="Information">Information</NavItem>
        <NavItem eventKey={1} title="Photos">Photos</NavItem>
        <NavItem eventKey={2}>NavItem 3 content</NavItem>
      </Nav>
    );

    const sections = [
      <EditTourForm values={this.state.locations[currentlySelected]} tour_id={this.tour_id} location_info={location_info} />,
      <PhotoItem photos={this.state.photos} location_info={this.state.locations[currentlySelected]}/>,
      "Temp for something"
    ];

    const TourEdit = currentlySelected === null ? "" : sections[this.state.subselected];

    const SortTable = <SortableTable
                        locations={this.state.locations}
                        selected={this.state.selected}
                        __handleClick={this.__handleClick.bind(this)}
                        __deleteLocation={this.__deleteLocation.bind(this)}/>;
    
    return (
      <div>
        <div class="container">
          <h3> { this.state.tour.name } </h3>
        </div>
        <div style={{height: '400px', position: 'relative', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: '52%', height: '100%'}}>
            <TourMap
              handleClick={this.__handleClick.bind(this)}
              locations={this.state.locations}
              selected={this.state.selected}/>
          </div>
          <div style={{position: 'absolute', right: 0, top: 0, width: '48%', height: '100%'}}>
            {SortTable}
            <Button onClick={this.__saveOrder.bind(this)}> Save new ordering </Button>
          </div>
        </div>
        <div class="container">
          <Row>
            { EditSelection }
            { TourEdit }
          </Row>
        </div>
      </div>
    );
  }
}

export default connectToStores(TourDesign);
