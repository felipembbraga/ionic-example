angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.cartRioIdeal', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cartRioIdeal.html',
        controller: 'cartRioIdealCtrl'
      }
    }
  })

  .state('menu.solicitaEs', {
    url: '/solicitations',
    views: {
      'side-menu21': {
        templateUrl: 'templates/solicitaEs.html',
        controller: 'solicitaEsCtrl'
      }
    }
  })

  .state('menu.serviOs', {
    url: '/services',
    views: {
      'side-menu21': {
        templateUrl: 'templates/serviOs.html',
        controller: 'serviOsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('registrar', {
    url: '/signup',
    templateUrl: 'templates/registrar.html',
    controller: 'registrarCtrl'
  })

  .state('menu.tirarDVidas', {
    url: '/doubts',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tirarDVidas.html',
        controller: 'tirarDVidasCtrl'
      }
    }
  })

  .state('menu.acompanhamento', {
    url: '/solicitation/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acompanhamento.html',
        controller: 'acompanhamentoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});