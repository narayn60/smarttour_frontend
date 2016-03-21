import alt from 'alt_base';
import React from "react";
import TourStore from 'TourStore';
import TourDetailed from "../components/sub/TourDetailed";

export default class DetailedTour extends React.Component {

  constructor() {
    super();
    this.state = {
      tours: TourStore.getState()
    };
    this.findTour = this.findTour.bind(this);
  }

  findTour(tour) { 
    return tour.id == this.props.params.id;
  } 

  render() {
    var tour = this.state.tours.tours.find(this.findTour);
    const DetailedTourPage = <TourDetailed tour = {tour}/>;

    return (
        <div>
          {DetailedTourPage}
        </div>
    );
  }
}
