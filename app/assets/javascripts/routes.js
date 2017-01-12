(function() {

    'use strict';

    angular
        .module('those-movie-guys')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html',
                    controller: 'HomeController as vm'
                })
                .state('home.user', {
                    url: 'user',
                    templateUrl: 'user/user.html',
                    controller: 'UserController as vm'
                })

            $urlRouterProvider.otherwise('/')
        })



}());
