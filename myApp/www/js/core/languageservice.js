/**
 * Created by Georg on 04.06.2016.
 */
(function(){
    'use strict';

    angular.module('myApp.core')
        .service('languageservice', ['$translate','broadcastservice','$rootScope', function($translate, broadcastservice ,$rootScope) {

            /*this.getLanguage = function(langKey){
                $translate.use(langKey);
                var lang = langKey;
              console.log(lang);
                //broadcastservice.send('changeLanguage',lang);
                $rootScope.$broadcast('changeLanguage', langKey);
              console.log('lang got changed');
            };*/

        }]);
})();
