/**
 * Created by Georg on 06.06.2016.
 */
(function(){
    'use strict';

    angular.module('myApp.core')
        .factory('broadcastservice', ['$rootScope', function($rootScope) {
        return {
            send: function(msg, data) {

                $rootScope.$broadcast(msg, data);
            }
        }
    }]);
})();
