angular
  .module('portApp')
  .controller('SkillsCtrl', ['$scope', function($scope) {

    $scope.tab = 0;

    $scope.setTab = function (tabId) {
       $scope.tab = tabId;
    };

    $scope.isSet = function (tabId) {
       return $scope.tab === tabId;
    };


    $scope.frontEnd= [
      {
        id: 1,
        name: 'JavaScript',
        mainSkill: true,
        level: ''
      },
      {
        id: 2,
        name: 'HTML5',
        mainSkill: true,
        level: ''
      },
      {
        id: 3,
        name: 'CSS',
        mainSkill: true,
        level: ''
      },
      {
        id: 4,
        name: 'jQuery',
        mainSkill: true,
        level: ''
      },
      {
        id: 5,
        name: 'AngularJS',
        mainSkill: true,
        level: ''
      },
      {
        id: 6,
        name: 'Bootstrap',
        mainSkill: false,
        level: ''
      },
      {
        id: 7,
        name: 'SASS',
        mainSkill: false,
        level: ''
      },
    ];
    $scope.backEnd= [
      {
        id: 1,
        name: 'Ruby on Rails',
        mainSkill: true,
        level: ''
      },
      {
        id: 2,
        name: 'Ruby',
        mainSkill: true,
        level: ''
      },
      {
        id: 3,
        name: 'postgreSQL',
        mainSkill: false,
        level: ''
      }
    ];
    $scope.topSkills= [
      {
        id: 1,
        name: 'AngularJS',
        mainSkill: true,
        level: ''
      },
      {
        id: 2,
        name: 'Ruby on Rails',
        mainSkill: true,
        level: ''
      },
      {
        id: 3,
        name: 'Ruby',
        mainSkill: true,
        level: ''
      },
      {
        id: 4,
        name: 'JavaScript/ jQuery',
        mainSkill: true,
        level: ''
      }
    ];
    $scope.other= [
      {
        id: 1,
        name: 'Git',
        mainSkill: true,
        level: ''
      },
      {
        id: 2,
        name: 'Heroku',
        mainSkill: true,
        level: ''
      },
      {
        id: 3,
        name: 'Linux',
        mainSkill: true,
        level: ''
      },
      {
        id: 4,
        name: 'Adobe CC',
        mainSkill: true,
        level: ''
      }
    ];
  }]);
