import React from 'react';
import t from 'tcomb-form';

const FormSchema = t.struct({
  name: t.String,
  data: t.String,
  long: t.String,
  lat: t.String
});

export default class EditTourForm extends React.Component {


  render() {

    return(
      <form>
        <t.form.Form ref="form" type={FormSchema} value={this.props.values}/>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Save</button>
        </div>
      </form>
    );
  }
}
