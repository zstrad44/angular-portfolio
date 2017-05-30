angular
  .module('portApp')
  .controller('ResumeCtrl', ['$scope', function($scope) {
    $scope.pdfUrl = '/assets/docs/zchary_stradling_resume_2017_color.pdf';
    $scope.colorResume = '/assets/docs/zchary_stradling_resume_2017_color.pdf';
    $scope.bwResume = '/assets/docs/zchary_stradling_resume_2017_bw.pdf';
  }]);
