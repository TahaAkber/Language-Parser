const nearley  = require("nearley");
const grammer = require("./mypl.js");

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammer));

try{
    parser.feed("126.2;");
console.log("parse succeeded",parser.results);
}catch(e){
    console.log('parse failed: because this is not defined')
}


