// Vous pouvez changet le code.

console.log(' ')
console.log(' ')
console.log(' ')
console.log('\x1b[35mA M A Z O N  G E N E R A T O R  -  B Y  F 4 L L')
console.log(' ')
console.log('One code per 500ms')
console.log('All codes : ')
console.log(' ')
console.log(' ')

function makeid(length) {
    var result           = '';
    var characters       = 'AZERTYUIOPQSDFGHJKLMWXCVBN0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 let n = 0
    let inter = setInterval(()=>{
    console.log("\x1b[32m[New Code]   \x1b[0m" +makeid(4)+"-"+makeid(6)+"-"+makeid(5))
    n++
}, 1)
