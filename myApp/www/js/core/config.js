/**
 * Created by Georg on 17.05.2016.
 */

(function(){

        'use strict';



        var core = angular.module('myApp.core'); ////////////////Getter for core.module.js (imports dependencies)


        core.config(['$routeProvider','$translateProvider', function ($routeProvider,$translateProvider){

            $routeProvider

                .when('/', {
                    templateUrl: 'public/main/main.html'
                    ////////no controller/////////
                })
                .when('/Quiz',{
                    templateUrl: 'public/quiz/quiz.html',
                    controller:'quizController'
                })
                .when('/CharacterQuiz',{
                    templateUrl:'public/quiz/templates/characterQuiz.html',
                    controller:'quizController'
                })
                .when('/PinyinQuiz',{
                    templateUrl:'public/quiz/templates/pinyinQuiz.html',
                    controller:'quizController'
                })
                .when('/TranslationQuiz',{
                    templateUrl:'public/quiz/templates/translationQuiz.html',
                    controller:'quizController'
                })
                .when('/HardcoreCharacterQuiz',{
                    templateUrl:'public/quiz/templates/hardcoreCharacterQuiz.html',
                    controller:'quizController'
                })
                .when('/FlashcardTable',{
                    templateUrl: 'public/flashCardTable/flashcardTable.html',
                    controller:'flashCardController'
                })
                .when('/Account',{
                    templateUrl: 'public/Account/account.html'
                    ////////no controller/////////
                })
                .when('/About',{
                    templateUrl: 'public/About/about.html'
                    ////////no controller/////////
                })
                .when('/Immersion',{
                    templateUrl:'public/Immersion/immersion.html',
                    controller:'immersionController'
                })
                .otherwise({
                    redirectTo: '/'
                });



            /*$translateProvider.registerAvailableLanguageKeys(['en','de'],{
             'en-US': 'en',
             'en-UK': 'en',
             'de-DE': 'de',
             'de-CH': 'de',
             'fr-FR': 'en',
             'it-IT': 'en'


             });

             $translateProvider.determinePreferredLanguage();
             */

            $translateProvider
                .preferredLanguage('en')

                .useStaticFilesLoader({
                    prefix:'public/lang/',
                    suffix:'.json'

                    //prefix: 'https://FIREBASENAME.firebaseio.com/locales/',
                    //suffix: '.json'

                })
                .fallbackLanguage('de')
                .useSanitizeValueStrategy('escape');

            //$translateProvider.preferredLanguage('en');

        }]);



})();