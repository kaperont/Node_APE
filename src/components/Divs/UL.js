import React, {Component} from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widget';
import 'jquery-ui/ui/widgets/accordion';



class UpperLeft extends Component {
	
	render (){

		if (this.props.requirements && this.props.catalog) {

			let coreC = this.props.requirements.Core.courses;
			let electiveC = this.props.requirements.Electives.courses;
			let cognateC = this.props.requirements.Cognates.courses;
			let catalog = this.props.catalog;

			let CoreClasses = this.convertClasses(coreC, catalog);
			let ElectiveClasses = this.convertClasses(electiveC, catalog);
			let CognateClasses = this.convertClasses(cognateC, catalog);
			
			$( function() {
				$( "#accordion" ).accordion({
					collapsible: true,
					heightStyle: "content",
					animate: 200
				});
			});
			return (
				<div id="requirements-division">
					<div className="section-title">Requirements</div>
					<div id="req-table" className="ui-widget-content">
						<div id="accordion">
							<h3>Core</h3>
							<div className="accord-content" id="accord-div-1">{CoreClasses}</div>						
							<h3>Electives</h3>
							<div className="accord-content" id="accord-div-2">{ElectiveClasses}</div>						
							<h3>Cognates</h3>
							<div className="accord-content" id="accord-div-3">{CognateClasses}</div>						
						</div>
					</div>
				</div>
			);
	  	}
		return(
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

	convertClasses(courses, catalog){
        let formattedCourses = [];

		$.each(courses, function( cKey, cValue ){
			let pDiv = "";
			$.each(catalog.courses, function(key, value){
				if((cValue == value.id)){
					let course = value.id + " " + value.name;
					pDiv = <p className="req-class-placeholder" draggable="true">{course}</p>;
					formattedCourses.push(pDiv);
				}
			});
		});
			
        return formattedCourses;
    }
}

export default UpperLeft;
