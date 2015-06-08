angular.module('hubapp')

.controller('LoginController', function ($scope, Hub) {
  $scope.user = {};

  $scope.login = function () {
    Hub.account.signIn($scope.user.email, $scope.user.password).then(function(response){
      //TODO Session handling
    });
  };
});
