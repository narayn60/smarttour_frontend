import * as React from "react";
import { Button, Table, OverlayTrigger, Popover } from "react-bootstrap";
import classNames from 'classnames';
import Global from 'Global';
import AuthStore from 'AuthStore';
import QRModal from './QRModal';

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

    console.log("re-render sortable table", this.props.selected);
    const qr_base = Global.backend_url + AuthStore.getUid();

    const Locations = this.props.locations.map((point, i) => {
      const classes = classNames( "table-element", {
        'selected': (this.props.selected === i)
      });
      const exist_icon = point.exists ? "check" : "times";
      const exist_color = point.exists ? "green" : "red";
      const qr_link = qr_base + "/" + point.qrcode_path_s3;
      return (
        <tr class={classes} onClick={() => this.props.__handleClick(i)}>
          <td>{i}</td>
          <td class="location-name" id={point.id} >{point.name}</td>
          <td class="qr-code" id={point.id} >
            <QRModal qr_path={qr_link} button_text="Download QR Code" button_type="link" />
          </td>
          <td class="delete-location" id={point.id} >
            {/* <a href='#' onClick={() => this.props.__deleteLocation(point.id, i)}>Delete Location</a> */}
            <a href='#' onClick={this.props.__deleteLocation.bind(this, point.id, i)}>Delete Location</a>
          </td>
          <td class="currently-active" id={point.id} >
            <i class={"fa fa-" + exist_icon} aria-hidden="true" style={{color: exist_color}}></i>
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
                      <OverlayTrigger trigger="hover" placement="top" overlay={<Popover title="Description">
                        <i class="fa fa-check" aria-hidden="true" style={{color: "green"}}>
                                                                        QR Code Still Active
                        </i>
                        <i class="fa fa-times" aria-hidden="true" style={{color: "red"}}>
                                                                        QR Code Reported Destroyed or Missing
                        </i>

                      </Popover>}>
                      <th>Currently Active</th>
                      </OverlayTrigger>
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
