'use strict';

angular.module('mnbikewaysMap').controller('searchCtlr', ['$scope', '$window', 'mnSearchFactory', 'addMarkersToMap',
  function($scope, $window, mnSearchFactory, addMarkersToMap) {

      $scope.searchBiketrails = function(val) {

	return mnSearchFactory.searchBackend(val, $scope.latitude, $scope.longitude);
};

        $scope.selectedFromSearch = new Array();
        $scope.onSelect = function($item, $model, $label) {
          if ($scope.selectedFromSearch.length != 2) {
            $scope.selectedFromSearch.push($item);
          }
          $scope.marker1= L.marker([$scope.selectedFromSearch[0].lat, $scope.selectedFromSearch[0].lon]);
          $scope.markers.addLayer($scope.marker1);
          addMarkersToMap.addtoMap($scope.marker1, $scope.markers.getBounds())
        };
        if($scope.selectedFromSearch.length==1){
          $scope.searchUrl = "views/searchbox2.html";
        }else{
          $scope.searchUrl = "views/searchbox1.html";
        }


      }]);
