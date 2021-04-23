import React, {Component} from 'react';

var $ = require('jquery');

class Semester extends Component {

    render(){
        let courses = this.props.data;
        let catalog = this.props.catalog;
        let formattedCourses = this.convertClasses(courses, catalog);

        return (
            // `semester` Class defined HTML way; `semHeader` class defined React way.
            <div className="semester">
                <div className="semester-header">
                    {this.props.term}
                </div>
                {formattedCourses}
            </div>
        );
    }

    convertClasses(courses, catalog){
        let formattedCourses = [];
        for(let i = 0; i < courses.length; i++){
            let pDiv = "";

            $.each(catalog.courses, function(key, value){
                if(courses[i] == value.id){
                    let course = value.id + " " + value.name;
                    pDiv = <p className="semester-class" draggable="true">{course}</p>;
                    formattedCourses.push(pDiv);
                }
            });
        }
        return formattedCourses;
    }

}

export default Semester;
