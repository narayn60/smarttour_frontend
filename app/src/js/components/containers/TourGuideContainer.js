import React from 'react';
import GuideStore from 'GuideStore';
import GuideActions from 'GuideActions';
import connectToStores from 'alt-utils/lib/connectToStores';
import TourGuide from '../sub/TourGuide';
import { Grid, Row, Col, Button, DropdownButton, MenuItem } from "react-bootstrap";

export default class TourGuideContainer extends React.Component {

  constructor() {
    super();
    this.state = GuideStore.getState();
    this.state = {'searchString': ''};
    this.filterByName = this.filterByName.bind(this);
  }

  static getStores() {
    return [GuideStore];
  }

  static getPropsFromStores() {
    return GuideStore.getState();
  }

  componentDidMount() {
    GuideStore.listen(this.onChange.bind(this));
    GuideActions.fetchGuides();
  }

  componentWillUnmount() {
    GuideStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  reloadGuides() {
    GuideActions.fetchGuides();
  }

  filterByName(guide) {
    if (guide.full_name != null) {
      if (guide.full_name.toLowerCase().match(this.state.searchString.toLowerCase())) {
        return true;
      }
    }
    else {
      return false;
    }
  };

  handleSearchChange(e) {
    this.setState({searchString: e.target.value});
  }

  render() {

    if (!this.state.guides) {
      return (
        <div>
          <i class="fa fa-spin fa-spinner"></i>
          Loading Guides
        </div>
      );
    }

    var GuidesComponent = this.state.guides.map((guide, i) => <TourGuide key={i} guide={guide}/>);
    var searchString = this.state.searchString.trim().toLowerCase();
    var filteredGuides = [];

    if(searchString.length > 0) {
      filteredGuides = this.state.guides.filter(this.filterByName);
      GuidesComponent = filteredGuides.map((guide, i) => <TourGuide key={i} guide={guide}/>);
    }

    return (
      <div>
        <Grid class="border_box" id="guides_title">
          <Row class="text-center">
            <h2 class="section-heading">Guides</h2>
            <h3 class="section-subheading">Explore</h3>
          </Row>
          <Row>
            <input class="searchTour" type="text" value={this.state.searchString} onChange={this.handleSearchChange.bind(this)} placeholder="search" />
          </Row>
        </Grid>
        <Grid class="border_box" id="guides_list">
          <Row>
            {GuidesComponent}
          </Row>
        </Grid>
      </div>

    );
  }
}

export default connectToStores(TourGuideContainer);

