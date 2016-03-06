'use strict';

angular.module('mnbikewaysMap').directive('fullScreenMap', ['$window', function($window) {
        return {
          link: function($scope, element, attrs) {
              $scope.onResize = function() {
                var header = document.getElementById('header');
                var h = $window.innerHeight - header.clientHeight;
                element.height = h;
              }
              $scope.onResize();

              angular.element($window).bind('resize', function() {
                $scope.onResize();
              })
}}}]);
