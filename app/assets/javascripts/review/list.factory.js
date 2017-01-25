 
(function() {

    'use strict';

    function ListsFactory($http)  {

      return  {
        createList: createList
        
      }


      function createList(id,list) {
        var req = {
            method: 'POST',
            url: '/lists',
            headers: {
              'Content-Type': 'application/json' 
            },
            data: {
              id: id,
              name: list
            }
          };
          return $http(req)
                    .catch(handleError)

      }

      function handleResponse(response) {
        console.log(response)
        return response.data

      }

      function handleError(response)  {
        return response.data

      }


    }

     angular
      .module('those-movie-guys')
      .factory('ListsFactory', ListsFactory)


  }());