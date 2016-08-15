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
          templateUrl: 'templates/android/menu.html',
          abstract:true
        })

        .state('app.quiz', {
          url: '/quiz',
          views: {
            'sidemenu': {
              templateUrl: 'templates/android/quiz.html',
              controller: 'quizController'
            }
          }
        })

        .state('app.flashcards', {
          url: '/flashcards',
          views: {
            'sidemenu': {
              templateUrl: 'templates/android/flashcards.html',
              controller: 'flashCardController'
            }
          }
        })


        .state('app.settings', {
          url: '/settings',
          views: {
            'sidemenu': {
              templateUrl: 'templates/android/settings.html',
              controller: 'navController'
            }
          }
        })

        .state('app.about', {
          url: '/about',
          views: {
            'sidemenu': {
              templateUrl: 'templates/android/about.html'
            }
          }
        })

        .state('app.feedback', {
          url: '/feedback',
          views: {
            'sidemenu': {
              templateUrl: 'templates/android/feedback.html'
            }
          }
        })

        .state('app.f', {
          url: '/f',
          views: {
            'sidemenu': {
              template: "<h1>HELLO!</h1>"
            }
          }
        })
        .state('app.q', {
          url: '/q',
          views: {
            'sidemenu': {
              templateUrl: 'templates/desktop/quiz.html'
            }
          }
        })
        .state('app.a', {
          url: '/a',
          views: {
            'sidemenu': {
              templateUrl: 'templates/desktop/about.html'
            }
          }
        })
        .state('app.fe', {
          url: '/fe',
          views: {
            'sidemenu': {
              templateUrl: 'templates/desktop/feedback.html'
            }
          }
        });



      $urlRouterProvider.otherwise('/app/f');

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
