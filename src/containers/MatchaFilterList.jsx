import React, { Component } from 'react';
import MatchaFilter from '../components/MatchaFilter'

export default class MatchaFilterList extends Component {

  render() {
    return (
      <div className="row">
        {this.props.filters.map(item =>
          <MatchaFilter id={item.get('id')}
            key={item.get('id')}
            changeFilter={this.props.changeFilter}
          />
        )}
      </div>
  )}
}
