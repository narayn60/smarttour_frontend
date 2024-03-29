import alt from 'alt_base';
import NotesActions from 'NotesActions';

class NotesStore {
  constructor() {
    this.bindActions(NotesActions);
    this.errorMessage = null;

    this.state ={
      about: "",
      notes: [],
      note_response: null
    };

  }

  onUpdateNotes(note) {
    //TODO: Push the new updated location
    this.setState({ notes: this.state.notes.concat(note)});
  }

  onUpdateAbout(new_about) {
    this.setState({ about: new_about });
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
