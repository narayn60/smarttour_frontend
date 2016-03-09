import React from 'react';
import LeafMap from '../components/leaflet/LeafMap';
import { Nav, NavItem, MenuItem, Row, Col, Image, Button, Collapse, Well, Table, ListGroup, ListGroupItem } from "react-bootstrap";
import EditTourForm from '../components/sub/EditTourForm';
import classNames from 'classnames';
import MapActions from 'MapActions';
import MapStore from 'MapStore';
import connectToStores from 'alt-utils/lib/connectToStores';


export default class TourDesign extends React.Component {

  constructor() {
    super();
    this.state = MapStore.getState();
    this.state.subselected = 0;
  }

  static getStores() {
    return [MapStore];
  }

  static getPropsFromStores() {
    return MapStore.getState();
  }

  componentWillMount() {
    MapStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    MapStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  onClick(index) {
    if (MapStore.getSelected() === index) {
      MapActions.selected(null);
      this.setState({subselected: 0});
    } else {
      MapActions.selected(index);
    }
    // const newSelected = MapStore.getSelected() === index ? null : index;
    // MapActions.selected(newSelected);
  }

  handleSelect(selectedKey) {
    this.setState({subselected: selectedKey});
  }

  render() {

    const Locations = this.state.points.map((point, i) => {
      const classes = classNames( "table-element", {
        'selected': (MapStore.getSelected() === i)
      });
      return (
        <tr class={classes} onClick={() => this.onClick(i)}> <td>{i}</td>
          <td>{point.name}</td>
        </tr> 
      );
    });

    const currentlySelected = MapStore.getSelected();

    const EditSelection = currentlySelected === null ? "" : (
       <Nav bsStyle="tabs" activeKey={this.state.subselected} onSelect={this.handleSelect.bind(this)}>
          <NavItem eventKey={0} title="Information">Information</NavItem>
          <NavItem eventKey={1} title="Photos">Photos</NavItem>
          <NavItem eventKey={2}>NavItem 3 content</NavItem>
        </Nav>
    );

    const sections = [
        <EditTourForm values={this.state.points[currentlySelected]} />,
        "Temp for photos",
        "Temp for something"
    ];

    const TourEdit = currentlySelected === null ? "" : sections[this.state.subselected];

    return (
      <div class="container">
        <h3> ID: { this.props.params.id } </h3>
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
            <LeafMap points={this.state.points} />
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
