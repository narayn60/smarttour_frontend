import alt from 'alt_base';
import NotesActions from 'NotesActions';

class NotesStore {
  constructor() {
    this.bindActions(NotesActions);
    this.errorMessage = null;

    this.state ={
      bio: "",
      notes: [],
      note_response: null
    };

  }

  onUpdateNotes(note) {
    //TODO: Push the new updated location
    this.setState({ notes: this.state.notes.concat(note)});
  }

  onUpdateBio(new_bio) {
    this.setState({ bio: new_bio });
  }

  onPatchBio(id) {
    this.setState(id);
    // this.setState({
    //   note_response: id
    // });
  }

  onFetchNotes() {
    this.state.notes = [];
  }

  onNotesFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

}

export default alt.createStore(NotesStore, 'NotesStore');
