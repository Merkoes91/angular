/* global angular */
// Created by Marko on 15-3-2016.

// create a module APP
// first param = name of the module
// second param = array with dependencies the module will use
var app = angular.module('app', []);

app.controller('mainCTRL', function() {
    var self = this;

    self.message = 'Hello Marko';

    self.updateMessage = function(message) {
        self.message = message;
    };
});