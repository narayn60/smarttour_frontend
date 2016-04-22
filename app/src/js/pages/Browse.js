import React from 'react';
import TourContainer from '../components/containers/TourContainer';

export default class Browse extends React.Component {

  render() {
    console.log("Render browse page");

    return (
      <div class="container" id="portfolio" style={{marginTop: '16px', paddingBottom: '16px'}}>
        <TourContainer />
      </div>
    );
  }
}
