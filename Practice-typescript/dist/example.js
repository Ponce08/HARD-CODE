"use strict";
// const objType: { [index: string]: number } = {};
// objType.nombre = 4
// console.log(objType)
var PonceFamily;
(function (PonceFamily) {
    PonceFamily[PonceFamily["Ponce"] = 0] = "Ponce";
    PonceFamily[PonceFamily["Leydy"] = 1] = "Leydy";
    PonceFamily[PonceFamily["Santiago"] = 2] = "Santiago";
    PonceFamily[PonceFamily["Isabela"] = 3] = "Isabela";
    PonceFamily[PonceFamily["Julieta"] = 4] = "Julieta";
})(PonceFamily || (PonceFamily = {}));
let family2 = PonceFamily.Isabela;
console.log(family2);
