'user strict';


angular.module('mnbikewaysMap').factory('addMarkersToMap', ['$window', function($window){

  return {addtoMap: function(marker){

    marker.addTo($window.map);
    $window.map.setView(marker.getLatLng(), 19)
  }}

}]);
