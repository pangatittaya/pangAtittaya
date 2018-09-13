// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('menu', {
    url: '/menu',
    abstract: true,
    templateUrl: 'templates/menus.html'
  })

  // Each tab has its own nav history stack:

  .state('menu.main', {
    url: '/main',
    views: {
      'tab-dash': {
        templateUrl: 'templates/main.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('menu.member', {
    url: '/member',
    views: {
      'tab-member': {
        templateUrl: 'templates/member.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('menu.howto', {
    url: '/howto',
    views: {
      'tab-howto': {
        templateUrl: 'templates/howto.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('menu.connect', {
    url: '/connect',
    views: {
      'tab-Contact': {
        templateUrl: 'templates/connect.html',
        controller: 'DashCtrl'
      }
    }
  })
.state('menu.manager', {
    url: '/manager',
    views: {
      'tab-manager': {
        templateUrl: 'templates/manager.html',
        controller: 'DashCtrl'
      }
    }
  })
.state('menu.about', {
    url: '/about',
    views: {
      'tab-about': {
        templateUrl: 'templates/about.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('main', {
      url: '/menu/main',
        templateUrl: 'templates/main.html', 
  })

  .state('member', {
      url: '/menu/member',
        templateUrl: 'templates/member.html', 
  })

.state('howto', {
      url: '/menu/howto',
        templateUrl: 'templates/howto.html', 
  })
.state('connect', {
      url: '/menu/connect',
        templateUrl: 'templates/connect.html', 
  })
.state('manager', {
      url: '/menu/manager',
        templateUrl: 'templates/manager.html', 
  })

.state('profile_pop', {
      url: '/menu/member/profile_pop',
        templateUrl: 'templates/profile_pop.html', 
  })
.state('profile_lex', {
      url: '/menu/member/profile_lex',
        templateUrl: 'templates/profile_lex.html', 
  })
.state('profile_tar', {
      url: '/menu/member/profile_tar',
        templateUrl: 'templates/profile_tar.html', 
  })
.state('profile_ctc', {
      url: '/menu/main/profile_ctc',
        templateUrl: 'templates/profile_ctc.html', 
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/main');

});