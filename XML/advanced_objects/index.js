// const sayan = {
//     name: 'Goku',
//     attack: 'Kame',
//     canFly: true,

//     doAttack: function() {
//         return this.attack;
//     }
// }
const Saiyan = require('./sayan');

const goku = new Saiyan ({name:'Goku',attack: 'Kame',canFly: true,hasTail: true});

console.log(goku.doAttack());