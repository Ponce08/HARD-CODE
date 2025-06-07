"use strict";
// const objType: { [index: string]: number } = {};
// objType.nombre = 4
// console.log(objType)
var PonceFamily;
(function (PonceFamily) {
    PonceFamily[PonceFamily["Ponce"] = 1] = "Ponce";
    PonceFamily[PonceFamily["Leydy"] = 2] = "Leydy";
    PonceFamily[PonceFamily["Santiago"] = 3] = "Santiago";
    PonceFamily[PonceFamily["Isabela"] = 4] = "Isabela";
    PonceFamily[PonceFamily["Julieta"] = 5] = "Julieta";
})(PonceFamily || (PonceFamily = {}));
let family2 = PonceFamily.Isabela;
// console.log(PonceFamily.Julieta);
var PonceFamily2;
(function (PonceFamily2) {
    PonceFamily2["Ponce"] = "Yonathan";
    PonceFamily2["Santiago"] = "Cardona";
})(PonceFamily2 || (PonceFamily2 = {}));
const objPonce = {
    name: '',
    lastName: '',
    age: 0
};
const family5 = {
    amount: 5,
    womens: 3,
    mens: 2
};
const { amount, womens, mens } = family5;
function statusCode(code) {
    console.log(`My status code is ${code}`);
    return code;
}
console.log(statusCode(404));
console.log(statusCode('404'));
