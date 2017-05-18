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
        name: "About",
        icon: "fa-address-card-o",
        url: "about",
        subMenu: ""
      },
      {
        id: 1,
        name: "Skills",
        icon: "fa-sliders",
        url: "skills",
        subMenu: ""
      },
      {
        id: 2,
        name: "Portfolio",
        icon: "fa-code",
        url: "portfolio",
        subMenu: ""
      },
      {
        id: 3,
        name: "Contact",
        icon: "fa-mobile",
        url: "contact",
        subMenu: ""
      }
    ];

    $scope.socialMedia = [
        {
            id: 1,
            name: "GitHub",
            url: "",
            icon: "fa-github"
        },
        {
            id: 1,
            name: "Linkedin",
            url: "",
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
