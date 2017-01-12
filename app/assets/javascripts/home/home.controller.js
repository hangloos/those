(function() {

    'use strict';

   function HomeController($scope) {
        $scope.name = "Eric Loos home"
    }

    HomeController.$inject = ['$scope']

    angular
        .module('those-movie-guys')
        .controller('HomeController', HomeController)



}());
