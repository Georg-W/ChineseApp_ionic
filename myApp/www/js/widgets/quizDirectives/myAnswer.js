/**
 * Created by Georg on 17.05.2016.
 */


(function (){
    'use strict';

    angular
        .module('myApp.widgets')
        .directive('myAnswer', [myAnswer]);

    function myAnswer (){

        return{
            restrict : 'E',
            template:
            '<h4 translate>{{"QUIZ.KNOWN_ID"}}</h4>'+
            '<md-button ng-click="right()">{{"QUIZ.YES_ID" | translate}}</md-button>'+
            '<md-button ng-click="wrong()">{{"QUIZ.NO_ID" | translate}}</md-button>'

        }

    }

})();

