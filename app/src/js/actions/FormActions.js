import alt from 'alt_base';
import FormSource from 'FormSource';


class FormActions {
  constructor() {
    this.source = {
      FormSource: new FormSource()
    };
    this.generateActions('updateId');
  }

  createTour(values) {
    return (dispatch) => {
      dispatch();
      this.source.FormSource.save(values)
        .then((id) => {
          this.updateId(id);
        })
        .catch((errorMessage) => {
          console.log('error: ' + errorMessage);
          this.formFailed(errorMessage);
        });
    };
  }

  formFailed(errorMessage) {
    return errorMessage;
  }
}

export default alt.createActions(FormActions);
