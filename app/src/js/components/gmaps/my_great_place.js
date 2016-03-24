// import React, {PropTypes, Component} from 'react/addons';
import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import {greatPlaceStyle} from './my_great_place_style.js';

export default class MyGreatPlace extends React.Component {
  static propTypes = {
    text: React.PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div onClick={this.props.onClick} style={greatPlaceStyle}>
          {this.props.text}
       </div>
    );
  }
}
