/**
 * Created by Georg on 02.06.2016.
 */
(function () {
  'use strict';


  angular
    .module('myApp.controllers')
    .controller('immersionController', ['$scope', 'dataservice', function ($scope, dataservice) {

      $scope.youtubeChannelsShow = false;
      $scope.moviesShow = false;
      $scope.comedyShow = false;
      $scope.musicShow = false;
      $scope.talksShow = false;
      $scope.podcastsShow = false;
      $scope.booksShow = false;
      $scope.cultureShow = false;
      $scope.blogsShow = false;
      $scope.martialShow = false;
      $scope.philosophyShow = false;
      $scope.otherShow = false;

      getLinks();

      function getLinks() {
        dataservice.getLinks()
          .then(function (response) {
            $scope.Links = response.data;
          }, function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
          });
      }

      $scope.youtubeChannelsChange = function () {
        $scope.youtubeChannelsShow = !$scope.youtubeChannelsShow;
      };
      $scope.moviesChange = function () {
        $scope.moviesShow = !$scope.moviesShow;
      };
      $scope.comedyChange = function () {
        $scope.comedyShow = !$scope.comedyShow;
      };
      $scope.musicChange = function () {
        $scope.musicShow = !$scope.musicShow;
      };
      $scope.talksChange = function () {
        $scope.talksShow = !$scope.talksShow;
      };
      $scope.podcastsChange = function () {
        $scope.podcastsShow = !$scope.podcastsShow;
      };
      $scope.booksChange = function () {
        $scope.booksShow = !$scope.booksShow;
      };
      $scope.cultureChange = function () {
        $scope.cultureShow = !$scope.cultureShow;
      };
      $scope.blogsChange = function () {
        $scope.blogsShow = !$scope.blogsShow;
      };
      $scope.martialChange = function () {
        $scope.martialShow = !$scope.martialShow;
      };
      $scope.philosophyChange = function () {
        $scope.philosophyShow = !$scope.philosophyShow;
      };
      $scope.otherChange = function () {
        $scope.otherShow = !$scope.otherShow;
      };



    }])
})();
