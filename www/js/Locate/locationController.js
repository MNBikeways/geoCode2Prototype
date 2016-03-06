'use strict';

angular.module('mnbikewaysMap').controller('findLocationCtlr', ['$scope', '$window', function($scope, $window) {
      navigator.geolocation.getCurrentPosition(function(position) {
          $scope.latitude = position.coords.latitude;
          $scope.longitude = position.coords.longitude;
          $scope.isSearchCollapsed=false;

          $window.map = L.map('map', {
            center: [$scope.latitude, $scope.longitude],
            zoom: 16,
            layers: [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 19,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            })]
          });

        $scope.centerMarker = L.marker([$scope.latitude, $scope.longitude]);
          $scope.centerMarker.addTo($window.map);
        $scope.markers = new L.FeatureGroup([$scope.centerMarker]);
        });
}
]);
