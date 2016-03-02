import React from 'react';

export default class Tour extends React.Component {
    render() {
        const { title } = this.props.params;
        return (
            <div>
              <h2>{ title }</h2>
            </div>
        );
    }
}
