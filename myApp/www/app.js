/**
 * Created by Georg on 26.03.2016.
 */
(function () {
    'use strict';

    var myApp = angular.module('myApp',[

        'myApp.core',
        'myApp.widgets',
        'myApp.controllers',
        'ionic'

    ])

      .run(function($ionicPlatform) {

        $ionicPlatform.ready(function() {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
          if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
          }
          if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
          }

        });
      })})();




























