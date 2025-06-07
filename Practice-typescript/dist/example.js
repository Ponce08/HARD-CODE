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
console.log(PonceFamily2.Santiago);
