'use strict';

/**
 * @ngdoc function
 * @name deliverOnTheGoApp.controller:DriverCtrl
 * @description
 * # DriverCtrl
 * Controller of the deliverOnTheGoApp
 */
angular.module('deliverOnTheGoApp')
  .controller('DriverCtrl', function ($scope, $modal, Auth, $location) {
    $scope.email;
    $scope.password;

    $scope.user={
      email: "",
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
        email: "",
        password:"",
        name:""
      }
      $scope.signup = function(){
        var credentials = {username: $scope.user.name, email:$scope.user.email, password:$scope.user.password};
      // caal api here paasing load
      };
      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }

    $scope.signin = function(){
      var inputs = {email : $scope.user.email , password: $scope.user.password};
      $location.path("/pickupHome");
      //Auth.login(inputs).success(function(data,status){
      //  if(status== 200){
      //      $location.path("/pickupHome");
      //  }
      //}).error(function(res,status){
      //  console.log("Login Failed");
      //  // show alert or modal here for failure
      //})
    }
  });
