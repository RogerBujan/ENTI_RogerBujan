// const sayan = {
//     name: 'Goku',
//     attack: 'Kame',
//     canFly: true,

//     doAttack: function() {
//         return this.attack;
//     }
// }
const Saiyan = require('./sayan');

const goku = new Saiyan ('Goku', 'Kame',  true);

console.log(goku.doAttack());