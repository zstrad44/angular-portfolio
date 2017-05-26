angular
  .module('portApp')
  .controller('HomeCtrl', ['$scope', function($scope) {
    $scope.firstLines= [
    "&lt;%= Ruby on Rails %&gt;",
    "(){ JavaScript }",
    "&lt; HTML5 /&gt;",
     "#CSS { <br>content: CSS3;<br> &amp;:SASS<br> }",
     "&lt; Zach Stradling /&gt;" ];
     $scope.secondLines = ["Full Stack Developer"];

    $(function(){
      $(".heroName").typed({
        strings:$scope.firstLines,
        typeSpeed: 60,
        contentType: 'html',
        startDelay: 1000,
        callback: function() {
            $( ".typed-cursor" ).first().hide();
            $(".heroSubtext").typed({
                strings: $scope.secondLines,
                typeSpeed: 50,
                contentType: 'html',
                startDelay: 500
            });
        }
      });
    });
  }]);
