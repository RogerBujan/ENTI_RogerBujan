class Saiyan {
    constructor (name, attack, canFly){
        this.name = name;
        this.attack = attack;
        this.canFly = canFly;
    }

    doAttack(){
        return this.attack;
    }
}

module.exports = Saiyan;