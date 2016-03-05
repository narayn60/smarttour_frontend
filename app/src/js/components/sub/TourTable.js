import React from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { browserHistory } from 'react-router';
import TableImage from './TableImage';


export default class TourTable extends React.Component {

  constructor() {
    super();
    this.state =
      {
        tours: [
          {
            "name": 'Banksy',
            "id": 1,
            "subscribers": 450,
            "img_url": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Shop_Until_You_Drop_by_Banksy.JPG"
          }, {
            "name": 'Pubs',
            "id": 2,
            "subscribers": 3200,
            "img_url": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Shop_Until_You_Drop_by_Banksy.JPG"
          }, {
            "name": 'History',
            "id": 3,
            "subscribers": 21,
            "img_url": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Shop_Until_You_Drop_by_Banksy.JPG"
          }
        ]
      };
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
      <BootstrapTable data={this.state.tours} options={options} striped={true} hover={true} pagination={true} search={true}>
        <TableHeaderColumn dataField="img_url" dataFormat={this.imageFormatter} dataAlign="center"></TableHeaderColumn>
        <TableHeaderColumn dataField="name" isKey={true} dataAlign="center" dataSort={true}>Tour Name</TableHeaderColumn>
        <TableHeaderColumn dataField="subscribers" dataAlign="center" dataSort={true}>Subscribers</TableHeaderColumn>
      </BootstrapTable>

    );
  }
}

      // <TourCard image_url="http://www.online-image-editor.com//styles/2014/images/example_image.png"/>

