import React from 'react';
import LeafMap from '../components/leaflet/LeafMap';
import { Nav, NavItem, MenuItem, Row, Col, Image, Button, Collapse, Well, Table, ListGroup, ListGroupItem } from "react-bootstrap";
import EditTourForm from '../components/sub/EditTourForm';
import PhotoItem from '../components/sub/PhotoItem';
import classNames from 'classnames';
import MapActions from 'MapActions';
import MapStore from 'MapStore';
import connectToStores from 'alt-utils/lib/connectToStores';
import Gallery from 'react-photo-gallery';
import UserTourStore from 'UserTourStore';


export default class TourDesign extends React.Component {

  constructor(props) {
    super(props);
    this.state = MapStore.getState();
    this.state.subselected = 0;
    this.state.selected = null;
    this.state.tour = UserTourStore.tourInfo(this.props.params.id);
  }

  static getStores() {
    return [MapStore];
  }

  static getPropsFromStores() {
    return MapStore.getState();
  }

  componentWillMount() {
    MapStore.listen(this.onChange.bind(this));
    console.log("Tour id", this.state.tour.id);
    MapActions.fetchLocations(this.state.tour.id);
  }

  componentWillUnmount() {
    MapStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  onClick(index) {
    this.setState({selected: index});
  }

  handleSelect(selectedKey) {
    this.setState({subselected: selectedKey});
  }

  selected(index) {
    this.setState({selected: index});
  }

  render() {

    console.log("TourDesign", this.state.locations);

    const Locations = this.state.locations.map((point, i) => {
      const classes = classNames( "table-element", {
        'selected': (this.state.selected === i)
      });
      return (
        <tr class={classes} onClick={() => this.onClick(i)}> <td>{i}</td>
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
      <EditTourForm values={this.state.locations[currentlySelected]} />,
      <PhotoItem />,
      "Temp for something"
    ];

    const TourEdit = currentlySelected === null ? "" : sections[this.state.subselected];

    return (
      <div class="container">
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
          <Col md={8} mdOffset={1}>
            <LeafMap points={this.state.locations} updateState={this.selected.bind(this)} selectedindex={this.state.selected}/>
          </Col>
        </Row>
        <Row>
          { EditSelection }
          { TourEdit }
        </Row>
      </div>
    );
  }
}

export default connectToStores(TourDesign);
