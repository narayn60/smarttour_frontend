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

  componentWillMount() {
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

  //TODO: Remove?
  // createGuide() {
  //   var profile_photo = "img/team/4.jpg";
  //   var guide = {name: 'Jeff Bridges', bio: 'The boss.', photo: profile_photo};
  //   GuideActions.updateGuide(guide);
  // }

  filterGuides(filter) {
    console.log('filter by ' + filter);
  }

  filterByName(guide) {
    if (guide.name.toLowerCase().match( this.state.searchString )) {
      return true;
    }
    return false;
  }

  handleSearchChange(e) {
    this.setState({searchString: e.target.value.toLowerCase()});
  }


  render() {

    //Search
    var genres = ['Entertainment', 'Historical', 'Art', 'Food & Drink', 'Educational', 'Adult', 'Different'];
    const genreComponent = genres.map((genre, i) => <MenuItem eventKey={i} key={i} onClick={this.filterByName.bind(this, genre)}>{genre}</MenuItem>);

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
          <Row>
            <Col md={4} mdOffset={4} class="text-center search-button-group">
              <Button bsStyle="primary" onClick={this.filterByName.bind(this, 'popular')}> Popular </Button>
              <Button bsStyle="primary" onClick={this.filterByName.bind(this, 'recent')}> Recent </Button>
              <DropdownButton bsStyle="primary" title="Genre" id="bg-nested-dropdown">
                {genreComponent}
              </DropdownButton>
            </Col>
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

