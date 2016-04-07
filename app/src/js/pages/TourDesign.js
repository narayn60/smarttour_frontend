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
    UserTourActions.fetchTour(this.props.params.id);
    LocationActions.fetchLocations(this.props.params.id);
    this.state = LocationStore.getState();
    this.state.subselected = 0;
    this.state.selected = null; //Currently selected
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
    NotesActions.fetchNotes(this.state.locations[index].id);
    PhotoActions.fetchPhotos(this.state.locations[index].id);
  }

  __handleSelect(selectedKey) {
    this.setState({subselected: selectedKey});
  }

  saveOrder() {
    //TODO: Make it so it extracts the relevant tour id so we can re-order the tour on the server
    var result = [].map.call(
      document.getElementsByClassName('location-name'),
      ((currentValue, index, collection) => currentValue.id) //textContent for inner text
    );
  }

  render() {

    console.log("Trying to render", this.state);

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
      <EditTourForm values={this.state.locations[currentlySelected]} location_info={location_info} />,
      <PhotoItem photos={this.state.photos} location_info={this.state.locations[currentlySelected]}/>,
      "Temp for something"
    ];

    const TourEdit = currentlySelected === null ? "" : sections[this.state.subselected];

    const SortTable = <SortableTable locations={this.state.locations} selected={this.state.selected} handleClick={this.__handleClick.bind(this)}/>;
    
    return (
      <div>
        <div class="container">
          <h3> { this.state.tour.name } </h3>
        </div>
        <div style={{height: '400px', position: 'relative', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: '62%', height: '100%'}}>
            <TourMap
              handleClick={this.__handleClick.bind(this)}
              locations={this.state.locations}
              selected={this.state.selected}/>
          </div>
          <div style={{position: 'absolute', right: 0, top: 0, width: '38%', height: '100%'}}>
            {SortTable}
            <Button onClick={this.saveOrder.bind(this)}> Save new ordering </Button>
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
