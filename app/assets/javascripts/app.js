(function() {

    'use strict';

    function ReviewController($scope) {
        $scope.name = 'Eric'
    }

    angular
        .module('those-movie-guys', ['ui.router', 'templates', 'Devise'])
        .config(function($httpProvider) {
            // for CSRF errors
            $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
        })



}());