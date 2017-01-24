 
(function() {

    'use strict';

    function LikesFactory($http)  {

      return  {
        createLike: createLike
        
      }


      function createLike(review_id,comment_id) {
        var req = {
            method: 'POST',
            url: '/reviews/:review_id/comments/:comment_id/likes',
            headers: {
              'Content-Type': 'application/json' 
            },
            data: {
              review: review_id,
              comment: comment_id
            }
          };
          return $http(req)
                    .catch(handleError)

      }

      // function  deleteComment(comment_id) {
      //   var req = {
      //       method: 'DELETE',
      //       url: '/reviews/:review_id/comments/:comment_id',
      //       headers: {
      //         'Content-Type': 'application/json' 
      //       },
      //       data: {
      //         id: comment_id
      //       }
      //     };
      //     return $http(req)
      //               .catch(handleError)
      // }

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
      .factory('LikesFactory', LikesFactory)


  }());