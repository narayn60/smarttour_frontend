import alt from 'alt_base';
// import MapActions from 'MapActions';

class MapStore {
  constructor() {
    // this.bindActions(MapActions);
    this.state = {
      selected: null,
      points: [
        {
          long: -2.602986,
          lat: 51.456018,
          name: 'MVB',
          data: 'The university building'
        },
        {
          long: -2.616101447492838,
          lat: 51.45366594341915,
          name: 'Banksy',
          data: 'A famous Street Artists'
        },
        {
          long: -2.601982,
          lat: 51.456838,
          name: 'Queens',
          data: 'The university engineering building'
        },
      ]
    };

    // this.exportPublicMethods({
    //   getSelected: this.getSelected
    // });
  }

  // onSelected(index) {
  //   this.setState({selected: index});
  //   // this.state.selected = selected;
  // }

  // getSelected() {
  //   console.log("getSelected");
  //   return this.getState().selected;
  // }
}

export default alt.createStore(MapStore, 'MapStore');
