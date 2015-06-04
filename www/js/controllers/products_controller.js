angular.module('hubapp')

.controller('ProductsController', function($scope, $ionicActionSheet) {
  $scope.purchase = function (product) {
    // Show the action sheet
    var hideSheet = $ionicActionSheet.show({
      buttons: [
       { text: 'One' },
       { text: 'Two' },
       { text: 'Three' },
       { text: 'Four' },
       { text: 'Five' }
      ],
      titleText: 'Select amount',
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        var amount = index + 1;
        var purchase = {product: product.id, amount: amount};
        console.log(purchase);
        // Hub.purchase.add(purchase);
        return true;
      }
    });
  };

  $scope.products = [
    {
      "id": "abc4567",
      "name": "Coffee",
      "description": "Espresso from coffee machine",
      "price": 1.0,
      "image": "/products/coffee.png"
    },
    {
      "id": "def8910",
      "name": "Beer",
      "description": "Free as in Open Source",
      "price": 3.0,
      "image": "/products/beer.png"
    }
  ];
});
