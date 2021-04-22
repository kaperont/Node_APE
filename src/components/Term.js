import React, {Component} from 'react';

class Term extends Component {

    render(){
        let courses = "hey mom";
        return (
            // `semester` Class defined HTML way; `semHeader` class defined React way.
            <div class="semester">
                <div className="semHeader">
                    {this.props.term}
                </div>
                {courses}
            </div>
        );
    }
}

export default Term;
