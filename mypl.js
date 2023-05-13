// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "program", "symbols": ["var_assignment"], "postprocess": id},
    {"name": "program", "symbols": ["number"], "postprocess": id},
    {"name": "var_assignment", "symbols": ["identifier", {"literal":"="}, "number", {"literal":";"}]},
    {"name": "var_assignment", "symbols": ["number", {"literal":";"}]},
    {"name": "identifier$ebnf$1", "symbols": [/[a-z]/]},
    {"name": "identifier$ebnf$1", "symbols": ["identifier$ebnf$1", /[a-z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "identifier", "symbols": ["identifier$ebnf$1"], "postprocess": id},
    {"name": "number", "symbols": ["integer", {"literal":"."}, "integer"], "postprocess": 
        data => Number(data[0] + "." + data[2])
        },
    {"name": "number", "symbols": ["integer"], "postprocess":  
        data => Number(data[0])
             },
    {"name": "integer$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "integer$ebnf$1", "symbols": ["integer$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "integer", "symbols": ["integer$ebnf$1"], "postprocess": 
        data => data[0].join("")
            }
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
