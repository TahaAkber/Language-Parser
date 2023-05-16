// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "program", "symbols": ["var_assignment"], "postprocess": id},
    {"name": "program", "symbols": ["number"], "postprocess": id},
    {"name": "program", "symbols": ["loop"], "postprocess": id},
    {"name": "loop$ebnf$1", "symbols": []},
    {"name": "loop$ebnf$1", "symbols": ["loop$ebnf$1", "var_assignment"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "loop", "symbols": ["loop_header", {"literal":"{"}, "loop$ebnf$1", {"literal":"}"}]},
    {"name": "loop$ebnf$2", "symbols": ["var_assignment"], "postprocess": id},
    {"name": "loop$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "loop", "symbols": ["loop_header", "loop$ebnf$2"]},
    {"name": "loop_header", "symbols": ["loop_header_for"]},
    {"name": "loop_header", "symbols": ["loop_header_while"]},
    {"name": "loop_header_for$string$1", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"c"}, {"literal":"l"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "loop_header_for", "symbols": ["loop_header_for$string$1", {"literal":"("}, "var_assignment", "condition", "inc", {"literal":")"}]},
    {"name": "loop_header_while$string$1", "symbols": [{"literal":"L"}, {"literal":"o"}, {"literal":"o"}, {"literal":"p"}, {"literal":"_"}, {"literal":"T"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "loop_header_while", "symbols": ["loop_header_while$string$1", {"literal":"("}, "condition", {"literal":")"}]},
    {"name": "condition$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":";"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "condition", "symbols": ["condition$string$1"]},
    {"name": "inc$string$1", "symbols": [{"literal":"+"}, {"literal":"+"}, {"literal":"/"}, {"literal":"-"}, {"literal":"-"}, {"literal":";"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "inc", "symbols": ["inc$string$1"]},
    {"name": "var_assignment$string$1", "symbols": [{"literal":":"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "var_assignment", "symbols": ["identifier", "var_assignment$string$1", "number", {"literal":";"}], "postprocess": 
        data => {
                return{
                        type: "var_assignment",
                        varname: data[0],
                        value: data[2]
                }
        }
                },
    {"name": "identifier$ebnf$1", "symbols": [/[0-9a-zA-Z$_]/]},
    {"name": "identifier$ebnf$1", "symbols": ["identifier$ebnf$1", /[0-9a-zA-Z$_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
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
