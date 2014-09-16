'use strict';

/**
 * @ngdoc overview
 * @name angularTranslateSampleApp
 * @description
 * # angularTranslateSampleApp
 *
 * Main module of the application.
 */
angular
  .module('angularTranslateSampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider, $translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'locale/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('ja');
    $translateProvider.fallbackLanguage('en');
    $translateProvider.useMissingTranslationHandlerLog();

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
