angular
      .module('those-movie-guys')
      .factory('HomeFactory', HomeFactory)

    function HomeFactory($stateParams, $http)  {

      return {
        getDiscoverMovieInformation: getDiscoverMovieInformation,
        getDiscoverTvInformation: getDiscoverTvInformation
      }

    function getDiscoverMovieInformation() {
      return $http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e87958eaf2755f8a2a62d3f8b42e4b52&include_adult=false&include_video=false&page=1')
                                .then(handleResponse)
                                .catch(handleError)
    }

    function getDiscoverTvInformation() {
      return $http.get('https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=e87958eaf2755f8a2a62d3f8b42e4b52&include_adult=false&include_video=false&page=1')
                                .then(handleResponse)
                                .catch(handleError)
    }


    function handleResponse(response) {
        return response.data.results

      }

      function handleError(response)  {
        return response.data.results

      }

    }
