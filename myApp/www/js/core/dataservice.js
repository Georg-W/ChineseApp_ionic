/**
 * Created by Georg on 17.05.2016.
 */
(function(){
   'use strict';

    angular.module('myApp.core')
        .factory('dataservice', ['$http',function($http){


            var urlBase_Links = 'Links.json';
            var urlBase_Cards = 'Flashcards.json';
            //var urlBase_Links = 'immersion/Immersion.json';

            var dataFactory = {};

            dataFactory.getCards = function () {
                return $http.get(urlBase_Cards);
            };
            dataFactory.getLinks = function () {
                return $http.get(urlBase_Links);
            };

            dataFactory.getCardById = function (id) {
                return $http.get(urlBase_Cards + '/' + id);
            };

            dataFactory.insertCard = function (card) {
                return $http.post(urlBase_Cards, card);
            };

            dataFactory.updateCard = function (card) {
                return $http.put(urlBase_Cards + '/' + card.ID, card); //no ID in Json!
            };

            dataFactory.deleteCard = function (card) {
                return $http.delete(urlBase_Cards + '/' + card);
            };


            return dataFactory;
        }]);
})();
