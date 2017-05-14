import React, { PureComponent, PropTypes } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import { MatchaFilterAppContainer } from './containers/MatchaFilterApp';
import matchaLocations from './data/matcha-locations.json';
import Layout from './components/Layout';
import Checkbox from './components/Checkbox';
import CheckboxLabel from './components/CheckboxLabel';
import FormField from './components/FormField';

const store = createStore(reducer);

// convert json into dict for use by the React components
// add mapOn variable to indicate if the marker should be visible
// by default, set mapOn to false, filtering will indicate if it should be true
function getMatchaLocations(matchaLocations) {
  let MatchaLocations = []
  matchaLocations.forEach(matchaLocation => {
    MatchaLocations.push({
      'title' : matchaLocation['properties']['title'],
      'description' : matchaLocation['properties']['description'],
      'position' : [matchaLocation['geometry']['coordinates'][0],
      matchaLocation['geometry']['coordinates'][1]],
      'properties': matchaLocation['properties'],
      'image': matchaLocation['properties']['image'],
      'url': matchaLocation['properties']['url'],
      'mapOn': true

    })
  });
  return MatchaLocations
}

set_state(getMatchaLocations(matchaLocations))

function set_state(MatchaLocations) {
  store.dispatch ({
  type: 'SET_STATE',
  state: {
    filters: [
      {id: 'baked-goods', inuse: false },
      {id: 'wifi', inuse: false },
      {id: 'drinks', inuse: false }
    ],
    markers: MatchaLocations,
    gmapMarkers: [],
    showingInfoWindow: "false",
    activeMarker: null,
    selectedTitle: "",
		selectedDescription: ""
  }
 })
}

export default class App extends PureComponent {
	state = {
    checked: false,
    disabled: false,
    indeterminate: false,
    changeEventCount: 0
  }
	
	render() {
    const {checked, disabled, indeterminate, status, changeEventCount} = this.state;
    return (
			
			<Provider store={store}>
	      <Layout>
	        <h2>matcha map</h2>
				  <MatchaFilterAppContainer />
	        
	      </Layout>
			</Provider>
    );
  }
}
