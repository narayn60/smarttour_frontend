import alt from '../alt';
import React from "react";
import GuideStore from '../stores/GuideStore';

export default class DetailedGuide extends React.Component {

  constructor() {
    super();
    this.state = {
      guides: GuideStore.getState()
    };
    this.findGuide = this.findGuide.bind(this);
  }

  findGuide(guide) { 
    return guide.id == this.props.params.id;
  } 

  render() {
    var guide = this.state.guides.guides.find(this.findGuide);
    return (
        <div>
            <h3>Name:  { guide.name }</h3>
            <h4>Guide ID: { guide.id }</h4>
            <h4>email: { guide.email }</h4>
            <h4>guide phone: { guide.phone }</h4> 
            <h4>guide username: { guide.username }</h4> 
            <h4>guide website: { guide.website }</h4> 
        </div>
    );
  }
}