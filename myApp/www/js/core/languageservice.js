/**
 * Created by Georg on 04.06.2016.
 */
(function(){
    'use strict';

    angular.module('myApp.core')
        .service('languageservice', ['$translate','broadcastservice',function($translate, broadcastservice) {

            this.getLanguage = function(langKey){
                $translate.use(langKey);
                var lang = langKey;
                broadcastservice.send('changeLanguage',lang);
              console.log('lang got changed');
            };

        }]);
})();
