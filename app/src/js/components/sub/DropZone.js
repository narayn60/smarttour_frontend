import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import ReactDOMServer from 'react-dom/server';

//TODO: Change to actually upload files
export default class DropZone extends React.Component {

  render() {

    var djsConfig = {
      previewTemplate: ReactDOMServer.renderToStaticMarkup(
        <div className="dz-preview dz-file-preview">
          <div className="dz-details">
            <div className="dz-filename"><span data-dz-name></span></div>
            <img data-dz-thumbnail />
          </div>
          <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress></span></div>
          <div className="dz-success-mark"><span>✔</span></div>
          <div className="dz-error-mark"><span>✘</span></div>
          <div className="dz-error-message"><span data-dz-errormessage></span></div>
        </div>
      )
    };

    var componentConfig = {
      iconFiletypes: ['.jpg', '.png', '.gif'],
      showFiletypeIcon: true,
      postUrl: './uploadHandler'
    };

    var callbackArray = [
      function () {
        console.log('Look Ma, I\'m a callback in an array!');
      },
      function () {
        console.log('Wooooow!');
      }
    ];

    var simpleCallBack = function () {
      console.log('I\'m a simple callback');
    };

    var eventHandlers = {
      // This one receives the dropzone object as the first parameter
      // and can be used to additional work with the dropzone.js
      // object
      init: null,
      // All of these receive the event as first parameter:
      drop: callbackArray,
      dragstart: null,
      dragend: null,
      dragenter: null,
      dragover: null,
      dragleave: null,
      // All of these receive the file as first parameter:
      addedfile: simpleCallBack,
      removedfile: null,
      thumbnail: null,
      error: null,
      processing: null,
      uploadprogress: null,
      sending: null,
      success: null,
      complete: null,
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
