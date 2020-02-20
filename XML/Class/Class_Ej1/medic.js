import Person from "./person";

class Medic extends Person{
    constructor({name,surname,age,field,floor}){
        super({name: name, surname: surname, age: age});
        this.field = field;
        this.floor = floor;
    }
}

export default Medic;