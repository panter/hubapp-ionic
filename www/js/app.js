// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('hubapp', [
  'ionic'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
})

.factory('Hub',[function(){
  return Hub;
}])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'views/home.html'
  })

  .state('login', {
    url: '/',
    templateUrl: 'views/login.html',
    controller: 'LoginController'
  })

  .state('products', {
    url: '/products',
    templateUrl: 'views/products.html',
    controller: 'ProductsController'
  })

  .state('purchases', {
    url: '/purchases',
    templateUrl: 'views/purchases.html',
    controller: 'PurchasesController'
  });
});
