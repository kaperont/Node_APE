import React, {Component} from 'react';
import Year from './Year';

class UpperRight extends Component {
	
	render (){
		var yrs = "";
		var planName = "";
		if (this.props.plan && this.props.plan.years) {
			planName = this.props.plan.plan_name;
			yrs = this.props.plan.years.map((value, key) => {
			return (
					<Year catalog={this.props.catalog} year={key} data={value} />
				);		
			});
	  	}
		return (
			<div className="semester-division" id="sem-div">
				<div className="section-title">{planName}</div>
				<div id="years-container">
					{yrs}
					<script src="../drag_and_drop.js"></script>
				</div>
			</div>
		);
	}	
}

export default UpperRight;
