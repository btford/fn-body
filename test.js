var assert = require('assert');
var fnBody = require('./fn');

assert.equal(fnBody(function () {yo()}), 'yo()');
