app.controller("SignUpTenant", function ($scope, $http) {

  // create a blank object to hold our form information
  $scope.signUpForm = {};

  $scope.submitData = function () {
    console.log($scope.signUpForm);
    $scope.signUpForm.confirm_success_url = '/';

    $scope.nameRequired = '';
    $scope.emailRequired = '';
    $scope.passwordRequired = '';

    if (!$scope.signUpForm.name) {
      $scope.nameRequired = 'Name Required';
    }

    if (!$scope.signUpForm.email) {
      $scope.emailRequired = 'Email Required';
    }

    if (!$scope.signUpForm.password) {
      $scope.passwordRequired = 'Password Required';
    }

    var promise = $http.post('http://private-anon-ba2cf4753-atgchallengeapi.apiary-mock.com/tenant?callback=JSON_CALLBACK', $scope.signUpForm);

    promise.success(function(data, status, headers, config) {
      console.log('success');
      $scope.message = data;
    });
    promise.error(function(data, status, headers, config) {
      alert( "failure message: " + JSON.stringify({data: data}));
    });

    
    //$http({
    //  method: 'POST',
    //  url: 'http://private-anon-ba2cf4753-atgchallengeapi.apiary-mock.com/tenant',
    //  data: $scope.signUpForm,  // pass in data as strings
    //  headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data
    //}).success(function (data) {
    //  if (!data.success) {
    //    console.log('not success');
    //    // if not successful, bind errors to error variables
    //    $scope.errorName = data.errors.name;
    //    $scope.errorSuperhero = data.errors.superheroAlias;
    //  }
    //  else {
    //    console.log(data);
    //    console.log('success');
    //    // if successful, bind success message to message
    //    $scope.message = data.message;
    //    $scope.errorName = '';
    //    $scope.errorSuperhero = '';
    //  }
    //});


    // Make the fields empty
    $scope.name = '';
    $scope.email = '';
    $scope.password = '';
  };
});