/**
 * Created by rakeshmistry on 18/03/16.
 * Straker Angular JS Exercise.
 */

//Define App
var app = angular.module('myApp',['ngSanitize']);

app.controller('bookCtrl', function($scope,$http,$sce) {

    $http.get("../data.json") // or http://workbenchadmin.strakertranslations.com/dummy/data.json
        .then(function(response) {
            //First function handles success
            $scope.books = response.data;
            //console.log(response.data);
        }, function(response) {
            //Second function handles error
            $scope.books = "Something went wrong";
        });

    $scope.bookDetails = function($key,$sce)
    {
        //console.log($scope.books[$key]);
        $scope.title = $scope.books[$key]['title'];
        $scope.author = $scope.books[$key]['author'];
        $scope.body = $scope.books[$key]['body']
    }

});