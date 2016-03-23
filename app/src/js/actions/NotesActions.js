import alt from 'alt_base';
import NotesSource from 'NotesSource';

class NotesActions {
  constructor() {
    this.state = {
      notes: []
    };
    this.stores = {
      NotesSource: new NotesSource()
    };
    this.generateActions('updateNotes');
  }

  fetchNotes(location_id) {
    console.log("Fetch notes called");
    return (dispatch) => {
      console.log("Dispatched");
      dispatch();
      this.stores.NotesSource.fetch_notes(location_id)
          .then((notes) => {
            console.log("Update Notes called");
            this.updateNotes(notes);
          })
          .catch((errorMessage) => {
            this.notesFailed(errorMessage);
          });
    };
  }

  notesFailed(errorMessage) {
    return errorMessage;
  }

}

export default alt.createActions(NotesActions);
