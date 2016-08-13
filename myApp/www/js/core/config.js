/**
 * Created by Georg on 17.05.2016.
 */

(function(){

        'use strict';



        var core = angular.module('myApp.core')////////////////Getter for core.module.js (imports dependencies)


  .config(function($stateProvider, $urlRouterProvider, $translateProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('app', {
        url: '/app',
        templateUrl: function() {
          if (ionic.Platform.isAndroid()) {
            return  'templates/android/menu.html';
          }
          return "templates/desktop/menu.html";
        },
        abstract:true
      })

      .state('app.quiz', {
        url: '/quiz',
        views: {
          'sidemenu': {
            templateUrl: function() {
              if (ionic.Platform.isAndroid()) {
                return  'templates/android/quiz.html';
              }
              return "templates/desktop/quiz.html";
            },
            controller: 'quizController'
          }
        }
      })

      .state('app.flashcards', {
        url: '/flashcards',
        views: {
          'sidemenu': {
            templateUrl: function() {
            if (ionic.Platform.isAndroid()) {
              return  'templates/android/flashcards.html';
            }
            return "templates/desktop/flashcards.html";
            },
            controller: 'flashCardController'
          }
        }
      })


      .state('app.settings', {
        url: '/settings',
        views: {
          'sidemenu': {
            templateUrl: function() {
              if (ionic.Platform.isAndroid()) {
                return  'templates/android/settings.html';
              }
              return "templates/desktop/settings.html";
            },
            controller: 'navController'
          }
        }
      })

      .state('app.about', {
        url: '/about',
        views: {
          'sidemenu': {
            templateUrl: function() {
              if (ionic.Platform.isAndroid()) {
                return  'templates/android/about.html';
              }
              return "templates/desktop/about.html";
            }
          }
        }
      })

      .state('app.feedback', {
        url: '/feedback',
        views: {
          'sidemenu': {
            templateUrl: 'templates/feedback.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/app/flashcards');

    $translateProvider
      .preferredLanguage('en')

      .useStaticFilesLoader({
        prefix:'./lang/',
        suffix:'.json'

      })
      .fallbackLanguage('en')
      .useSanitizeValueStrategy('escape');


  });

})();
