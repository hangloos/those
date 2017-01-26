 
(function() {

    'use strict';

    function ListsFactory($http)  {

      return  {
        createList: createList,
        addToList: addToList
        
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

      function addToList(review_id, list_id)  {
        var req = {
          method: 'POST',
          url: '/bookmark',
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            review_id: review_id,
            id: list_id
          }
        };
        return $http(req)
                      .then(alert("Successfully Added To List"))
                      .then(location.reload())
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