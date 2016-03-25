import React from 'react';
import {
  Grid,
  Row, Col,
  Image,
  Button,
  Input
} from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import Global from 'Global';
import AuthStore from 'AuthStore';
import t from 'tcomb-form';

const FormSchema = t.struct({
  caption: t.String
});

export default class PhotoItem extends React.Component {

  constructor() {
    super();
    this.state = {
      gallery_selected: true
    };
  }

  __onClick() {
    this.setState({
      gallery_selected: !this.state.gallery_selected
    });
  }

  __addCaption(e) {
    e.preventDefault();
    alert("Form submitted");
  }

  __onSubmit(i, event) {
    event.preventDefault();
    console.log("Value received", i);
    const value = this.refs["form" + i].getValue();
    if (value) {
      console.log("Caption value is", value);
    }
  }

  render() {

    const photo_set = this.props.photos.map((photo) => {
      const src = Global.backend_url + AuthStore.getUid() + "/" + photo.photo_path_s3;
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
          caption: photo.caption
        }
      });
    });

    const formLayout = (locals) => {
      return (
        <div>
          <Col md={7}>
            <div>{locals.inputs.caption}</div>
          </Col>
          <Col md={2}>
            <Button type="submit" bsStyle="primary">Submit</Button>
          </Col>
        </div>
      );
    };

    const options = {
      template: formLayout
    };


    const photos = photo_set.map((point, i) => {
      const ref = "form" + i;
      return (
        <Row>
          <Col md={3}>
            <Image class="tour-pic" src={point.src} rounded />
          </Col>
          <form onSubmit={this.__onSubmit.bind(this, i)}>
            <t.form.Form class="edit-form" ref={ref} type={FormSchema} value={point.lightboxImage.caption} options={options}/>
          </form>
        </Row>
      );
    }
    );

    const selectedComponent = this.state.gallery_selected ? <Gallery photos={photo_set} /> : (
      <Grid>
        {photos}
      </Grid>
    );

    return (
      <div>
        <Button bsStyle="primary" onClick={this.__onClick.bind(this)}> Edit Photos </Button>
        {selectedComponent}
      </div>
    );
  }

}


/* <Col md={9}>

   <form action={this.addCaption.bind(this)}>
   <Input type="textarea" label="Caption" value={point.lightboxImage.caption}/>
   <Button type="submit" value="Update Caption"></Button>
   </form>
   </Col> */
