import React from 'react';
import Global from 'Global';
import AuthStore from 'AuthStore';

import connectToStores from 'alt-utils/lib/connectToStores';
import { Image } from "react-bootstrap";

export default class ImageLoad extends React.Component {

  render() {

	  const path = Global.backend_url + AuthStore.getUid() + this.props.path;
    
    return (
    	<div>
        <Image src={path} rounded />
    	</div>
    );
  }
}

