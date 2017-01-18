(function() {

    'use strict';

    angular
        .module('those-movie-guys')
        .controller('HomeController', HomeController)

   function HomeController($scope, $location, HomeFactory) {
      var vm = this

      vm.getDiscoverMovieInformation = getDiscoverMovieInformation
      vm.setDiscoverMovieInformation = setDiscoverMovieInformation
      vm.getDiscoverTvInformation = getDiscoverTvInformation
      vm.setDiscoverTvInformation = setDiscoverTvInformation

      activate();

    function activate() {
      getDiscoverMovieInformation();
      getDiscoverTvInformation();

    }

    function getDiscoverMovieInformation() {
      return HomeFactory.getDiscoverMovieInformation()
                          .then(setDiscoverMovieInformation)
    }

    function setDiscoverMovieInformation(data) {
      vm.discoverMovies = data
    }

    function getDiscoverTvInformation() {
      return HomeFactory.getDiscoverTvInformation()
                          .then(setDiscoverTvInformation)
    }

    function setDiscoverTvInformation(data) {
      vm.discoverTv = data
    }




  }

}());
