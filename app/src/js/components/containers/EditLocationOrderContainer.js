import React from 'react';
import { Badge, Nav, NavItem, Row, Col, Button, Grid } from "react-bootstrap";
import classNames from 'classnames';
import Gallery from 'react-photo-gallery';
import connectToStores from 'alt-utils/lib/connectToStores';

import LocationActions from 'LocationActions';
import LocationStore from 'LocationStore';
import NotesActions from 'NotesActions';
import NotesStore from 'NotesStore';
import PhotoActions from 'PhotoActions';
import PhotoStore from 'PhotoStore';
import UserTourActions from 'UserTourActions';

import EditTourForm from '../sub/EditTourForm';
import NotesList from '../sub/NotesList';
import PhotoItem from '../sub/PhotoItem';
import SortableTable from '../sub/SortableTable';
import TourMap from '../gmaps/TourMap';


export default class EditLocationOrderContainer extends React.Component {

  constructor(props) {
    super(props);
    this.tour_id = this.props.tour_id;
    this.state = {
      subselected: 0,
      selected: null,
      photos: []
    };
  }

  __handleClick(index) {
    this.setState({selected: index});
    NotesActions.fetchNotes(this.tour_id, this.props.locations[index].id);
    PhotoActions.fetchPhotos(this.props.locations[index].id);
  }

  __handleSelect(selectedKey) {
    this.setState({subselected: selectedKey});
  }

  __saveOrder() {
    const answer = confirm("Are you sure?");
    if (answer) {
      const new_order = [].map.call(
        document.getElementsByClassName('location-name'),
        ((currentValue, index, collection) => Number(currentValue.id))
      );
      LocationActions.updateOrder(this.tour_id, new_order);
    }
  }

  __deleteLocation(location_id) {
    const answer = confirm("Are you sure"); //TODO: Change this to something nicer
    if (answer) {
      LocationActions.deleteLocation(this.tour_id, location_id);
    }
  }

  render() {

    const location_info = {
      bio: this.props.bio
    };

    // Account for case where no locations have been created
    // TODO: Make this page a lot nicer than it currently is
    if (this.props.locations.length === 0) {
      return (
        <div class="container">
          No Locations Created for tour
        </div>
      );
    }

    const currentlySelected = this.state.selected;

    const EditSelection = currentlySelected === null ? "" : (
      <Nav bsStyle="pills" stacked activeKey={this.state.subselected} onSelect={this.__handleSelect.bind(this)}>
        <NavItem eventKey={0} title="Information">
          <i class="fa fa-info"></i> Information
        </NavItem>
        <NavItem eventKey={1} title="Photos">
          <i class="fa fa-photo"></i> Photos <Badge pullRight>{this.props.photos.length}</Badge>
        </NavItem>
        <NavItem eventKey={2} title="Notes">
          <i class="fa fa-sticky-note"></i> Notes <Badge pullRight>{this.props.notes.length}</Badge>
        </NavItem>
      </Nav>
    );


    const sections = [
      <EditTourForm values={this.props.locations[currentlySelected]} tour_id={this.tour_id} location_info={location_info} />,
      <PhotoItem photos={this.props.photos} location_info={this.props.locations[currentlySelected]}/>,
      <NotesList location={this.props.locations[currentlySelected]} tour_id={this.tour_id} notes={this.props.notes}/>
    ];

    const TourEdit = currentlySelected === null ? "" : sections[this.state.subselected];

    const subSection = currentlySelected === null ? "" : (
        <Grid fluid={true} class="edit_selection">
          <Row>
            <Col md={3}>
              { EditSelection }
              <hr/>
            </Col>
            <Col md={9}>
              { TourEdit }
            </Col>
          </Row>
        </Grid>
    );

    const SortTable = <SortableTable
                        locations={this.props.locations}
                        selected={this.state.selected}
                        __handleClick={this.__handleClick.bind(this)}
                        __deleteLocation={this.__deleteLocation.bind(this)}/>;

    return (
      <div>
        <Row>
          <Col md={7} style={{height: '400px'}}>
            <TourMap
              handleClick={this.__handleClick.bind(this)}
              locations={this.props.locations}
              selected={this.state.selected}/>
          </Col>
          <Col md={5} class="location_reorder">
            {SortTable}
            <Button onClick={this.__saveOrder.bind(this)}> Save new ordering </Button>
          </Col>
        </Row>
        {subSection}
      </div>
    );
  }
}

