(function() {

    'use strict';

    angular
        .module('those-movie-guys')
        .controller('HomeController', HomeController)

   function HomeController(Auth,$rootScope, $location) {
      var vm = this
        vm.logout = Auth.logout
        vm.login = login
        vm.register = register

         Auth.currentUser()
              .then(function(user)  {
                window.localStorage.setItem('user', JSON.stringify(user))
                $rootScope.currentUser = user
              }, function(error)  {
                console.log(error)
              }) 


        function login()  {
          var config = {
                  headers: {
                      'X-HTTP-Method-Override': 'POST'
                  }
            };

            Auth.login(vm.userForm, config)
                .then(function(user)  {
                  $rootScope.currentUser = user
                  window.localStorage.setItem('user', JSON.stringify(user))
                  $location.path('/reviews')
                }, function(error)  {
                  $rootScope.errors = error.data.errors
                  $rootScope.error = error.data.error
                });
          }

        function register() {
           var config = {
                    headers: {
                        'X-HTTP-Method-Override': 'POST'
                    }
            };

        
            Auth.register(vm.userForm, config)
                  .then(function(registeredUser)  {
                      $rootScope.currentUser = registeredUser
                      window.localStorage.setItem('user', JSON.stringify(registeredUser))
                      $location.path('/reviews')
                }, function(error)  {
                  $rootScope.errors = error.data.errors
                  $rootScope.error = error.data.error
            });
        }


        $rootScope.$on('devise:logout', function(event, user)  {
          $rootScope.currentUser = {}
          window.localStorage.removeItem('user')
          $location.path('/reviews')
        })

  }

}());
