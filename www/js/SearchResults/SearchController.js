'use strict';

angular.module('mnbikewaysMap').controller('searchCtlr', ['$scope', '$window', 'mnSearchFactory', 'addMarkersToMap',
  function ($scope, $window, mnSearchFactory, addMarkersToMap) {

    $scope.searchBiketrails = function (val) {

      return mnSearchFactory.searchBackend(val, $scope.latitude, $scope.longitude);
    };

    $scope.selectedFromSearch = new Array();
    $scope.onSelect = function ($item, $model, $label) {
      if ($scope.selectedFromSearch.length != 2) {
        $scope.selectedFromSearch.push($item);
        $scope.marker1 = L.marker([$scope.selectedFromSearch[0].lat, $scope.selectedFromSearch[0].lon]);
        $scope.markers.addLayer($scope.marker1);
        addMarkersToMap.addtoMap($scope.marker1);
        $scope.marker1.bindPopup('<div class="popup-wrapper"><div class="popup-element router"><img class="bicycle-popup" src="img/bicycle.png" alt="bicycle-routing">'+ 'Route' + '</div>' +
          '<div class="popup-element name">'+ $item.name + '</div></div>').openPopup();
      }
    };


  }]);
