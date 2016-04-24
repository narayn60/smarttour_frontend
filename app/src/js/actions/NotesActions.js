import alt from 'alt_base';
import NotesSource from 'NotesSource';

class NotesActions {
  constructor() {
    this.state = {
      about: [],
      notes: []
    };
    this.stores = {
      NotesSource: new NotesSource()
    };
    this.generateActions('updateNotes', 'updateAbout');
  }

  fetchNotes(tour_id, location_id) {
    return (dispatch) => {
      dispatch();
      this.stores.NotesSource.fetch_notes(tour_id, location_id)
          .then((notes) => {
            this.updateNotes(notes.text);
            this.updateAbout(notes.about);
          })
          .catch((errorMessage) => {
            this.notesFailed(errorMessage);
          });
    };
  }

  patchAbout(values, tour_id, location_id) {
    return (dispatch) => {
      dispatch();
      this.stores.NotesSource.update_about(values, tour_id, location_id)
        .then((response) => {
          this.updateAbout(values.about);
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
