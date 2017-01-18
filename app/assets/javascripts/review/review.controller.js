(function() {

    'use strict';

   function ReviewController($scope, $location) {
        $scope.name = "ReviewController"
        $scope.urlLocation = "/reviews"

    }

    ReviewController.$inject = ['$scope']

    angular
        .module('those-movie-guys')
        .controller('ReviewController', ReviewController)



}());
