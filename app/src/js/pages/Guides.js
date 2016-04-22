import React from 'react';
import TourGuideContainer from '../components/containers/TourGuideContainer';

export default class Guides extends React.Component {

  render() {
    console.log("Render guides page");

    return (
      <div style={{marginTop: '16px'}}>
        <TourGuideContainer />
      </div>
    );
  }
}
