angular
  .module('portApp')
  .controller('MasterCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.closeMenu = $(function() {
      $('.panel-collapse').collapse({
        toggle: false
      });
    });

    $rootScope.$on('$locationChangeStart', function() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

    $scope.siteNav = [
      {
        id: 0,
        name: "Home",
        icon: "fa-home",
        url: "home",
        subMenu: "",
        home: true
      },
      {
        id: 1,
        name: "About",
        icon: "fa-address-card-o",
        url: "about",
        subMenu: "",
        home: false
      },
      {
        id: 2,
        name: "Skills",
        icon: "fa-sliders",
        url: "skills",
        subMenu: "",
        home: false
      },
      {
        id: 3,
        name: "Portfolio",
        icon: "fa-code",
        url: "portfolio",
        subMenu: "",
        home: false
      },
      {
        id: 4,
        name: "Contact",
        icon: "fa-mobile",
        url: "contact",
        subMenu: "",
        home: false
      }
    ];

    $scope.contact =
    {
      phone: '480-489-0076',
      email: 'zachstradling@gmail.com',
      github: 'https://github.com/zstrad44',
      linkedin: 'https://www.linkedin.com/in/zacharystradling/',
      resume: '/assets/resume.pdf'
    };

    $scope.socialMedia = [
        {
            id: 1,
            name: "GitHub",
            url: "https://github.com/zstrad44",
            icon: "fa-github"
        },
        {
            id: 1,
            name: "Linkedin",
            url: "https://www.linkedin.com/in/zacharystradling/",
            icon: "fa-linkedin"
        },
        {
            id: 1,
            name: "Email",
            url: "mailto:zachstradling@gmail.com",
            icon: "fa-envelope-o"
        }
    ];
    // Mobile Menu cross on click
    $scope.isActive = false;
    $scope.activeButton = function() {
      $scope.isActive = !$scope.isActive;
    };

  }]);
