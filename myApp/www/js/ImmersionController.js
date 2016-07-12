/**
 * Created by Georg on 02.06.2016.
 */
(function(){
    'use strict';


    angular
        .module('myApp.controllers')
        .controller('immersionController',['$scope', 'dataservice', function($scope, dataservice) {

          var youtubeChannelsShow = false;
          var moviesShow = false;
          var comedyShow = false;
          var musicShow = false;
          var talksShow = false;
          var podcastsShow = false;
          var booksShow = false;
          var cultureShow = false;
          var blogsShow = false;
          var martialShow = false;
          var philosophyShow = false;
          var otherShow = false;

            getLinks();

            function getLinks() {
                dataservice.getLinks()
                    .then(function (response) {
                        $scope.Links = response.data;
                      console.log($scope.Links[1]);
                    }, function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });
            }


        }])
})();
