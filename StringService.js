'use strict';

angular.module('app')
    .factory('stringService', function() {
        return {
            format: function(formatString) {
                var args = [];
                for (var i = 1; i < arguments.length; i++) {
                    args.push(arguments[i]);
                }
                return formatString.replace(/{(\d+)}/g, function(match, number) {
                    return typeof args[number] != 'undefined'
                        ? args[number]
                        : match;
                });
            },
            isNumeric: function(stringToCheck) {
                return !isNaN(parseFloat(stringToCheck)) && isFinite(stringToCheck);
            },
            contains: function(sourceString, substring) {
                if (!sourceString || !substring) {
                    return false;
                }
                return sourceString.indexOf(substring) !== -1;
            },
            startsWith: function(sourceString, substring) {
                if (!sourceString || !substring) {
                    return false;
                }
                return sourceString.substr(0, substring.length) === substring;
            }
        };
    });