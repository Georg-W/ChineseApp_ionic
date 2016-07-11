/**
 * Created by Georg on 17.05.2016.
 */

(function() {
    'use strict';

 angular
     .module('myApp.controllers')
         .controller('navController',['$scope','languageservice', function ($scope, languageservice) {

             $scope.changeLanguage = function (langKey) {
                languageservice.getLanguage(langKey);
             };


 }]);
})();
