angular.module('hubapp')

.controller('PurchasesController', function ($scope, Hub, $filter) {
  Hub.purchase.findAll().then(function (purchases) {
    $scope.purchasesByDate = groupByDate(purchases);
  });

  function groupByDate (purchases) {
    var purchasesByDate = {};
    angular.forEach(purchases, function(purchase) {
      var date = $filter('date')(purchase.createdAt);
      if (!purchasesByDate[date]) {
        purchasesByDate[date] = [];
      }
      purchasesByDate[date].push(purchase);
    });
    return purchasesByDate;
  }
});
