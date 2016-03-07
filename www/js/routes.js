angular.module('app')

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu': {
        templateUrl: 'templates/cartRioIdeal.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.solicitations', {
    url: '/solicitations',
    views: {
      'side-menu': {
        templateUrl: 'templates/solicitaEs.html',
        controller: 'solicitationCtrl'
      }
    }
  })

  .state('menu.services', {
    url: '/services',
    views: {
      'side-menu': {
        templateUrl: 'templates/serviOs.html',
        controller: 'serviceCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    abstract: true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('register', {
    url: '/signup',
    templateUrl: 'templates/registrar.html',
    controller: 'registerCtrl'
  })

  .state('menu.doubts', {
    url: '/doubts',
    views: {
      'side-menu': {
        templateUrl: 'templates/tirarDVidas.html',
        controller: 'doubtsCtrl'
      }
    }
  })

  .state('menu.trackSolicitation', {
    url: '/solicitation/:id',
    views: {
      'side-menu': {
        templateUrl: 'templates/acompanhamento.html',
        controller: 'trackSolicitationCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/login')



});
