angular
  .module('portApp')
  .controller('PortfolioCtrl', ['$scope', function($scope,  Lightbox) {

    $scope.tab = 0;

    $scope.setTab = function (tabId) {
       $scope.tab = tabId;
    };

    $scope.isSet = function (tabId) {
       return $scope.tab === tabId;
    };

    // $scope.openLightboxModal = function (index) {
    //   Lightbox.openModal($scope.mainProjects, index);
    // };

    $(document).ready(function(){
        resizeDiv();

        window.onresize = function(event) {
        resizeDiv();
        };
    });

    function resizeDiv() {
        var vpw = $(window).width();
        var vph = $(window).height();

        var newHeight = vph - 250;
        $scope.height = newHeight;

        $('.sidebar').css({'height': newHeight});
    }

    $scope.config = {
     autoHideScrollbar: false,
      theme: '3d-dark',
      advanced:{
      updateOnContentResize: true
      },
      setHeight: $scope.height,
      scrollInertia: 0
    };

    $scope.mainProjects = [
      {
          id: 1,
          name: "AZ Atty App",
          altText: "Ruby on Rails application",
          img: "az-atty-app/screenshot-az-atty-app-admin-dashboard.png",
          link: "#",
          github: "https://github.com/zstrad44/az-atty-app",
          title: "Legal Notice Management Application",
          details: "In December 2016, Arizona Attorney Services expanded their client base. I was tasked alone, with developing, creating and designing a web application that would allow them to easily manage their landlord tenant services.",
          modalId: "1",
          openSource: true,
          tech: [
            {
              id: 0,
              name: 'Ruby on Rails'
            },
            {
              id: 1,
              name: 'Ruby'
            },
            {
              id: 2,
              name: 'SCSS'
            },
            {
              id: 3,
              name: 'HTML5'
            },
            {
              id: 4,
              name: 'jQuery'
            },
            {
              id: 5,
              name: 'JavaScript'
            }
          ]
      },
      {
          id: 2,
          name: "TaskBloc",
          altText: "Ruby on Rails todo list application.",
          img: "taskBloc/screenshot-taskbloc-dashboard.png",
          link: "#",
          github: "https://github.com/zstrad44/blocitoff",
          title: "Self Destructing To-Do List App",
          details: " I built this...",
          modalId: "2",
          openSource: true,
          tech: [
            {
              id: 0,
              name: 'Ruby on Rails'
            },
            {
              id: 1,
              name: 'Ruby'
            },
            {
              id: 2,
              name: 'SCSS'
            },
            {
              id: 3,
              name: 'HTML5'
            },
            {
              id: 4,
              name: 'jQuery'
            },
            {
              id: 5,
              name: 'JavaScript'
            }
          ]
      },
      {
          id: 3,
          name: "Connexis Cloud",
          altText: "Connexis Cloud Screenshot",
          img: "connexis-cloud/screenshot-connexiscloud-login.png",
          link: "#",
          github: "#",
          title: "Enterprise Management Application",
          details: "Worked on this..",
          modalId: "3",
          openSource: false,
          tech: [
            {
              id: 0,
              name: 'CSS'
            },
            {
              id: 1,
              name: 'HTML5'
            },
            {
              id: 2,
              name: 'jQuery'
            },
            {
              id: 3,
              name: 'JavaScript'
            }
          ]
      },
      {
          id: 4,
          name: "iMs Supplies",
          altText: "ecommerce application",
          img: "ims-supplies/screenshot-supplies.ims-trident-index.png",
          link: "#",
          github: "#",
          title: "Ecommerce Web Application",
          details: "I built this..",
          modalId: "4",
          openSource: false,
          tech: [
            {
              id: 0,
              name: 'CSS'
            },
            {
              id: 1,
              name: 'HTML5'
            },
            {
              id: 2,
              name: 'jQuery'
            },
            {
              id: 3,
              name: 'JavaScript'
            }
          ]
      },
      {
          id: 5,
          name: "Goldman Accident",
          altText: "Lawfirm Angular Website",
          img: "goldman-accident/screenshot-goldman-accident-index.png",
          link: "#",
          github: "https://github.com/zstrad44/goldman-accident-angular",
          title: "AngularJS Web Application",
          details: "I built this..",
          modalId: "5",
          openSource: true,
          tech: [
            {
              id: 0,
              name: 'AngularJS'
            },
            {
              id: 1,
              name: 'SCSS'
            },
            {
              id: 2,
              name: 'HTML5'
            },
            {
              id: 3,
              name: 'jQuery'
            },
            {
              id: 4,
              name: 'JavaScript'
            }
          ]
      },
  ];
  }]);
