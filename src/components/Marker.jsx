import { Component } from 'react';
import bakedGoods from '../icons/baked-goods-color.svg'

export class Marker extends Component {

  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
    (this.props.properties !== prevProps.properties) ||
    (this.props.mapOn !== prevProps.mapOn)) {
      this.renderMarker()
    }
  }

  renderMarker() {
    let {
      map, google, title, description
    } = this.props;

    // if the marker has already been drawn, set map on or null
    if (this.marker) {
      if (!this.props.mapOn) {
        this.marker.setMap(null);
      }
      else {
        this.marker.setMap(map)
      }
      return
    }

    let lat = this.props.position.first()
    let long = this.props.position.last()
    let position = new google.maps.LatLng(lat,long);
		
		// let star = {
	  //   path: traditional,
	  //   fillColor: 'white',
	  //   fillOpacity: 0.5,
	  //   scale: .1,
	  //   strokeColor: 'tomato',
	  //   strokeWeight: 1
	  // };

    // if marker does not have mapOn, set visibility to none via
    // setting the map to null
    const pref = {
        map: map,
        position: position,
        title:title,
				description: description,
				icon: bakedGoods
      };

    this.marker = new google.maps.Marker(pref);
    this.marker.addListener('click', (e) => {
      this.props.onMarkerClick(this.marker)
    })

    this.props.addMarker(this.marker)
  }

  render() {
    return null;
  }
}
