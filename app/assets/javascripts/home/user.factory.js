angular
      .module('those-movie-guys')
      .factory('UsersFactory', UsersFactory)

      function UsersFactory($stateParams, $http)  {
        return {
        getUser: getUser
      }


      function getUser(user_id)  {
        return $http.get('/users/' + user_id)
                            .then(handleResponse)
      }


      function handleResponse(response) {
        return response.data

      }

      function handleError(response)  {
        return response.data

      }

      }