/**
 * Created by Georg on 18.07.2016.
 */
(function(){
  'use strict';


  angular
    .module('myApp.controllers')
    .controller('feedbackController',['$scope', function($scope) {


      $scope.sendMail = function (Mail) {
        console.log(Mail.message);
        var link = "mailto:links@journeytochinatown.com"
            + "?cc=$scope.usermail";
        console.log('Email sent');
        window.location.href = link;
      }

    }])})();
