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
    this.generateActions('updateNotes', 'updateBio');
  }

  fetchNotes(tour_id, location_id) {
    return (dispatch) => {
      dispatch();
      this.stores.NotesSource.fetch_notes(tour_id, location_id)
          .then((notes) => {
            this.updateNotes(notes.notes);
            this.updateBio(notes.note);
          })
          .catch((errorMessage) => {
            this.notesFailed(errorMessage);
          });
    };
  }

  patchBio(values, tour_id, location_id) {
    return (dispatch) => {
      dispatch();
      this.stores.NotesSource.update_bio(values, tour_id, location_id)
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
