
var fnDecl = /^[ ]*function[ ]?\(.*\)[ ]?\{\n?/m,
    trailingBrace = /[ ]*\}(?![\s\S]*\})$/m;

module.exports = function (fn) {
  return fn.toString().
    replace(fnDecl, '').
    replace(trailingBrace, '').
    trim();
};
