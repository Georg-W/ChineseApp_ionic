/**
 * Created by Georg on 02.06.2016.
 */
(function(){
    'use strict';


    angular
        .module('myApp.controllers')
        .controller('immersionController',['$scope', 'dataservice', function($scope, dataservice) {


            getLinks();

            function getLinks() {
                dataservice.getLinks()
                    .then(function (response) {
                        $scope.Links = response.data;
                    }, function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });
            }

        }])
})();
