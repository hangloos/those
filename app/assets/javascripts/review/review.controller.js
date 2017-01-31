(function() {

    'use strict';

    var app = angular
        .module('those-movie-guys')
        .controller('ReviewController', ReviewController)

   function ReviewController($scope ,$filter, $location, $stateParams, ReviewsFactory, CommentsFactory, LikesFactory, ListsFactory) {
        var vm = this;

        vm.deleteReview = deleteReview;
        vm.createReviewInformation = createReviewInformation;
        vm.reset = reset;
        vm.editTrueValue = false;
        vm.showEditForm = showEditForm;
        vm.editReviewRating = editReviewRating;
        vm.createComment = createComment;
        vm.deleteComment = deleteComment;
        vm.createLike = createLike;
        vm.getReviewShow = getReviewShow;
        vm.setReview = setReview;
        vm.createList = createList;
        vm.showListForm = showListForm
        vm.listFormValue = false;
        vm.editComment = editComment;
        vm.editCommentToggle = false;
        vm.updateComment = updateComment;
        vm.addToList = addToList;
        vm.createReviewLike = createReviewLike;
        vm.deleteList = deleteList;
        vm.roundUpNumber = roundUpNumber;

        vm.listReviews = [];
        vm.removeReviewsLists = removeReviewsLists;
        vm.removalListsObject = removalListsObject


        if (!$stateParams.reviewId) {
          getReviews();
        }

        if (!!$stateParams.reviewId) {
          getReviewShow($stateParams.reviewId);
        }

        // Reviews All

        function getReviews() {
          vm.newComment = ""
          vm.newReview = ""
          if (!!$stateParams.reviewId) {
            return ReviewsFactory.getReviews()
                        .then(setReviews)
          }

          if (!!$stateParams.reviewId)  {
            location.reload()
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
                              .then(location.reload())

        }

        function createReviewInformation() {
          return ReviewsFactory.getInformation(vm.newReview.imdb_id)
                               .then(setNewReview)
         }

         // Review Show

        function getReviewShow(id)  {
            return ReviewsFactory.getReview(id)
                                        .then(setReview)
        }

        function setReview(review)  {
            vm.reviewData = review

        }

        // Delete, Edit Review

        function deleteReview(id) {
          return ReviewsFactory.deleteReview(id)
                            .then(location.hash = "#/reviews")
                            .then(getReviews)
          
        }

        function editReviewRating(review_id) {
          //debugger
          if (this.newReview.those_movie_guys_review && !(this.newReview.those_movie_guys_rating)){
                      return ReviewsFactory.updateReview(review_id,"", this.newReview.those_movie_guys_review[review_id])
                            .then(getReviews)
          }

          else if (!(this.newReview.those_movie_guys_review) && this.newReview.those_movie_guys_rating){
          return ReviewsFactory.updateReview(review_id,this.newReview.those_movie_guys_rating[review_id], "")
                            .then(getReviews)
          }

          else if (!(this.newReview.those_movie_guys_review) && !(this.newReview.those_movie_guys_rating)){
          return getReviews();
          }

          else {
            return ReviewsFactory.updateReview(review_id,this.newReview.those_movie_guys_rating[review_id], this.newReview.those_movie_guys_review[review_id])
                            .then(getReviews)
          }
          
        }

         function reset() {
          vm.newReview = {}
          vm.editTrueValue = false
          vm.newList = {}
          vm.listFormValue = false
         }

         function showEditForm() {
           if (vm.editTrueValue) {
            vm.editTrueValue = false
          }

          else  {
          vm.editTrueValue = true
          }

          }


          // Comments

        function createComment(id)  {
          return CommentsFactory.createComment(id, this.newComment[id])
                                .then(getReviews)
        }


        function deleteComment(comment_id)  {
          return CommentsFactory.deleteComment(comment_id)
                                  .then(getReviews)
        }

        function editComment()  {
          if (vm.editCommentToggle) {
            vm.editCommentToggle = false
          }

          else  {
          vm.editCommentToggle = true
          }

        }

        function updateComment(comment_id, review_id)  {
          return CommentsFactory.updateComment(comment_id, review_id, this.newComment[comment_id])
                                    .then(getReviews)
        }


        // Lists

        function removalListsObject(list_id, review_id) {
          this.listReviews.push({list_id,review_id})

        }


        function removeReviewsLists(){
          return ListsFactory.removeFromLists(this.listReviews)
                                          .then(location.reload())
                                          .then(getReviews)
        }


        function showListForm() {
          if (vm.listFormValue) {
            vm.listFormValue = false
          }
          else  {
          vm.listFormValue = true
          }
          } 

        function createList(id) {
          return ListsFactory.createList(id, this.newList)
                                .then(alert("Successfully Created List"))
                                .then(location.reload())
                                .then(getReviews)
        }

        function addToList(review_id) {
          return ListsFactory.addToList(review_id, this.selectedList.id)
                                  .then(getReviews)

        }

        function deleteList(list_id)  {
          return ListsFactory.deleteList(list_id)
                                    .then(getReviews)
        }

        // Comment Likes , Review Likes
        function createReviewLike(review_id, user_id) {
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
