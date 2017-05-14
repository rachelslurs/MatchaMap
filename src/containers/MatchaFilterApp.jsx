import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import '../App.css';
import MatchaFilterList from './MatchaFilterList';
import MatchaList from './MatchaList';
import MatchaMapContainer from './MatchaMapContainer';

export class MatchaFilterApp extends Component {

  render() {
    return (
			<div>
        <MatchaFilterList {...this.props}/>
        <br></br>
        <MatchaMapContainer {...this.props} />
        <br></br>
        <MatchaList {...this.props}/>

      </div>
  )};
}

function mapStateToProps(state) {
  return {
    filters: state.get('filters'),
    markers: state.get('markers'),
    showingInfoWindow: state.get('showingInfoWindow'),
    activeMarker: state.get('activeMarker'),
    selectedTitle: state.get('selectedTitle'),
    selectedDescription: state.get('selectedDescription'),
    gmapMarkers: state.get('gmapMarkers')
  };
}


export const MatchaFilterAppContainer = connect(mapStateToProps,actions)(MatchaFilterApp);
