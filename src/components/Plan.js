export class Plan {
		
    constructor(student, plan_name, major, cat_year, curr_year, curr_term, years) {
        this.student = student;
        this.plan_name = plan_name;
        this.major = major;
        this.cat_year = cat_year;
        this.curr_year = curr_year;
        this.curr_term = curr_term;
        this.years = years;
    }
    getPlan(){
        return this.plan_name;
    }
    getStudent(){
        return this.student;
    }
    getName(){
        return this.plan_name;
    }
    getMajor(){
        return this.major;
    }
    getCatYear(){
        return this.cat_year;
    }
    getYear(){
        return this.curr_year;
    }
    getCurrSem(){
        return this.curr_term;
    }
    getYears(){
        return this.years;
    }

};