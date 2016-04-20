import React from 'react';
import Gallery from 'react-photo-gallery';

export default class PhotoGallery extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const photo_set = this.props.photos.map((photo) => {
      const src = photo.src_url;
      return ({
        src: src,
        width: 960,
        height: 960,
        aspectRatio: 1.5,
        lightboxImage: {
          src: src,
          srcset: [
            src + ' 1024w',
            src + ' 800w',
            src + ' 500w',
            src + ' 320w',
          ],
          caption: photo.description
        }
      });
    });

    return (
        <Gallery photos={photo_set} />
    );
  }
}
