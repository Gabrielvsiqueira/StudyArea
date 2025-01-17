//Módulos: São conjuntos de código.
// 3 tipos de módulos:
//-> Todos os arquivos javascript no node são módulos;
//-> Nativcs;
//-> npm (Node package Manager);

// require vai sempre importar todos os módulos no node.

const {printName, lastName} = require('./printName');

printName(`Gabriel ${lastName}`);

const os = require('os');
console.log(os.type());