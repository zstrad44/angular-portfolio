var App = angular.module('portApp', []);

App.directive('typedjs', function() {
  return {
    restrict: 'E',

    scope: {
      strings: '='
    },

    template: '<span class="typed-output"></span>',

    link: function($scope, $element, $attrs) {

      var options = {
        strings: $scope.strings,
        typeSpeed: 50,
        contentType: "html",
        showCursor: true,
        startDelay: 1000,
        cursorChar: "|",
        callback: function() {
            $( ".typed-cursor" ).first().hide();
            $(".heroSubtext").typed({
                strings: ["Full Stack Developer"],
                typeSpeed: 50,
                contentType: 'html',
                startDelay: 500
            });
        }
      };

      $(function() {
        $(".typed-output").typed(options);
      });

    }
  };
});
