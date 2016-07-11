/**
 * Created by Georg on 17.05.2016.
 */
(function (){
    'use strict';

    angular
        .module('myApp.widgets')
        .directive('myTurnCard', [myTurnCard]);

    function myTurnCard (){

        return{
            restrict : 'E',
            template:

                '<md-button ng-click="answer()">{{"QUIZ.ANSWER_ID" | translate}}</md-button>'

        }


    }
})();