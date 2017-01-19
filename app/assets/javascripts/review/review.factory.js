
     angular
      .module('those-movie-guys')
      .factory('ReviewsFactory', ReviewsFactory)

    function ReviewsFactory($stateParams, $http)  {

      return {
        getReviews: getReviews,
        getReview: getReview,
        createReview: createReview,
        updateReview: updateReview,
        deleteReview: deleteReview,
        getInformation: getInformation
      }

      function getReviews() {
        return $http.get('/reviews')
              .then(handleResponse)
              .catch(handleError)

      }

      function getReview(id)  {
        return $http.get('/reviews/' + id)
                  .then(handleResponse)
      }

      function createReview(review) {
      
          var req = {
            method: 'POST',
            url: '/reviews',
            headers: {
              'Content-Type': 'application/json' 
            },
            data: {
              review: review
            }
          };
          console.log(req)
          return $http(req)
                    .catch(handleError)
      }

      function getInformation(id) {
         return $http.get('http://www.omdbapi.com/?tomatoes=true&i=' + id)
                    .then(handleResponse)
                    .catch(handleError)
        }


      function updateReview(id,rating) {

        var req = {
          method: 'PATCH',
          url: '/reviews/'+id,
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            review: rating
          }
        };
        console.log(req)
        return $http(req)
                .catch(handleError)
      }

      function deleteReview(id) {

        var req = {
          method: 'DELETE',
          url: '/reviews/' + id,
          headers: {
            'Content-Type': 'application/json'
          }
        }

        return $http(req)
                     .then(handleDelete)
        }
      

      function handleDelete(response) {
        alert("Successfully Deleted")
      }  
      function handleResponse(response) {
        console.log(response)
        return response.data

      }

      function handleError(response)  {
        return response.data

      }

    }
