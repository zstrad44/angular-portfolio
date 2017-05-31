angular
  .module('portApp')
  .controller('ResumeCtrl', ['$scope', function($scope) {
    $scope.pdfUrl = '/assets/docs/zachary_stradling_resume_2017_color.pdf';
    $scope.colorResume = '/assets/docs/zachary_stradling_resume_2017_color.pdf';
    $scope.bwResume = '/assets/docs/zachary_stradling_resume_2017_bw.pdf';
  }]);
