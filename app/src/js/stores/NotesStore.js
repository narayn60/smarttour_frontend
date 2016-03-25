import alt from 'alt_base';
import NotesActions from 'NotesActions';

class NotesStore {
  constructor() {
    this.bindActions(NotesActions);
    this.errorMessage = null;

    this.state ={
      notes: []
    };

  }

  onUpdateNotes(note) {
    //TODO: Push the new updated location
    this.setState({ notes: this.state.notes.concat(note)});
  }

  onFetchNotes() {
    this.state.notes = [];
  }

  onNotesFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

}

export default alt.createStore(NotesStore, 'NotesStore');
