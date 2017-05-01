angular
  .module('portApp')
  .controller('ContactCtrl', ['$scope', function($scope) {

    $scope.disabledRules = " contactForm.$pristine  || contactForm.$invalid || contactForm.name.$pristine || contactForm.name.$dirty && contactForm.name.$invalid || contactForm.email.$pristine || contactForm.email.$dirty && contactForm.email.$invalid || contactForm.message.$dirty && contactForm.message.$invalid";
    $scope.btnDisabledRules = "contactForm.captcha.$invalid || contactForm.captcha.$dirty && contactForm.captcha.$invalid || contactForm.$pristine  || contactForm.$invalid || contactForm.name.$pristine || contactForm.name.$dirty && contactForm.name.$invalid || contactForm.email.$pristine || contactForm.email.$dirty && contactForm.email.$invalid || contactForm.message.$dirty && contactForm.message.$invalid";

    // $scope.initDropdownMenu = function () {
    //     $(function () {
    //       // wait till load event fires so all resources are available
    //       $scope.dropdownMenu = $('ul.nav li.dropdown').hover(function() {
    //         if (parseInt($(window).width()) > 1100) {
    //           $(this).find('.dropdown-menu').stop(true, true).delay(100).slideDown(500);
    //         }
    //       }, function() {
    //         if (parseInt($(window).width()) > 1100) {
    //           $(this).find('.dropdown-menu').stop(true, true).delay(100).slideUp(400);
    //         }
    //       });
    //     });
    //   };
    //     $scope.initDropdownMenu();


    $scope.checkCaptcha = function() {
      $scope.captcha = $("#captcha").keyup(function(){
          var phrase, correct, wrongWay;
          phrase = ['zach', 'Zach', 'Zachary', 'zachary'];
          wrongWay = ['zack', 'Zack'];
          correct = true;

          for(var i = 0; i < phrase.length; i++) {
              if ( this.value === phrase[i]) {
                  console.log("Got It!!!");
                  correct = true;
                  return ifCorrect(correct);
              } else if ( this.value === wrongWay[i]) {
                  correct = 'wrong';
                  return ifCorrect(correct);
              }else {
                  correct = false;
                  ifCorrect(correct);
              }
          }
      });

      function ifCorrect(correct) {
          if (correct === true) {
              $('#captchaGroup').removeClass('has-warning');
              $('#captchaGroup').removeClass('has-error');
              $('#captchaGroup input').addClass('ng-valid');
              $('#captchaGroup').addClass('has-success');
              $('#captchaAlert').addClass('hidden');
              $('#submitBtn').removeClass('disabled');
          } else if (correct === 'wrong') {
              $('#captchaAlert').removeClass('hidden');
          } else {
              $('#captchaGroup input').addClass('ng-invalid');
              $('#captchaGroup').addClass('has-warning, has-error');
              $('#submitBtn').addClass('disabled');
          }
      }
    };
    $scope.checkCaptcha();

  }]);
