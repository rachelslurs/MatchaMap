import React, { PureComponent } from 'react';

import Checkbox from './Checkbox';
import CheckboxLabel from './CheckboxLabel';
import FormField from './FormField';

export default class MatchaFilter extends PureComponent {
	state = {
    checked: false,
    changeEventCount: 0
  };

  status() {
    return this.state.checked ? 'checked' : 'unchecked';
  }
	
	changeValue(target) {
		this.setState({
			changeEventCount: this.state.changeEventCount + 1,
			checked: target.checked
		});
		this.props.changeFilter(this.props.id);
	}
	
  render() {
    const {checked, status, changeEventCount} = this.state;
    return (
			<div>
				<FormField>
					<Checkbox className="toggle" id="{this.props.id}" id={this.props.id} defaultChecked={this.props.inuse} labelId="{this.props.id}" onChange={({target}) => this.props.changeFilter(this.props.id)}/>
					<CheckboxLabel id="{this.props.id}" for="{this.props.id}">
						{this.props.id}
					</CheckboxLabel>
				</FormField>
			</div>
    )
  }
}
