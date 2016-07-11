/**
 * Created by Georg on 17.05.2016.
 */

(function (){
    'use strict';

    angular
        .module('myApp.widgets')
        .directive('myThereAndBackAgain', [myThereAndBackAgain]);

    function myThereAndBackAgain (){

        return{
            restrict : 'E',
            template:

            '<md-button id="last_btn" ng-click="Minus()">{{"QUIZ.BACK_ID" | translate}}</md-button>'+
            '<md-button id="next_btn" ng-click="Add()">{{"QUIZ.NEXT_ID" | translate}}</md-button>'
        }

    }

})();


