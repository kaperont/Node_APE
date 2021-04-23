import React, {Component} from 'react';
import Semester from './Semester';

class Year extends Component {

	render (){
	  return (
		<div id="year-content">
			<Semester catalog={this.props.catalog} data={this.props.data['Fall']} term="Fall" />
			<Semester catalog={this.props.catalog} data={this.props.data['Spring']} term="Spring" />
			<Semester catalog={this.props.catalog} data={this.props.data['Summer']} term="Summer" />
		</div>
	  );
	}
}
export default Year;
