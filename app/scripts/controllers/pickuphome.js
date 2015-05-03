'use strict';

/**
 * @ngdoc function
 * @name deliverOnTheGoApp.controller:PickuphomeCtrl
 * @description
 * # PickuphomeCtrl
 * Controller of the deliverOnTheGoApp
 */

angular.module('deliverOnTheGoApp')

  .controller('PickuphomeCtrl', function ($scope, pickuprequest,$modal, $cookieStore) {
    $scope.showSearch = true;
    $scope.emailId='';
    $scope.checkBoxList = {
        liftWeight: '',
        sameDay: '',
      perish:'',
      checks:''
    }
    $scope.dimensions ={
      width : ' ',
      length : ' ',
      breadth : ' '
    }
    $scope.locations ={
      address1 : {},
      address2: {}
    }
    $scope.date = {
      pickup: ' ',
      dropoff: ' '
    }



    $scope.today = function() {
      $scope.date.pickup = new Date();
      $scope.date.dropoff = new Date();
    };
   // $scope.today();

    $scope.clear = function () {
      $scope.date.pickup = null;
      $scope.date.dropoff = null;
    };



    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.opened = {pickup : false, dropOff: false};
    $scope.openPickup = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened.pickup = true;

    };
    $scope.openDeliver = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened.dropOff = true;
    };

    $scope.dateOptions = {
      formatYear: 'yyyy',
      startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'MM/dd/yyyy', 'shortDate'];
    $scope.format = $scope.formats[3];



    $scope.sendRequest = function(){

      var pickupDate = ($scope.date.pickup.getMonth()+1) + '/' + $scope.date.pickup.getDate() + '/' + $scope.date.pickup.getFullYear();
      var dropOffDate = (($scope.date.dropoff.getMonth()+1) + '/' + $scope.date.dropoff.getDate() + '/' + $scope.date.dropoff.getFullYear())
      var pickupinput = {
        emailId: $cookieStore.get("emailID"),
        pickupLatitude : $scope.locations.address1.lat,
        pickupLongitude: $scope.locations.address1.lng,
        dropOffLatitude: $scope.locations.address2.lat,
        dropOffLongitude: $scope.locations.address2.lng,
        length: $scope.dimensions.length,
        breadth: $scope.dimensions.breadth,
        width: $scope.dimensions.width,
        pickupdate: pickupDate,
        dropoffdate: dropOffDate
      };

      console.log(pickupinput);
      pickuprequest.pickuprequest(pickupinput).success(function(data, status){
        if(status == 200){
          $scope.openConfirmation(1); // FIXME: HAVE A FLAG FOR SHOWING DIFFERENT CONTENT IN MODAL
        }
      }).error(function(res, status){
        console.log("request not logged successfully");
        $scope.openConfirmation(0);
      })
    }

    $scope.openConfirmation = function (flag){
      console.log("flag"+flag);
      var modalInstance = $modal.open({
        templateUrl:'driverNotification.html',
        controller: notificationModalInstanceCtrl,
        resolve :{
          flag:function(){
            return flag;
          }
        }
      });
      modalInstance.result.then(function(selectedItem){
        $scope.selected = selectedItem;
      },function(){
        console.log(('Modal dismissed at '+ new Date()));
      });
    }
    var notificationModalInstanceCtrl = function($scope, $modalInstance, flag){

      if( flag == 0 ){
        $scope.message = " Your request was unsuccessful"
      } else {
        $scope.message = " Your request was successful. You will receive a email confirmation shortly with Driver details."
      }

      $scope.okay = function () {
        $modalInstance.dismiss('cancel');
      };
    }


  });
