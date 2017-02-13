
     angular
      .module('those-movie-guys')
      .factory('ReviewsFactory', ReviewsFactory)

    function ReviewsFactory($stateParams, $http, $timeout)  {

      return {
        getReviews: getReviews,
        getReview: getReview,
        createReview: createReview,
        updateReview: updateReview,
        deleteReview: deleteReview,
        getInformation: getInformation,
        createReviewLike: createReviewLike,
        getTheaters: getTheaters
      }

      function getReviews() {
        return $http.get('/reviews')
              .then(handleResponse)
              .catch(handleError)

      }

      function getReview(id)  {
        return $http.get('http://localhost:3000/reviews/' + id)
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

      function getTheaters(lat, long)  {
        var lat = lat.toFixed(2)
        var long = long.toFixed(2)
        return $http.get('https://api.foursquare.com/v2/venues/explore?ll='+lat+','+long+'&query=Movie%20Theater&client_id=EMPR4BQDMW4G3Y1COXNYKU4RILKJ5T0P2L5CSDEPSUCD3Q0V&client_secret=PWOU4QRIOBOON2ILKGUM2G1AUS13FECKIIMTOGH0WBSXFOHE&v=20170213')
                      .then(handleResponse)
                      .catch(handleError)

      }



      function createReviewLike(review_id, user_id) {
        var req = {
          method: 'POST',
          url: '/reviews/:review_id/review_likes',
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            review_id: review_id,
            user_id: user_id
          }
        };
        return $http(req)
                  .catch(handleError)
      }


      function updateReview(review_id,rating,review_content) {

        var req = {
          method: 'PATCH',
          url: '/reviews/'+review_id,
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            those_movie_guys_rating: rating,
            those_movie_guys_review: review_content
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
        return response.data

      }

      function handleError(response)  {
        return response.data

      }

    }
