import React from "react";
import PersonalTourStore from 'PersonalTourStore';
import PersonalTourActions from 'PersonalTourActions';
import GuideStore from 'GuideStore';
import GuideActions from 'GuideActions';
import connectToStores from 'alt-utils/lib/connectToStores';

import { Grid, Row, Col, Image, Button, Collapse, Well, Table } from "react-bootstrap";
import { Router, Route, Link, browserHistory } from 'react-router';
import JsonTable from 'react-json-table';
import Gravatar from 'react-gravatar';



export default class TourGuideDetailed extends React.Component {

  constructor(props) {
    super(props);
    this.state = PersonalTourStore.getState();
    this.guide_id = props.guide_id;
  }

  static getStores() {
    return [PersonalTourStore, GuideStore];
  }

  static getPropsFromStores() {
    return {
      ...PersonalTourStore.getState(),
      ...GuideStore.getState(),
    }
  }

  componentWillMount() {
    PersonalTourStore.listen(this.onChange.bind(this));
    GuideStore.listen(this.onChange.bind(this));
    PersonalTourActions.fetchTours(this.guide_id);
    GuideActions.fetchGuide(this.guide_id);
  }

  componentWillUnmount() {
    PersonalTourStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  __rowClick(tour_id) {
    browserHistory.push('/browse/tours/' + tour_id);
  }
  
  render() {

    console.log(this.state.tours);
    const guide = this.state.guide;
    const tourComponent = this.state.tours.map((tour, i) => (
      <div class="member-entry" onClick={() => this.__rowClick(tour.id)}>
        <a href="#" class="member-img">
          <img src={tour.img_url} class="img-rounded"/>
          <i class="fa fa-forward"></i>
        </a>
        <div class="member-details">
          <h4> <a href="#">{tour.name}</a> </h4>
          <div class="row info-list">
            <div>
              {tour.bio}
            </div>
            <div class="clear"></div>
            <Col sm={4}>
              <i class="fa fa-map-marker"></i>
              <a href="#">Location</a>
            </Col>
            <Col sm={4}>
              <i class="fa fa-map-marker"></i>
              <a href="#">Points</a>
            </Col>
            <Col sm={4}>
              <i class="fa fa-linkedin"></i>
              <a href="#">johnkennedy</a>
            </Col>
          </div>
        </div>
      </div>
    ));

    const gravatarSize = 225;

    if (!guide) {
      return (
        <div>
          Guide doesn't exist
        </div>
      );
    }

    return (
      <Grid class="bootstrap snippet">
        <Row>
          <Col md={12}>
            <div class="profile-container">
              <div class="profile-header row">
                <Col md={4} sm={12} class="text-center">
                  <img src="http://bootdey.com/img/Content/user_1.jpg" alt="" class="header-avatar"/>
                </Col>
                <Col md={8} sm={12} class="profile-info">
                  <div class="header-fullname">{guide.full_name}</div>
                  <a href="#" class="btn btn-palegreen btn-sm  btn-follow">
                    <i class="fa fa-check"></i>
                    Following
                  </a>
                  <div class="header-information">
                    Kim is a software developer in Microsoft. She works in ASP.NET MVC Team and collaborates with other teams.
                  </div>
                </Col>
                <Col md={12} sm={12} xs={12} class="profile-stats">
                  <Row>
                    <Col md={4} sm={4} xs={4} class="inlinestats-col">
                      <i class="glyphicon glyphicon-map-marker"></i> Boston
                    </Col>
                    <Col md={4} sm={4} xs={4} class="inlinestats-col">
                      Rate: <strong>$250</strong>
                    </Col>
                    <Col md={4} sm={4} xs={4} class="inlinestats-col">
                      Age: <strong>24</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4} sm={4} xs={4} class="stats-col">
                      <div class="stats-value red">{this.state.tours.length}</div>
                      <div class="stats-title">TOURS</div>
                    </Col>
                    <Col md={4} sm={4} xs={4} class="stats-col">
                      <div class="stats-value red">284</div>
                      <div class="stats-title">FOLLOWING</div>
                    </Col>
                    <Col md={4} sm={4} xs={4} class="stats-col">
                      <div class="stats-value red">803</div>
                      <div class="stats-title">FOLLOWERS</div>
                    </Col>
                  </Row>
                </Col>
              </div>   
            </div>
          </Col>
        </Row>
        <Row>
          {tourComponent}
        </Row>
      </Grid>
    );

    // return (
    //   <div>
    //     <div class="container">
    //       <h3 class="text-center"> {guide.username} </h3>
    //       <Row class="square">
    //         <Col md={8} mdOffset={2} class="user-details">
    //           <Row class="coralbg white">
    //             <Col md={6} class="no-pad">
    //               <div class="user-pad">
    //                 <h3>{ guide.username }</h3>
    //                 <h4 class="white"><i class="fa fa-user"></i> { guide.username } </h4>
    //                 <h4 class="white"><i class="fa fa-envelope-o"></i> { guide.email } </h4>
    //                 <h4 class="white"><i class="fa fa-building"></i> { guide.id } </h4>
    //               </div>
    //             </Col>
    //             <div class="col-md-6 no-pad">
    //               <Gravatar email={guide.email} size={gravatarSize} https />
    //             </div>
    //           </Row>
    //           <Row class="overview">
    //             <Col md={4} class="user-pad text-center">
    //               <h3>FOLLOWERS</h3>
    //               <h4>{guide.followers}</h4>
    //             </Col>
    //             <Col md={4} class="user-pad text-center">
    //               <h3>Tours Created</h3>
    //               <h4>17</h4>
    //             </Col>
    //             <Col md={4} class="user-pad text-center">
    //               <h3>Rank</h3>
    //               <h4>3</h4>
    //             </Col>
    //           </Row>
    //         </Col>
    //       </Row>
    //       <Row class="tourTable">
    //         <Col md={8} mdOffset={2} class="text-center"> 
    //           <Button bsStyle="success" bsSize="large" class="tourButton" onClick={ ()=> this.setState({ open: !this.state.open })}>
    //             See Tours
    //           </Button>
    //           <Collapse in={this.state.open}>
    //             <div>
    //               <Table striped bordered condensed hover class="guideTours">
    //                 <thead>
    //                   <tr>
    //                     <th>Tour Name</th>
    //                     <th>Bio</th>
    //                     <th>Genre</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   {tourComponent}
    //                 </tbody>
    //               </Table>
    //             </div>
    //           </Collapse>
    //         </Col>
    //       </Row>
    //     </div>
    //   </div>
    // );
  }
}

export default connectToStores(TourGuideDetailed);

/* <tr onClick={() => this.__rowClick(tour.id)} key={i}>
   <td>{tour.name}</td>
   <td>{tour.bio}</td>
   <td>{tour.genre}</td>
   </tr> */
