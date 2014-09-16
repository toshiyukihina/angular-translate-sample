'use strict';

/**
 * @ngdoc function
 * @name angularTranslateSampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTranslateSampleApp
 */
angular.module('angularTranslateSampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
