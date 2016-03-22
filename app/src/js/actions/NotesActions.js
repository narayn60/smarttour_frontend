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
    return (dispatch) => {
      dispatch();
      this.stores.NotesSource.fetch_notes(location_id)
          .then((notes) => {
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
