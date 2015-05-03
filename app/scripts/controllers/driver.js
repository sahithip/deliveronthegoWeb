'use strict';

/**
 * @ngdoc function
 * @name deliverOnTheGoApp.controller:DriverCtrl
 * @description
 * # DriverCtrl
 * Controller of the deliverOnTheGoApp
 */
angular.module('deliverOnTheGoApp')
  .controller('DriverCtrl', function ($scope, $modal, Auth, $location, $cookieStore) {


    $scope.email;
    $scope.password;

    $scope.userSignIn={
      emailId: "",
      password:""
    }
    $scope.open = function(){

      var modalInstance = $modal.open({
        templateUrl:'signUpModalContent.html',
        controller: signUpModalInstanceCtrl,
        resolve :{
          items:function(){
            return $scope.items;
          }
        }
      });
      modalInstance.result.then(function(selectedItem){
        $scope.selected = selectedItem;
      },function(){
        console.log(('Modal dismissed at '+ new Date()));
      });

    }
    var signUpModalInstanceCtrl = function( $scope, $modalInstance, items){
      $scope.user={
        firstName :"",
        lastName : "",
        emailId: "",
        password:"",
        phoneNumber:""
      }
      $scope.signup = function(){
        var credentials = {firstName: $scope.user.firstName, lastName : $scope.user.lastName, emailId:$scope.user.emailId, password:$scope.user.password, phoneNumber: $scope.user.phoneNumber};
        console.log(credentials);
        Auth.signup(credentials).success(function(data, status){
          if(status === 200){
            $modalInstance.dismiss('ok');
            $location.path("/pickupHome");
          }
        }).error(function(error, status){

        })
      };
      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }

    $scope.signin = function(){
      var inputs = {emailId : $scope.userSignIn.emailId , password: $scope.userSignIn.password, userType: 'User'};
      console.log(inputs);
      if(inputs.emailId !== "" && inputs.password !== ""){
        Auth.login(inputs).success(function(data,status){
          console.log(data);
          console.log(status);
          if(status == 200 && data != null){
            console.log("login succeeded");
            $cookieStore.put("emailID", data.emailid);
            $cookieStore.put("userType", data.userType);
            $location.path("/pickupHome"); // FIXME : page getting in even no input is given
          }
        }).error(function(res,status){
          console.log("Login Failed");
          // show alert or modal here for failure
        })
      } else {
        alert("enter credentials properly");
      }

    }
  });
