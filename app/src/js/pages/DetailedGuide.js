import React from "react";
import DetailedGuideContainer from '../components/containers/DetailedGuideContainer';

export default class DetailedGuide extends React.Component {

  render() {
    return (
      <div style={{marginTop: '16px'}}>
        <DetailedGuideContainer guide_id={this.props.params.id}/>
      </div>
    );
  }
}
