(function() {

    'use strict';

    // var popular = {
    //   transclude: true,
    //   controller: PopularComponentController,
    //   templateURL: 'components/popular/popular.html'
    // }

    angular
        .module('those-movie-guys')
        .controller('PopularController', PopularController)


    function PopularController(PopularFactory) {
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
      return PopularFactory.getDiscoverMovieInformation()
                          .then(setDiscoverMovieInformation)
    }


    function setDiscoverMovieInformation(data) {
      vm.discoverMovies = data
    }

    function getDiscoverTvInformation() {
      return PopularFactory.getDiscoverTvInformation()
                          .then(setDiscoverTvInformation)
    }

    function setDiscoverTvInformation(data) {
      vm.discoverTv = data
    }


    }




}());
