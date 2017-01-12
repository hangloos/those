(function() {

    'use strict';

   function UserController($scope) {
        $scope.name = "Eric Loos user page"
    }

    UserController.$inject = ['$scope']

    angular
        .module('those-movie-guys')
        .controller('UserController', UserController)



}());