import React, {Component} from 'react';
import {Plan} from './components/Plan';
import './App.css';
import './project-6.css';

import UpperRight from './components/UR';
import UpperLeft from './components/UL';
import HeaderTop from './components/Header';

var $ = require('jquery');
require('jquery-ui');
//require('jquery-ui/css');


class App extends Component {

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
			
			console.log(courses[value.id]);

			let c = value.id;
			let year = value.year;
			let semester = value.term;

			for(let i = 0; i < 4; i++){
				if(year == tempYears[i]){
					GLOBAL_YEARS[year][semester].push(c);
				}
			}

		});

		let GLOBAL_PLAN = new Plan(student, plan_name, major, cat_year, curr_year, curr_term, GLOBAL_YEARS);

		return GLOBAL_PLAN;

	}


 

	render(){
	  return (
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
					{/*<LowerRight catalog={this.state.catalog} /> */}
				</div>				
			</div>
		</div>
	  );
	}
}

export default App;
