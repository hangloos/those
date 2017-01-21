 
(function() {

    'use strict';

    function CommentsFactory($http)  {

      return  {
        createComment: createComment
      }


      function createComment(id,comment) {
        var req = {
            method: 'POST',
            url: '/reviews/:id/comments',
            headers: {
              'Content-Type': 'application/json' 
            },
            data: {
              comment: comment,
              id: id
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
      .factory('CommentsFactory', CommentsFactory)


  }());