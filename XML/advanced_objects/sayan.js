class Saiyan extends Human{
    constructor ({name, attack, canFly, hasTail}){
        super({name, attack, canFly});
        this.isSuperSayan = false;
        this.hasTail = hasTail;
    }

    transToSuperSayan(){
        this.isSuperSayan = true;
    }

    transToNormal(){
        this.isSuperSayan = false;     
    }
}

module.exports = Saiyan;