var assert = require('assert');
var fnBody = require('./fn');

assert.equal(fnBody(function () {yo()}), 'yo()');
assert.equal(fnBody(function (argument) {yo()}), 'yo()');
assert.equal(fnBody(function($scope) {yo()}), 'yo()');
assert.equal(fnBody(function($scope, argument) {yo()}), 'yo()');
assert.equal(fnBody(function namedFunction($scope) {yo()}), 'yo()');