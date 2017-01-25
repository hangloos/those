// (function() {

//     'use strict';


//     angular
//         .module('those-movie-guys')
//         .controller('ReviewShowController', ReviewShowController)

//         function ReviewShowController($stateParams, ReviewsFactory) {
          
//           var vm = this

//           activate();

//           function activate() {
//             getReviewShow();
//           } 

//           vm.getReviewShow = getReviewShow;
//           vm.setReview = setReview;


//           function getReviewShow()  {
//             return ReviewsFactory.getReviewShow($stateParams.id)
//                                         .then(setReview)
//           }

//           function setReview(review)  {
//             vm.reviewData = review
//           }


//         }




//   }());