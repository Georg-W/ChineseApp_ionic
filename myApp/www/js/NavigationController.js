/**
 * Created by Georg on 17.05.2016.
 */

(function() {
    'use strict';

 angular
     .module('myApp.controllers')
         .controller('navController',['$scope','$translate','$rootScope', function ($scope,  $translate, $rootScope) {

             $scope.changeLanguage = function (langKey) {
               console.log('look alive nav');
               $translate.use(langKey);
               $rootScope.$broadcast('languageGotChanged',langKey);
               console.log(langKey);
             };



 }]);
})();
