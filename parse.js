const nearley  = require("nearley");
const grammer = require("./mypl.js");

let parser;

try{
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammer));
    parser.feed("excluded(a:=3;condition;++/--;){a:=10;}");
console.log("parse succeeded",parser.results);
}catch(e){
    console.log(e,'parse failed: because this is not defined')
}
// try{
//     parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammer));
//     parser.feed("Loop_Till(a:=2;){a:=5;}");
// console.log("parse succeeded",parser.results);
// }catch(e){
//     console.log(e,'parse failed: because this is not defined')
// }
try{
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammer));
    parser.feed("a:=12;");
console.log("parse succeeded",parser.results);
}catch(e){
    console.log(e,'parse failed: because this is not defined')
}


