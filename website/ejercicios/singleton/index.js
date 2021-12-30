"use strict";
exports.__esModule = true;
var singletoncase_1 = require("./singletoncase");
/**
 * The client code.
 */
function clientCode() {
    var s1 = singletoncase_1["default"].getInstance();
    var s2 = singletoncase_1["default"].getInstance();
    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    }
    else {
        console.log('Singleton failed, variables contain different instances.');
    }
}
clientCode();
