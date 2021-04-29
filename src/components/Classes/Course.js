export class Course {

    constructor(designator, year, semester){
        this.designator = designator;
        this.year = year;
        this.semester = semester;
    }

    getDesignator() {
        return this.designator;
    }
    getYear() {
        return this.year;
    }
    getSem() {
        return this.semester;
    }

};