import * as React from "react";
import { Button, Table } from "react-bootstrap";
import classNames from 'classnames';
import Global from 'Global';
import AuthStore from 'AuthStore';

if (process.env.BROWSER) {
  var Sortable = require('sortablejs');
}

export default class SortableTable extends React.Component {

  constructor(props) {
    super(props);
  }

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

    console.log("Re-render sortable", this.props.locations);

    const qr_base = Global.backend_url + AuthStore.getUid();

    const Locations = this.props.locations.map((point, i) => {
      const classes = classNames( "table-element", {
        'selected': (this.props.selected === i)
      });
      const qr_link = qr_base + "/" + point.qrcode_path_s3;
      return (
        <tr class={classes}>
          <div onClick={() => this.props.__handleClick(i)}>
          <td>{i}</td>
          <td class="location-name" id={point.id} >{point.name}</td>
          </div>
          <td class="qr-code" id={point.id} >
            <a href={qr_link}>Download QR code</a>
          </td>
          <td class="delete-location" id={point.id} >
          <a href='#' onClick={() => this.props.__deleteLocation(point.id, i)}>Delete Location</a>
          </td>
        </tr>
      );
    });

    if (process.env.BROWSER) {
      return (
        <div>
          <div ref={this.sortableContainersDecorator}>
            <div className="group">
              <h4 className="group-title">Locations</h4>
              <hr/>
              <div>
                <Table responsive condensed hover class="sortable_table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Qr Codes</th>
                      <th>Delete Location</th>
                    </tr>
                  </thead>
                  <tbody ref={this.sortableGroupDecorator}>
                    {Locations}
                  </tbody>
                </Table>
              </div>
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
