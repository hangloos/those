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
                .state('home.reviews',  {
                    url: 'reviews',
                    templateUrl: 'review/reviews.html',
                    controller: 'ReviewController as vm'
                })
                .state('createReview', {
                    url: '/reviews/create',
                    templateUrl: 'review/new.html',
                    controller: 'ReviewController as vm',
                })
            $urlRouterProvider.otherwise('/')
        })

}());
