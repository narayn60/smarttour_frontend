import React from 'react';
import TourGuideContainer from '../components/containers/TourGuideContainer';

export default class Guides extends React.Component {

  render() {
    return (
      <section id="portfolio" class="bg-light-gray">
        <div class="container">
          <TourGuideContainer />
        </div>
      </section>
    );
  }
}
