import React from 'react';
import t from 'tcomb-form';
import DropZone from './DropZone';

const FormSchema = t.struct({
  name: t.String,
  data: t.String,
  long: t.String,
  lat: t.String
});

export default class EditTourForm extends React.Component {


  render() {

    const options = {
      disabled: true
    };

    return(
      <div>
        <h1>Information</h1>
        <form>
          <t.form.Form ref="form" type={FormSchema} value={this.props.values} options={options} />
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </form>
        <DropZone />
      </div>

    );
  }
}
