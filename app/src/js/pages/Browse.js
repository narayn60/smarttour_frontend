import React from 'react';
import TourContainer from '../components/containers/TourContainer';

export default class Browse extends React.Component {

  render() {

    console.log("Should render browse");

    return (
      <section id="portfolio">
        <div class="container">
          <TourContainer />
        </div>
      </section>
    );
  }
}
