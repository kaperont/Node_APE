import React, {Component} from 'react';
import '../project-6.css';

class HeaderTop extends Component {

    render(){
        var username = "";
        var major = "";
        var catYear = "";
        var planName = "";

        if(this.props.plan){
            username = this.props.plan.student;
            major = this.props.plan.major;
            catYear = this.props.plan.cat_year;
            planName = this.props.plan.plan_name;
        }
        return(
            <div id="header">
                <a id="logo-link" href="https://www.cedarville.edu">
                    <img id="logo" alt="CU-Logo" src="/CULogo.jpg" />
                </a>
                <h2 id="header-title">Academic Planning</h2>
                <p id="version-number">version 6.1</p>
                <div id="user-info">
                    <div id="user-info-top">
                        <p className="user-info-text" id="user-username">
                            <b>Student: </b>
                            {username}
                        </p>
                        <p className="user-info-text" id="user-major">
                            <b>Major: </b>
                            {major}
                        </p>
                    </div>
                    <div id="user-info-bottom">
                    <p className="user-info-text" id="user-catalog">
                            <b>Catalog: </b>
                            {catYear}
                        </p>
                        <p className="user-info-text" id="user-filler">
                            <b>Plan Name: </b>
                            {planName}
                        </p>
                    </div>
                </div>
                <div id="header-options">
                    <a className="header-button" id="judah-button" href="http://judah.cedarville.edu/peopleschoice/index.php">
                        <p className="header-button-text">Judah</p>
                    </a>
                    <a className="header-button" id="home-button" href="">
                        <p className="header-button-text">Home</p>
                    </a>
                    <a className="header-button" id="save-button">
                        <p className="header-button-text">Save</p>
                    </a>
                </div>
            </div>
        )
    }
}

export default HeaderTop;