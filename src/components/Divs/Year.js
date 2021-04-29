import React, {Component} from 'react';
import Semester from './Semester';

class Year extends Component {

	render (){
	  return (
		<div id="year-content">
			<Semester catalog={this.props.catalog} data={this.props.data['Fall']} term="Fall" year={this.props.year} />
			<Semester catalog={this.props.catalog} data={this.props.data['Spring']} term="Spring" year={this.props.year} />
			<Semester catalog={this.props.catalog} data={this.props.data['Summer']} term="Summer" year={this.props.year} />
		</div>
	  );
	}
}
export default Year;
