import React from 'react';
import { Nav, NavItem, MenuItem, Row, Col, Image, Button, Collapse, Well, Table, ListGroup, ListGroupItem } from "react-bootstrap";
import EditTourForm from '../components/sub/EditTourForm';
import PhotoItem from '../components/sub/PhotoItem';
import classNames from 'classnames';

import MapActions from 'MapActions';
import MapStore from 'MapStore';
import NotesActions from 'NotesActions';
import NotesStore from 'NotesStore';

import connectToStores from 'alt-utils/lib/connectToStores';

import Gallery from 'react-photo-gallery';
import UserTourStore from 'UserTourStore';

import TourMap from '../components/gmaps/TourMap';


export default class TourDesign extends React.Component {

  constructor(props) {
    super(props);
    this.state = MapStore.getState();
    this.state.subselected = 0;
    this.state.selected = null; //Currently selected map point
    this.state.tour = UserTourStore.tourInfo(this.props.params.id);
  }

  static getStores() {
    return [NotesStore, MapStore];
  }

  static getPropsFromStores() {
    return {
      ...MapStore.getState(),
      ...NotesStore.getState()
    }
  }

  componentWillMount() {
    MapStore.listen(this.onChange.bind(this));
    NotesStore.listen(this.onChange.bind(this));
    MapActions.fetchLocations(this.state.tour.id);
  }

  componentWillUnmount() {
    MapStore.unlisten(this.onChange.bind(this));
    NotesStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(index) {
    console.log("Handle click callled", index);
    this.setState({selected: index});
    NotesActions.fetchNotes(this.state.locations[index].id);
  }

  handleSelect(selectedKey) {
    this.setState({subselected: selectedKey});
  }

  render() {

    // Account for case where no locations have been created
    if (this.state.locations.length === 0) {
      return (
        <div>
          No Locations Created for tour
        </div>
      );
    }

    const Locations = this.state.locations.map((point, i) => {
      const classes = classNames( "table-element", {
        'selected': (this.state.selected === i)
      });
      return (
        <tr class={classes} onClick={() => this.handleClick(i)}> <td>{i}</td>
          <td>{point.name}</td>
        </tr>
      );
    });

    const currentlySelected = this.state.selected;

    const EditSelection = currentlySelected === null ? "" : (
      <Nav bsStyle="tabs" activeKey={this.state.subselected} onSelect={this.handleSelect.bind(this)}>
        <NavItem eventKey={0} title="Information">Information</NavItem>
        <NavItem eventKey={1} title="Photos">Photos</NavItem>
        <NavItem eventKey={2}>NavItem 3 content</NavItem>
      </Nav>
    );

    const sections = [
      <EditTourForm values={this.state.locations[currentlySelected]} notes={this.state.notes}/>,
      <PhotoItem />,
      "Temp for something"
    ];

    const TourEdit = currentlySelected === null ? "" : sections[this.state.subselected];

    return (
      <div>
        <div class="container">
          <h3> { this.state.tour.name } </h3>
        </div>
        <div style={{height: '400px', position: 'relative', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: '62%', height: '100%'}}>
            <TourMap
              handleClick={this.handleClick.bind(this)}
              locations={this.props.locations}
              selected={this.state.selected}/>
          </div>
          <div style={{position: 'absolute', right: 0, top: 0, width: '38%', height: '100%'}}>
            <Table bordered condensed hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {Locations}
              </tbody>
            </Table>
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


/* <div class="container">
   <h3> { this.state.tour.name } </h3>
   <Row>
   <Col md={3}>
   <Table bordered condensed hover>
   <thead>
   <tr>
   <th>#</th>
   <th>Name</th>
   </tr>
   </thead>
   <tbody>
   {Locations}
   </tbody>
   </Table>
   </Col>
   <Col md={8} mdOffset={1} style={{height: "400px", width: "80%"}}>
   <div style={{height: '100%', position: 'relative', overflow: 'hidden'}}>
   <div style={{position: 'absolute', left: 0, top: 0, width: '38%', height: '100%'}}>
   </div>
   <div style={{position: 'absolute', right: 0, top: 0, width: '62%', height: '100%'}}>
   <TourMap
   handleClick={this.handleClick.bind(this)}
   locations={this.props.locations}
   selected={this.state.selected}/>
   </div>
   </div>
   </Col>
   </Row>
   <Row>
   { EditSelection }
   { TourEdit }
   </Row>
   </div> */
