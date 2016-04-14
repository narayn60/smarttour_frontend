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
            console.log("NOtes are", notes);
            this.updateNotes(notes.text);
            this.updateBio(notes.about);
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

  deleteNotes(tour_id, location_id, notes) {
    return (dispatch) => {
      dispatch();
      this.stores.NotesSource.delete_notes(notes, location_id)
        .then((response) => {
          this.fetchNotes(tour_id, location_id);
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
