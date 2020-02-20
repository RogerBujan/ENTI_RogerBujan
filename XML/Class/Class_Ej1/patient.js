import Person from "./person";

class Patient extends Person{
    constructor({name,surname,age,illness,date}){
        super({name, surname, age});
        this.illness = illness;
        this.data = data;
    }
}

export default Patient;