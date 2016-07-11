/**
 * Created by Georg on 17.05.2016.
 */
myApp.filter('chapterSelection', function(){

    if($scope.chapterSelection == "All"){
        return card;
    }
    if($scope.chapterSelection==Card.chapter){
        return Card;
    }
});
