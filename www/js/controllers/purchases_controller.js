angular.module('hubapp')

.controller('PurchasesController', function ($scope, Hub) {
  Hub.purchase.findAll().then(function (purchases) {
    $scope.purchases = purchases;
  });
});


// [
//   {
//     "id": "zyx1098",
//     "product": {
//       "id": "abc4567",
//       "name": "Coffee",
//       "description": "Espresso from coffee machine"
//     },
//     "createdAt": "2015-06-04T12:58:14.362Z",
//     "price": 1.0
//   }
// ]
