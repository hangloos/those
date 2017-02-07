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

        vm.open = function(item){
            $('.ui.modal.' + item).modal('show')
        }

        vm.hide = function(item){
            $('.ui.modal.' + item).modal('hide')
        }

        Auth.currentUser()
              .then(function(user)  {
                vm.user = user
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
                  window.localStorage.setItem('user', JSON.stringify(user))
                  vm.user = user
                  location.reload()
                  $location.path('/reviews')
                }, function(error)  {
                  if (error.data.error) {
                    vm.error = error.data.error
                    alert(error.data.error)
                  }
                  else  {
                    vm.error = error.data.errors
                    alert(error.data.errors)
                  }

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
                      vm.user = registeredUser
                      window.localStorage.setItem('user', JSON.stringify(vm.user))
                      location.reload()
                      $location.path('/reviews')
                }, function(error)  {
                 vm.error = error.data.errors
                 vm.errors = error.data.errors
                  if (vm.errors.email)  {
                    vm.errors.email.forEach(function (value){
                      alert("email " + value)
                    }) 
                  }
                  if (vm.errors.password)  {
                    vm.errors.password.forEach(function (value){
                      alert("password " + value)
                    }) 
                  }
            });
        }


        $rootScope.$on('devise:logout', function(event, user)  {
          window.localStorage.removeItem('user')
          vm.user = {}
          location.reload()
          $location.path('/reviews')
          
        })

  }

}());
