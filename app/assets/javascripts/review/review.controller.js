(function() {

    'use strict';

    var app = angular
        .module('those-movie-guys')
        .controller('ReviewController', ReviewController)

   function ReviewController($scope ,$filter, $location, $stateParams, UsersFactory, ReviewsFactory, CommentsFactory, LikesFactory, ListsFactory) {
        var vm = this;

        vm.getUser = getUser;
        vm.setUser = setUser;
        vm.deleteReview = deleteReview;
        vm.createReviewInformation = createReviewInformation;
        vm.reset = reset;
        vm.editReviewRating = editReviewRating;
        vm.createComment = createComment;
        vm.deleteComment = deleteComment;
        vm.createLike = createLike;
        vm.getReviewShow = getReviewShow;
        vm.setReview = setReview;
        vm.createList = createList;
        vm.updateComment = updateComment;
        vm.addToList = addToList;
        vm.createReviewLike = createReviewLike;
        vm.deleteList = deleteList;
        vm.roundUpNumber = roundUpNumber;
        vm.checkReviewLike = checkReviewLike;
        vm.listReviews = [];
        vm.removeReviewsLists = removeReviewsLists;
        vm.removalListsObject = removalListsObject

        
        vm.open = open;
        vm.hide = hide;
        vm.setTimeout = setTimeout;
        

        function open(item) {
          $('.ui.modal.' + item).modal('show')

        }

        function hide()  {
          $('.ui.modal').modal('hide')
        }


        if (!$stateParams.reviewId) {
          getReviews();
          //getUser(JSON.parse(localStorage.user).id);
          if (localStorage.user)  {
          vm.user = JSON.parse(localStorage.user)
          getUser(vm.user.id)
          }
        }

        if (!!$stateParams.reviewId) {
          getReviewShow($stateParams.reviewId);
        }

        // User

        function getUser(user_id)  {
          return UsersFactory.getUser(user_id)
                              .then(setUser)

        }

        function setUser(data)  {
          vm.user = data
        }

        // Reviews All

        function getReviews() {
          vm.newReview = ""
          if (!$stateParams.reviewId) {
            return ReviewsFactory.getReviews()
                        .then(setReviews)
          }

          if (!!$stateParams.reviewId)  {
            getReviewShow($stateParams.reviewId)
          }

          else {
          return ReviewsFactory.getReviews()
                        .then(setReviews)
          }
        }

        function setReviews(data) {
          vm.totalItems = data.length
          vm.reviews = data
          return vm.reviews
        }


         // Pagination Reviews

        vm.currentPage = 0;
        vm.pageSize = 4;

        vm.numberOfPages = function(){
          if (Math.ceil(vm.totalItems/vm.pageSize) != 0)  {
          return Math.ceil(vm.totalItems/vm.pageSize)
          }

          else  {
            return 1
          }
        }

        vm.currentCommentPage = 0;
        vm.commentPageSize = 2;

        function roundUpNumber(number){
          if (number == 0 ) {
            return 1
          }
          else {
          return Math.round(number)
          }
        }

        // Create Review

        function setNewReview(movie) {

          if (movie == "The service is unavailable.") {
            alert(movie);
          }

          else if (movie == "") {
            alert("Service down. No data returned. Please try again later.")
          }

          else {

          vm.newReview.title = movie.Title
          vm.newReview.actors = movie.Actors
          vm.newReview.genres = movie.Genre
          vm.newReview.awards = movie.Awards
          vm.newReview.box_office = movie.BoxOffice
          vm.newReview.director = movie.Director
          vm.newReview.language = movie.Language
          vm.newReview.picture_url = movie.Poster
          vm.newReview.production = movie.Production
          vm.newReview.rated = movie.Rated
          vm.newReview.year = movie.Year
          vm.newReview.runtime = movie.Runtime
          vm.newReview.review_type = movie.Type
          vm.newReview.writer = movie.Writer
          vm.newReview.imdb_rating = movie.imdbRating
          vm.newReview.imdb_votes = movie.imdbVotes
          vm.newReview.tomato_consensus_review = movie.tomatoConsensus
          vm.newReview.tomato_user = movie.tomatoUserMeter
          vm.newReview.tomato_user_votes = movie.tomatoUserReviews
          vm.newReview.tomato_critics = movie.tomatoMeter
          vm.newReview.tomato_critics_votes = movie.tomatoReviews
          vm.newReview.tomato_url = movie.tomatoURL
        
          return ReviewsFactory.createReview(vm.newReview)
                              .then(setReviews)
                              .then(location.hash = "#/reviews")
                              
            } 
    

        }

        function createReviewInformation() {
          return ReviewsFactory.getInformation(vm.newReview.imdb_id)
                               .then(setNewReview)
         }

         // Review Show

        function getReviewShow(id)  {
          if (!!$stateParams.reviewId) {
            return ReviewsFactory.getReview(id)
                                        .then(setReview)
          }
        }

        function setReview(review)  {
            vm.reviewData = review
            return vm.reviewData

        }

        // Delete, Edit Review

        function deleteReview(id) {
          return ReviewsFactory.deleteReview(id)
                            .then(location.hash = "#/reviews")
                            .then(getReviews)
          
        }

        function editReviewRating(review_id, rating, review) {
          if (review && !(rating)){
                      return ReviewsFactory.updateReview(review_id,"", review)
                            .then(getReviews)
                            .then(getReviewShow(review_id))
          }

          else if (!(review) && rating){
          return ReviewsFactory.updateReview(review_id,rating, "")
                            .then(getReviews)
                            .then(getReviewShow(review_id))
          }

          else if (!(review) && !(rating)){
          return getReviews();
          }

          else {
            return ReviewsFactory.updateReview(review_id,rating, review)
                            .then(getReviews)
                            .then(getReviewShow(review_id))
          }
          
        }

         function reset() {
          vm.comment = ""
          vm.newReview = {}
          vm.newList = ""
         }


          // Comments

        function createComment(review_id, user_id)  {
          return CommentsFactory.createComment(review_id, this.comment)
                                .then(reset)
                                .then(getReviews)
                                
        }


        function deleteComment(comment_id, review_id)  {
          return CommentsFactory.deleteComment(comment_id, review_id)
                                  .then(getReviews)
                                  
        }


        function updateComment(comment_id, review_id, comment)  {
          return CommentsFactory.updateComment(comment_id, review_id, comment)
                                    .then(getReviews)
                                  
        }


        // Lists

        function removalListsObject(list_id, review_id) {
          this.listReviews.push({list_id,review_id})

        }


        function removeReviewsLists(user_id){
          return ListsFactory.removeFromLists(this.listReviews)
                                          .then(getReviews)
                                          .then(getUser(user_id))
        }


        function createList(id) {
          return ListsFactory.createList(id, this.newList)
                                .then(getReviews)
                                .then(getUser(id))
                                .then(hide)
        }

        function addToList(review_id) {
          if (this.selectedList)  {
          return ListsFactory.addToList(review_id, this.selectedList.id)
                                  .then(getReviews)
          } else {
            open('bookmark');
          }


        }

        function deleteList(list_id,user_id)  {
          return ListsFactory.deleteList(list_id)
                                    .then(getReviews)
                                    .then(getUser(user_id))
        }

        // Comment Likes , Review Likes

        function checkReviewLike(user_id, review_id)  {
            this.reviews.forEach(function(value) {
              value.review_likes.forEach(function(value)  {
                user_id == value.user_id && review_id == value.review_id
              }) 
            })
          
        }
        function createReviewLike(event, review_id, user_id) {
          if (event.currentTarget.className == "ui toggle button active"){
          event.currentTarget.className = "ui toggle button";
          } else {
            event.currentTarget.className = "ui toggle button active";
          }
          return ReviewsFactory.createReviewLike(review_id,user_id)
                                       .then(getReviews)
        }

        function createLike(review_id, comment_id) {
          return LikesFactory.createLike(review_id,comment_id)
                                  .then(getReviews)
        }

        function deleteLike(review_id,comment_id) {
          return LikesFactory.deleteLike(review_id,comment_id)
                                  .then(getReviews)
        }


    }

    // Pagination Filter
    app.filter('startFrom', function() {
    return function(input, start) {
        start = start++;
        if (input)  { //parse to int
        return input.slice(start)
      }
    }
});




}());
