/**
 * Created by Georg on 17.05.2016.
 */
(function(){
    'use strict';


    angular
        .module('myApp.controllers')
        .controller('flashCardController',['$scope', '$rootScope','dataservice', 'languageservice', function($scope, $rootScope, dataservice,languageservice){

            $scope.Cards = [];

            getCards();

          
          $scope.active = false;


          $scope.select= function(item) {
            $scope.selected = ($scope.selected === item ? null : item);
          };

          $scope.isActive = function(item) {
            return $scope.selected === item;
          };

          $scope.language = languageservice.getLang();

          $rootScope.$on('$viewContentLoading',
            function(){
              $scope.language = languageservice.getLang();
              console.log('funzt');
              console.log($scope.language);
            });


            $scope.chapterSelection = "";


                        function getCards() {
                    dataservice.getCards()
                        .then(function (response) {
                            $scope.Cards = response.data;
                        }, function (error) {
                            $scope.status = 'Unable to load customer data: ' + error.message;
                        });
                }



                    $scope.ignoreTones = function(actual, expected) {
                        if (angular.isObject(actual)) return false;
                        function ignoreAccents(value) {
                            return value
                                .replace(/ā/g, 'a')
                                .replace(/á/g, 'a')
                                .replace(/ǎ/g, 'a')
                                .replace(/à/g, 'a')
                                .replace(/ē/g, 'e')
                                .replace(/é/g, 'e')
                                .replace(/ě/g, 'e')
                                .replace(/è/g, 'e')
                                .replace(/ī/g, 'i')
                                .replace(/í/g, 'i')
                                .replace(/ǐ/g, 'i')
                                .replace(/ì/g, 'i')
                                .replace(/ō/g, 'o')
                                .replace(/ó/g, 'o')
                                .replace(/ǒ/g, 'o')
                                .replace(/ò/g, 'o')
                                .replace(/ū/g, 'u')
                                .replace(/ú/g, 'u')
                                .replace(/ǔ/g, 'u')
                                .replace(/ù/g, 'u')
                                .replace(/ǖ/g, 'u')
                                .replace(/ǘ/g, 'u')
                                .replace(/ǚ/g, 'u')
                                .replace(/ǜ/g, 'u');
                        }
                        actual = ignoreAccents(angular.lowercase('' + actual));
                        expected = ignoreAccents(angular.lowercase('' + expected));

                        return actual.indexOf(expected) !== -1;
                    };

                    $scope.sortField = 'translation';
                    $scope.reverse = true;


    }]);

})();
