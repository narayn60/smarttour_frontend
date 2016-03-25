import alt from 'alt_base';
import NotesSource from 'NotesSource';

class NotesActions {
  constructor() {
    this.state = {
      bio: [],
      notes: []
    };
    this.stores = {
      NotesSource: new NotesSource()
    };
    this.generateActions('updateNotes');
    this.generateActions('updateBio');
  }

  fetchNotes(location_id) {
    return (dispatch) => {
      dispatch();
      this.stores.NotesSource.fetch_notes(location_id)
          .then((notes) => {
            this.updateNotes(notes.notes);
            this.updateBio(notes.note);
          })
          .catch((errorMessage) => {
            this.notesFailed(errorMessage);
          });
    };
  }

  patchBio(values, location_id) {
    return (dispatch) => {
      dispatch();
      this.stores.NotesSource.update_bio(values, location_id)
        .then((response) => {
          this.updateBio(values.note);
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
