import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import UpperRight from './components/UR';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  requirements: null,
		  plan: null,
		  planList: null,
		  catalog: null,
		};
	}

  loadNewPlan(){

    fetch('http://judah.cedarville.edu/~gallaghd/cs3220/ape/getCombinedNoSession.php')
     .then(response => response.json())
     .then(		
       data => this.setState({plan: this.convertPlan(data.plan), planList: data.planList, catalog: data.catalog})
       );
   
              fetch('http://judah.cedarville.edu/~gallaghd/cs3220/ape/getRequirementsNoSession.php')
     .then(response => response.json())
     .then(			
       data => this.setState({requirements: data})
     );
   }
   
 
   componentDidMount() {
     this.loadNewPlan();
   }
 
   convertPlan(currPlan) {
      // Add code from p2
   }
 

	render(){
	  return (
		<div className="App" id="main">
			{/*<BannerRight planList={this.state.planList}/> */}
			{/*<UpperLeft requirements={this.state.requirements} catalog={this.state.catalog} /> */}
			<UpperRight plan={this.state.plan} catalog={this.state.catalog}/>
			{/*<LowerLeft /> */}
			{/*<LowerRight catalog={this.state.catalog} /> */}
		</div>
	  );
	}
}

export default App;
