import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import ReactDOMServer from 'react-dom/server';
import Global from 'Global';
import AuthStore from 'AuthStore';
import '../../../../node_modules/react-dropzone-component/styles/filepicker.css';
import '../../../../node_modules/dropzone/dist/min/dropzone.min.css';
import PhotoActions from 'PhotoActions';

export default class DropZone extends React.Component {

  render() {

    let location_id = this.props.location_id;

    var djsConfig = {
      paramName: 'photo',
      addRemoveLinks: true,
      acceptedFiles: "image/jpeg,image/png,image/gif"
    };

    var componentConfig = {
      iconFiletypes: ['.jpg', '.png', '.gif'],
      showFiletypeIcon: true,
      postUrl: Global.backend_url + AuthStore.getUid() + '/locations/' + location_id + '/photos/'
    };

    var removeFile = function () {
      //TODO: Need to be able to actually remove file on backend
      // alert("Delted file");
    };

    var uploadedFile = function () {
      PhotoActions.fetchPhotos(location_id);
    };

    var eventHandlers = {
      // This one receives the dropzone object as the first parameter
      // and can be used to additional work with the dropzone.js
      // object
      init: null,
      // All of these receive the event as first parameter:
      drop: null,
      dragstart: null,
      dragend: null,
      dragenter: null,
      dragover: null,
      dragleave: null,
      // All of these receive the file as first parameter:
      addedfile: null,
      removedfile: removeFile,
      thumbnail: null,
      error: null,
      processing: null,
      uploadprogress: null,
      sending: null,
      success: null,
      complete: uploadedFile,
      canceled: null,
      maxfilesreached: null,
      maxfilesexceeded: null,
      // All of these receive a list of files as first parameter
      // and are only called if the uploadMultiple option
      // in djsConfig is true:
      processingmultiple: null,
      sendingmultiple: null,
      successmultiple: null,
      completemultiple: null,
      canceledmultiple: null,
      // Special Events
      totaluploadprogress: null,
      reset: null,
      queuecomplete: null
    };

    return (
        <DropzoneComponent config={componentConfig}
      eventHandlers={eventHandlers}
      djsConfig={djsConfig} />,
    );
  }
}
