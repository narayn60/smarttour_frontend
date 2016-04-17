import React from 'react';
import ProfileContainer from '../components/containers/ProfileContainer';

export default class Profile extends React.Component {

  render() {
    return (
      <div style={{marginTop: '16px', paddingBottom: '16px'}}>
        <ProfileContainer />
      </div>
    );
  }
}
