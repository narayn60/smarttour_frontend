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

import SortableTable from '../components/sub/SortableTable';

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
    this.setState({selected: index});
    NotesActions.fetchNotes(this.state.locations[index].id);
  }

  handleSelect(selectedKey) {
    this.setState({subselected: selectedKey});
  }

  saveOrder() {
    var result = [].map.call(
      document.getElementsByClassName('location-name'),
      ((currentValue, index, collection) => currentValue.textContent)
    );
    console.log(result);
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
        <tr class={classes} onClick={() => this.handleClick(i)}>
          <td>{i}</td>
          <td class="location-name">{point.name}</td>
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

    const SortTable = <SortableTable locations={Locations}/>;
    
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
