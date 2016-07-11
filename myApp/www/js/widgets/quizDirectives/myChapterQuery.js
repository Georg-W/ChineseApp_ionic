/**
 * Created by Georg on 17.05.2016.
 */
(function (){
    'use strict';

    angular
        .module('myApp.widgets')
        .directive('myChapterQuery', [myChapterQuery]);

    function myChapterQuery (){

        return{
            restrict : 'E',
            template:
            '<h4 translate>{{"QUIZ.CHAPTER_ID"}}:</h4>'+

            '<md-input-container>' +
                '<label translate>{{QUIZ.CHAPTER_ID}}</label>' +
                '<md-select ng-model="chapterSelection" md-on-close="takeOverChapter()">' +
                    '<md-option value="All" translate>' +
                    '{{"QUIZ.ALL_ID"}}'+
                    '</md-option>'+
                    '<md-option value="1" translate>1' +
                    '</md-option>'+
                    '<md-option value="2" translate>2' +
                    '</md-option>'+
                    '<md-option value="3" translate>3' +
                    '</md-option>'+
                    '<md-option value="4" translate>4' +
                    '</md-option>'+
                    '<md-option value="5" translate>5' +
                    '</md-option>'+
                    '<md-option value="6" translate>6' +
                    '</md-option>'+
                    '<md-option value="8" translate>8' +
                    '</md-option>'+
                '</md-select>' +
            '</md-input-container>'
        }

    }

})();

