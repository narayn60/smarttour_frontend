import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { browserHistory } from 'react-router';
import TableImage from './TableImage';
// import UserTourStore from 'UserTourStore';
// import UserTourActions from 'UserTourActions';
import connectToStores from 'alt-utils/lib/connectToStores';


export default class TourTable extends React.Component {

  constructor(props) {
    super(props);
    // this.state = UserTourStore.getState();
  }

  // static getStores() {
  //   return [UserTourStore];
  // }

  // static getPropsFromStores() {
  //   return UserTourStore.getState();
  // }
  
  // componentWillMount() {
  //   UserTourStore.listen(this.onChange.bind(this));
  //   UserTourActions.fetchTours();
  // }

  // componentWillUnmount() {
  //   UserTourStore.unlisten(this.onChange.bind(this));
  // }

  // onChange(state) {
  //   this.setState(state);
  // }

  imageFormatter(cell, row) {
    return <TableImage image_url={cell}/>;
  }

  rowClick(row) {
    browserHistory.push('/mytours/' + row.id);
  }

  render() {

    //TODO: Instead of saying no tours, add button to create tour
    if (this.props.tours.length === 0) {
      return (
          <div>
          No tours created 
          </div>
      );
    }

    // Extra options for the bootstrap table
    const options = {
      onRowClick: this.rowClick
    };

    return (
      <BootstrapTable data={this.props.tours} options={options} hover={true} pagination={true} search={true}>
        <TableHeaderColumn dataField="img_url" width="120px" dataFormat={this.imageFormatter} dataAlign="center">Icon</TableHeaderColumn>
        <TableHeaderColumn dataField="name" isKey={true} dataAlign="center" dataSort={true}>Tour Name</TableHeaderColumn>
        <TableHeaderColumn dataField="followers" dataAlign="center" dataSort={true}>Subscribers</TableHeaderColumn>
        <TableHeaderColumn dataField="points" dataAlign="center" dataSort={true}>Rating</TableHeaderColumn>
      </BootstrapTable>

    );
  }
}

// export default connectToStores(TourTable);

