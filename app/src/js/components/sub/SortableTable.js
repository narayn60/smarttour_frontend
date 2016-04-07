import * as React from "react";
import { Button, Table } from "react-bootstrap";
import classNames from 'classnames';
import Global from 'Global';
import AuthStore from 'AuthStore';

if (process.env.BROWSER) {
  var Sortable = require('sortablejs');
}

export default class SortableTable extends React.Component {

  sortableContainersDecorator = (componentBackingInstance) => {
    // check if backing instance not null
    if (componentBackingInstance) {

      let options = {
        handle: ".group-title" // Restricts sort start click/touch to the specified element
      };
      Sortable.create(componentBackingInstance, options);
    }
  };

  sortableGroupDecorator = (componentBackingInstance) => {
    // check if backing instance not null
    if (componentBackingInstance) {
      let options = {
        draggable: "tr", // Specifies which items inside the element should be sortable
        group: "shared"
      };
      Sortable.create(componentBackingInstance, options);
    }
  };

  render() {

    const qr_base = Global.backend_url + AuthStore.getUid();

    const Locations = this.props.locations.map((point, i) => {
      const classes = classNames( "table-element", {
        'selected': (this.props.selected === i)
      });
      const qr_link = qr_base + "/" + point.qrcode_path_s3;
      return (
        <tr class={classes} onClick={() => this.props.handleClick(i)}>
          <td>{i}</td>
          <td class="location-name" id={point.id} >{point.name}</td>
          <td class="qr-code" id={point.id} >
            <a href={qr_link}>Download QR code</a>
          </td>
        </tr>
      );
    });

    if (process.env.BROWSER) {
      return (
        <div className="container" ref={this.sortableContainersDecorator}>
          <div className="group">
            <h2 className="group-title">Group 1</h2>
            <div>
              <Table bordered condensed hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Qr Codes</th>
                  </tr>
                </thead>
                <tbody ref={this.sortableGroupDecorator}>
                  {Locations}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}

/* <div>Swap them around</div>
   <div>Swap us around</div>
   <div>Swap things around</div>
   <div>Swap everything around</div> */

/* <div className="group-list" ref={this.sortableGroupDecorator}> */
