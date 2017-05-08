import React, { Component } from 'react';
import MatchaListItem from '../components/MatchaListItem';

export default class MatchaList extends Component {
  getMatchaLocations() {
    return this.props.markers.filter(
      cg => cg.get('mapOn') === true
    )
  }
  render() {
    return (
      <div>
        {this.getMatchaLocations().map(item =>
          <MatchaListItem {...this.props}
                  key={item.get('title')}
                  title={item.get('title')}
                  image={item.get('image')}
                  url={item.get('url')}
                  position={item.get('position')}
                  description={item.get('description')}
                  />
        )}
      </div>
  )}
  }
