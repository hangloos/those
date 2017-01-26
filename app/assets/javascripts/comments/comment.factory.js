 
(function() {

    'use strict';

    function CommentsFactory($http)  {

      return  {
        createComment: createComment,
        getCommentsTotal: getCommentsTotal,
        deleteComment: deleteComment,
        updateComment: updateComment
        
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

      function getCommentsTotal(id) {
        return $http.get('/reviews/' + id)
                  .then(handleResponse)
      }

      function  deleteComment(comment_id) {
        var req = {
            method: 'DELETE',
            url: '/reviews/:review_id/comments/:comment_id',
            headers: {
              'Content-Type': 'application/json' 
            },
            data: {
              id: comment_id
            }
          };
          return $http(req)
                    .catch(handleError)
      }

      function updateComment(comment_id, review_id, comment) {
        var req = {
          method: 'PATCH',
          url: '/reviews/' + review_id+ '/comments/' + comment_id,
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            comment: comment,
            id: comment_id
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