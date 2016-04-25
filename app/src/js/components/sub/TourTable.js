import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { browserHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import TableImage from './TableImage';


export default class TourTable extends React.Component {

  constructor(props) {
    super(props);
  }

  imageFormatter(cell, row) {
    return <TableImage image_url={cell}/>;
  }

  rowClick(row) {
    browserHistory.push('/mytours/' + row.id);
  }

  render() {

    console.log("Tours", this.props.tours);

    //TODO: Instead of saying no tours, add button to create tour
    if (this.props.tours.length === 0) {
      return (
        <div>
          <div>
            No tours created 
          </div>
          <div class="text-center">
            <Button onClick={() => browserHistory.push('/createtour')}>Create New Tour</Button>
          </div>
        </div>
      );
    }

    // Extra options for the bootstrap table
    const options = {
      onRowClick: this.rowClick
    };

    return (
        <BootstrapTable data={this.props.tours} options={options} hover={true} pagination={true} condensed={true} search={true} striped={false} bordered={false}>
        <TableHeaderColumn dataField="img_url" width="120px" dataFormat={this.imageFormatter} dataAlign="center">Icon</TableHeaderColumn>
        <TableHeaderColumn dataField="name" isKey={true} dataAlign="center" dataSort={true}>Tour Name</TableHeaderColumn>
        <TableHeaderColumn dataField="followers" dataAlign="center" dataSort={true}>Followers</TableHeaderColumn>
        <TableHeaderColumn dataField="points" dataAlign="center" dataSort={true}>Locations Specified</TableHeaderColumn>
      </BootstrapTable>

    );
  }
}
