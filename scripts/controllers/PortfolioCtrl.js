angular
  .module('portApp')
  .controller('PortfolioCtrl', ['$scope', function($scope) {
    $scope.mainProjects = [
    {
        id: 1,
        name: "AZ Atty App",
        altText: "Ruby on Rails application",
        img: "az-atty-app/screenshot-az-atty-app-admin-dashboard.png",
        link: "#",
        title: "Legal Notice Management Application",
        details: "In December 2016, Arizona Attorney Services expanded their client base. I was tasked alone, with developing, creating and designing a web application that would allow them to easily manage their landlord tenant services.",
        modalId: "1"
    },
    {
        id: 2,
        name: "TaskBloc",
        altText: "Ruby on Rails todo list application.",
        img: "taskBloc/screenshot-taskbloc-dashboard.png",
        link: "#",
        title: "Self Destructing To-Do List App",
        details: " I built this...",
        modalId: "2"
    },
    {
        id: 3,
        name: "Connexis Cloud",
        altText: "Connexis Cloud Screenshot",
        img: "connexis-cloud/screenshot-connexiscloud-login.png",
        link: "#",
        title: "Enterprise Management Application",
        details: "Worked on this..",
        modalId: "3"
    },
    {
        id: 4,
        name: "iMs Supplies",
        altText: "ecommerce application",
        img: "ims-supplies/screenshot-supplies.ims-trident-index.png",
        link: "#",
        title: "Ecommerce Web Application",
        details: "I built this..",
        modalId: "4"
    },
];
  }]);
