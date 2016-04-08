import React from 'react';
import TourDesignContainer from '../components/containers/TourDesignContainer';
import EditLocationOrderContainer from '../components/containers/EditLocationOrderContainer';

export default class TourDesign extends React.Component {

  render() {
    return (
      <div>
        <TourDesignContainer tour_id={this.props.params.id}/>
      </div>
    );
  }
}


        {/* <EditLocationOrderContainer tour_id={this.props.params.id}/> */}
