'use strict';

/**
 * @ngdoc function
 * @name deliverOnTheGoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the deliverOnTheGoApp
 */
angular.module('deliverOnTheGoApp')
  .controller('MainCtrl', function ($scope, $document) {
    $scope.toTheTop = function() {
      $document.duScrollTopAnimated(0,5000).then(function(){

      })
    }
    var about = angular.element(document.getElementById('about'));
    $scope.toSection2 = function(){
      $document.duScrollToElementAnimated(about);
    }
    var contact = angular.element(document.getElementById('contact'));
    $scope.toSection3 = function(){
      $document.duScrollToAnimated(contact);
    }
    var driver = angular.element(document.getElementById('driver'));
    $scope.toSection4 = function(){
      $document.duScrollToAnimated(driver);
    }
    var deliver = angular.element(document.getElementById('deliver'));
    $scope.toSection5 = function(){
      $document.duScrollToAnimated(deliver);
    }
    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
    });

    $scope.myInterval = 5000;
    $scope.slides = [
      {
        image: 'images/carousel1.png',
        text: 'Deliverpool',
        description: 'Get Paid Extra for delivering on your itinerary way :)'
      },
      {
        image: 'images/carousel2.png',
        text: 'Notched Up',
        description: 'Smart way to get hands on your goods '
      },
      {
        image: 'images/carousel3.png',
        text: 'No more tiring shopping trips',
        description: 'Stay home. Our drivers will reach you.'
      },
      {
        image: 'images/carousel4.png',
        text: 'Match made in our SYSTEM',
        description: 'We will strive to transport your good, matching perfect candidate to deliver'
      }
    ];

  })
  .value('duScrollOffset',30);
