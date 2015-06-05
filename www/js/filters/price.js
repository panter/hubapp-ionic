angular.module('hubapp').filter('price', function() {
  return function(input) {
    return 'CHF ' + input + '.-';
  };
});
