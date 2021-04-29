import React, {Component} from 'react';
import $ from 'jquery';

// Objects
import {Plan} from './components/Classes/Plan';
import {Course} from './components/Classes/Course';

// Stylesheets
import './components/project-6.css';

// Components
import HeaderTop from './components/Divs/Header';
import UpperRight from './components/Divs/UR';
import UpperLeft from './components/Divs/UL';
import LowerRight from './components/Divs/LR';

class Ape extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  requirements: null,
		  plan: null,
		  catalog: null,
		};
	}

  	loadNewPlan(){

		fetch('http://judah.cedarville.edu/~peront/CS3220/TermProject/php/getAll.php')
			.then(response => response.json())
			.then(
				data => this.setState({plan: this.convertPlan(data.plan), catalog: data.catalog, requirements: data.categories})
			);
	
	}
   
 
	componentDidMount() {
		this.loadNewPlan();
	}
 
	convertPlan(plan) {

		let student = plan.student;
		let plan_name = plan.name;
		let major = plan.major;
		let cat_year = plan.catYear;
		let curr_year = plan.currYear;
		let curr_term = plan.currTerm;
		let courses = plan.courses;

		// Global Data
		let GLOBAL_TERMS = { "Fall": [], "Spring": [], "Summer": [] };
		let GLOBAL_YEARS = [];

		let tempYears = [];
		let tempYear = parseInt(cat_year);
		for(let i = 0; i < 4; i++){
			tempYears.push(tempYear);
			tempYear++;
		}
		
		for(let i = 0; i < 4; i++){
			GLOBAL_YEARS[tempYears[i]] = GLOBAL_TERMS;
		}

		$.each(courses, function( key, value ){

			let designator = value.id;
			let year = value.year;
			let semester = value.term;

			let course = new Course(designator, year, semester);

			for(let i = 0; i < 4; i++){
				if(year == tempYears[i]){
					GLOBAL_YEARS[year][semester].push(course);
				}
			}

		});

		let GLOBAL_PLAN = new Plan(student, plan_name, major, cat_year, curr_year, curr_term, GLOBAL_YEARS);

		return GLOBAL_PLAN;

	}


 

	render(){
		
		return (
			<div id="content">
				<div id="page-container">
					{<HeaderTop plan={this.state.plan}/> }
					<div id="main-container">
						<div id="left">
							
							{<UpperLeft requirements={this.state.requirements} catalog={this.state.catalog} /> }
							<script src="./setAccordion.js"></script>
							{/*<LowerLeft /> */}
						</div>
						<div id="right">
							{<UpperRight plan={this.state.plan} catalog={this.state.catalog}/>}					
							{<LowerRight catalog={this.state.catalog} /> }
						</div>				
					</div>
				</div>
			</div>
		);

	}
}

export default Ape;
