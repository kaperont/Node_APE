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
                    <img id="logo" alt="CU-Logo" src="/CU-logo-1.png" />
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
                    <a className="header-button" id="home-button" target="_blank" href="https://www.google.com/maps/place/33+Hubbard+St,+Manchester,+NH+03104/@42.991372,-71.4420516,3a,75y,136.18h,86.91t/data=!3m7!1e1!3m5!1so93JXaF9VyZH94dnD_Azvg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Do93JXaF9VyZH94dnD_Azvg%26cb_client%3Dsearch.gws-prod.gps%26w%3D360%26h%3D120%26yaw%3D194.50998%26pitch%3D0%26thumbfov%3D100!7i3328!8i1664!4m5!3m4!1s0x89e24f1b2be4f973:0x583e87190fbac30d!8m2!3d42.99128!4d-71.441809">
                        <p className="header-button-text">Home</p>
                    </a>
                    <a className="header-button" id="save-button" href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank">
                        <p className="header-button-text">Save</p>
                    </a>
                </div>
            </div>
        )
    }
}

export default HeaderTop;