angular.module('hubapp').filter('time', function () {
  return function (input) {
    return moment(input).format('HH:mm');
  };
});
