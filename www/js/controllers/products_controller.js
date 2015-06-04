angular.module('hubapp')

.controller('ProductsController', function($scope, $ionicActionSheet, Hub) {
  $scope.purchase = function (product) {
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
        Hub.purchase.add(purchase).then(function(){
          console.log(purchase);
        });
        return true;
      }
    });
  };

  Hub.product.findAll().then(function(products){
    $scope.products = products;
  });
});
