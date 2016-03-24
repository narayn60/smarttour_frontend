import alt from 'alt_base';
import FormActions from 'FormActions';

// To use import FormStore into your required file and then
// do FormStore.getTourId() to extract the relevant tour id
class FormStore {
  constructor() {
    this.bindActions(FormActions);
    this.errorMessage = null;

    this.state = {
      tour_id: null
    };

    this.exportPublicMethods({
      getTourId: this.getTourId
    });
  }

  onCreateTour(id) {
    // console.log(id)
    this.setState({
      tour_id: id //if this doesn't work log the id input and extract the relevant object
    });
  }

  getTourId() {
    return this.state.tour_id;
  }

}

export default alt.createStore(FormStore, 'FormStore');
