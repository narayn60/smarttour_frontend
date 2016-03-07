import React from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { browserHistory } from 'react-router';
import TableImage from './TableImage';
import UserTourStore from 'UserTourStore';
import UserTourActions from 'UserTourActions';
import connectToStores from 'alt-utils/lib/connectToStores';


export default class TourTable extends React.Component {

  constructor() {
    super();
    this.state = UserTourStore.getState();
  }

  static getStore() {
    return [UserTourStore];
  }

  static getPropsFromStores() {
    return UserTourStore.getState();
  }
  
  componentWillMount() {
    UserTourStore.listen(this.onChange.bind(this));
    UserTourActions.fetchTours();
  }

  componentWillUnmount() {
    UserTourStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  imageFormatter(cell, row) {
    return <TableImage image_url={cell}/>;
  }

  rowClick(row) {
    browserHistory.push('/mytours/' + row.id);
  }

  render() {

    // Extra options for the bootstrap table
    const options = {
      onRowClick: this.rowClick
    };

    return (
        <BootstrapTable data={this.state.tours} options={options} hover={true} pagination={true} search={true}>
        <TableHeaderColumn dataField="img_url" width="120px" dataFormat={this.imageFormatter} dataAlign="center">Icon</TableHeaderColumn>
        <TableHeaderColumn dataField="name" isKey={true} dataAlign="center" dataSort={true}>Tour Name</TableHeaderColumn>
        <TableHeaderColumn dataField="subscribers" dataAlign="center" dataSort={true}>Subscribers</TableHeaderColumn>
        <TableHeaderColumn dataField="rating" dataAlign="center" dataSort={true}>Rating</TableHeaderColumn>
      </BootstrapTable>

    );
  }
}
