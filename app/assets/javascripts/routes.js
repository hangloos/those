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
                .state('home.login', {
                    url: 'login',
                    templateUrl: 'home/login.html',
                    controller: 'HomeController as vm'
                })
                .state('home.register', {
                    url: 'register',
                    templateUrl: 'home/register.html',
                    controller: 'HomeController as vm'
                })
                .state('home.editProfile', {
                    url: 'user/edit',
                    templateUrl: 'home/edit_profile.html',
                    controller: 'HomeController as vm'
                })
                .state('home.reviews',  {
                    url: 'reviews',
                    templateUrl: 'review/reviews.html',
                    controller: 'ReviewController as vm'
                })
                .state('home.createReview', {
                    url: 'reviews/create',
                    templateUrl: 'review/new.html',
                    controller: 'ReviewController as vm'
                })
                .state('home.reviewShow', {
                    url: 'reviews/:reviewId',
                    templateUrl: 'review/reviewShow.html',
                    controller: 'ReviewController as vm'
                })
                .state('home.popular',  {
                    url: 'trending',
                    templateUrl: 'popular/popular.html',
                    controller: 'PopularController as vm'
                })
                .state('home.comments', {
                    url: 'comments',
                    templateUrl: 'comments/comments.html',
                    controller: 'ReviewController as vm'
                })
                .state('home.lists',    {
                    url: 'lists',
                    templateUrl: 'lists/index.html',
                    controller: 'ReviewController as vm'
                })
                .state('home.longMovies',    {
                    url: 'longMovies/:length',
                    templateUrl: 'review/longMovies.html',
                    controller: 'ReviewController as vm'
                })
            $urlRouterProvider.otherwise('reviews')
        })

}());
