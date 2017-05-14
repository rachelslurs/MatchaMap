import React, { Component, PropTypes } from 'react';
import * as config from '../config'
import GoogleApiComponent from '../GoogleApiComponent'
import MatchaMap from '../components/MatchaMap'
import {Marker} from '../components/Marker'
import {InfoWindow} from '../components/InfoWindow'

export class MatchaMapContainer extends Component {
	state = {
    checked: false,
    disabled: false,
    indeterminate: false,
    changeEventCount: 0
  }

  render() {
		
    const {checked, disabled, indeterminate, status, changeEventCount} = this.state;
    return (
      <div>
      <MatchaMap google={this.props.google}>
        {this.props.markers.map(marker =>
          <Marker
            key={marker.get('title')}
            title={marker.get('title')}
            description={marker.get('description')}
            properties={marker.get('properties')}
            position={marker.get('position')}
            mapOn={marker.get('mapOn')}
            addMarker={this.props.addMarker}
            onMarkerClick={this.props.onMarkerClick}/>

        )}
        <InfoWindow {...this.props}
            marker={this.props.activeMarker}
            visible={this.props.showingInfoWindow}>
              <div>
                <h4>{this.props.selectedTitle}</h4>
                <p>{this.props.selectedDescription}</p>
              </div>
          </InfoWindow>
      </MatchaMap>

      </div>
    )}
}

let key = config.getGoogleKey()
export default GoogleApiComponent({
  apiKey: key
})(MatchaMapContainer)
