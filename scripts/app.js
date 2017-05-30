angular
  .module('portApp', [
    'ui.router',
    'ngMeta',
    'ngAnimate',
    'angular-typed',
    'ngScrollbars',
    'pdf'
  ])
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', 'ngMetaProvider', function($urlRouterProvider, $stateProvider, $locationProvider, ngMetaProvider) {
    // Remove hashbang
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true,
        rewriteLinks: false,
    });
    // Redirect 404
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('master', {
        //url: '/',
        templateUrl: '/templates/master.html',
        abstract: true,
        controller: 'MasterCtrl'
      })
      .state('home', {
        url: '/',
        parent: 'master',
        templateUrl: '/templates/home.html',
        controller: 'HomeCtrl',
        resolve: {
                  $title: function() {
                      return 'Home';
                  },
                  data: function(ngMeta) {
                      ngMeta.setTitle('Zach Stradling | Software Engineer');
                      ngMeta.setTag('url', 'http://zachstradling.com/');
                      ngMeta.setTag('type', 'website');
                      ngMeta.setTag('image', '');
                      ngMeta.setTag('description', 'Software Engineer in Tempe, Arizona. I have been doing web design and programming for over 6 years and have worked on projects of different sizes and in various industries.');
                      ngMeta.setTag('site_name', 'Zach Stradling | Software Engineer');
                  }
              }
      })
      .state('about', {
        url: '/about',
        parent: 'master',
        templateUrl: '/templates/about.html',
        controller: 'AboutCtrl'
      })
      .state('skills', {
        url: '/skills',
        parent: 'master',
        templateUrl: '/templates/skills.html',
        controller: 'SkillsCtrl'
      })
      // .state('portfolioMaster', {
      //   //url: '/',
      //   templateUrl: '/templates/portfolioMaster.html',
      //   abstract: true,
      //   controller: 'PortfolioMasterCtrl',
      //   parent: 'master'
      // })
      .state('portfolio', {
        url: '/portfolio',
        parent: 'master',
        templateUrl: '/templates/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .state('contact', {
        url: '/contact',
        parent: 'master',
        templateUrl: '/templates/contact.html',
        controller: 'ContactCtrl'
      })
      .state('resume', {
        url: '/resume',
        parent: 'master',
        templateUrl: '/templates/resume.html',
        controller: 'ResumeCtrl'
      });

      $locationProvider.html5Mode(true);
  }])
  .run(['ngMeta', function(ngMeta) {
        ngMeta.init();
    }]);
