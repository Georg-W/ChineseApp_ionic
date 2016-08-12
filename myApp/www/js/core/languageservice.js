/**
 * Created by Georg on 04.06.2016.
 */
(function(){
    'use strict';

    angular.module('myApp.core')
        .service('languageservice', ['$translate','$rootScope', function($translate, $rootScope) {

          var language_ ="en";

          this.getLang = function (){
            return language_;
          };

          $rootScope.$on('languageGotChanged',function(msg,lang){
            console.log('wuhu');
            console.log(lang);
            language_ = lang;
            console.log("language switched");
          });

        }]);
})();
