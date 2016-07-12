/**
 * Created by Georg on 17.05.2016.
 */
(function(){
    'use strict';


    angular
        .module('myApp.controllers')
        .controller('quizController',['$scope','dataservice', function($scope, dataservice){


            $scope.language ="en";

            $scope.$on('changeLanguage',function(msg,lang){
                $scope.language = lang;
              console.log("language switched");
            });

            getCards();



            function getCards() {
                dataservice.getCards()
                    .then(function (response) {
                        $scope.Cards = response.data;



                            ////////////////////////////////Array für nächste oder letzte Karte//////////////////////////////////////

                            var index=0;
                            var count = -1;  // for cardArray // Of by one Issue with Chapter Selection
                            var cardArray;
                            var chapter = "7";
                            var chapterChanged = false; //changeChapter
                            var tone; ////cardTone()/////
                            var color; ////cardTone()////
                            var rightAnswer = []; // right()
                            var wrongAnswer = []; // wrong()


                            $scope.takeOverChapter= function(chapter){
                              console.log(chapter);
                                cardArray=[j];

                                if(chapter == "All"){
                                    $scope.count = -1;
                                    cardArray=[$scope.Cards.length];
                                    for (var i = 0; i < $scope.Cards.length; i++) {
                                        cardArray[i] = i;
                                    }
                                    $scope.shuffleArray(cardArray);
                                }
                                else{
                                    $scope.count = -1;
                                    var j = 0; // count
                                    for(i = 0; i < $scope.Cards.length; i++){
                                        if($scope.Cards[i].chapter == chapter){
                                            cardArray[j] = i;
                                            j++;
                                        }
                                    }
                                    $scope.shuffleArray(cardArray);
                                }
                            };

                            $scope.shuffleArray = function(){

                                //Fisher–Yates Shuffle

                                var m = cardArray.length, t, i;

                                // While there remain elements to shuffle…
                                while (m) {

                                    // Pick a remaining element…
                                    i = Math.floor(Math.random() * m--);

                                    // And swap it with the current element.
                                    t = cardArray[m];
                                    cardArray[m] = cardArray[i];
                                    cardArray[i] = t;
                                }

                            };

                            $scope.Add=function() {
                                $scope.count++;
                                $scope.index = cardArray[$scope.count];
                                cardTone(); /////return color;
                            };

                            $scope.Minus=function(){
                                $scope.count--;
                                $scope.index = cardArray[$scope.count];
                                cardTone(); /////return color;
                            };


                            //////////////////////////////Toggles zwischen Displayarten bei Karteikarten//////////////////////////////////7

                            $scope.answer = function(){
                                $scope.Cards[$scope.index].characterShow=!$scope.Cards[$scope.index].characterShow;
                                $scope.Cards[$scope.index].translationShow=!$scope.Cards[$scope.index].translationShow;
                                $scope.Cards[$scope.index].pinyinShow=!$scope.Cards[$scope.index].pinyinShow;
                            };


                            ///////////////////////////////////////Farbliche Hinterlegung der Karten//////////////////////////////////////

                            var cardTone = function(){
                                tone = $scope.Cards[$scope.index].tone;

                                switch (tone) {
                                    case 1:
                                        color = "blue";
                                        break;
                                    case 2:
                                        color = "green";
                                        break;
                                    case 3:
                                        color = "yellow";
                                        break;
                                    case 4:
                                        color = "red";
                                        break;
                                    default:
                                        color = "white";

                                }
                                ///////Jetzt: set Background Color zu Farbe bei add minus right oder wrong////Nach UI/UX Upgrade///
                                console.log(color);
                                console.log(tone);
                            };

                        //////////////////////////Right or Wrong Option at the Quiz//////////////////////////////////////


                        $scope.right= function(){
                                rightAnswer.push(index);
                                count++;
                                index = cardArray[count];
                                console.log(rightAnswer);
                                $scope.Add();
                            };

                            $scope.wrong= function(){
                                wrongAnswer.push(index);
                                count++;
                                index = cardArray[count];
                                console.log(wrongAnswer);
                                $scope.Add();
                            };

                    }, function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });
            }



    }]);

})();
