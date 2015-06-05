angular.module('hubapp')

.controller('ProductsController', function($scope, Hub, $ionicActionSheet, $ionicPopup, $filter) {
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
          $scope.showPurchaseConfirmation(product, amount);
        });
        return true;
      }
    });
  };

  $scope.showPurchaseConfirmation = function(product, amount) {
   var totalAmount = $filter('price')(product.price * amount);
   var alertPopup = $ionicPopup.alert({
     title: 'Enjoy your ' + product.name + '!',
     template: 'Amount booked: <strong>' + totalAmount + '</strong>'
   });
  };

  Hub.product.findAll().then(function(products){
    $scope.products = products;
  });
});
