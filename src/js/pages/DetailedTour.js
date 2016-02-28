import alt from '../alt';
import React from "react";
import TourStore from '../stores/TourStore';

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
    return (
        <div>
            <h3>Title:  { tour.title }</h3>
            <h4>Created by: { tour.userId }</h4>
            <h4>Tour ID: { tour.id }</h4> 
        </div>
    );
  }
}
