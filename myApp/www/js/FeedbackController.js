/**
 * Created by Georg on 18.07.2016.
 */
(function(){
  'use strict';


  angular
    .module('myApp.controllers')
    .controller('feedbackController',['$scope', function($scope) {


      $scope.sendMail = function () {
        var link = "mailto:georg.westner@googlemail.com"
            + "?cc=georg.westner@googlemail.com";
        console.log('Email sent');
        window.location.href = link;
      }

    }])})();
