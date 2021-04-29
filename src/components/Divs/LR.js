import React, {Component} from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';

class LowerRight extends Component {
    render(){
        if(this.props.catalog){
            let catCourses = this.props.catalog.courses;
            let table = $('#dataTable').DataTable({
                "searching": true,
                "scrollY": "250px"
            });

            $.each(catCourses, function( key, value ){
                if(key != ""){
                    table.row.add( [
                        value.id,
                        value.name,
                        value.description,
                        value.credits
                    ]).draw(true);
                }
            });
        }
        return(
            <div className="course-finder-division">
                    <div className="section-title">Course Finder</div>

                    <table id="dataTable" className="display" width="100%">
                        <thead>
                            <tr>
                                <th>Designator</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Credits</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>

                </div>
        );
    }

    
}

export default LowerRight;