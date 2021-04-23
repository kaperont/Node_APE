import React, {Component} from 'react';
require('jquery-ui');
//require('jquery-ui/css');

class UpperLeft extends Component {
	
	render (){
		
		if (this.props.requirements && this.props.catalog) {
			
	  	}
		return (
			<div id="requirements-division">
				<div className="section-title">Requirements</div>
				<div id="req-table" className="ui-widget-content">
                    <div id="accordion">
                        <h3>Core</h3>
                        <div className="accord-content" id="accord-div-1"></div>
                        <h3>Electives</h3>
                        <div className="accord-content" id="accord-div-2"></div>
                        <h3>Cognates</h3>
                        <div className="accord-content" id="accord-div-3"></div>
                    </div>
				</div>
			</div>
		);
	}	
}

export default UpperLeft;
