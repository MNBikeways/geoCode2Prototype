'user strict';


angular.module('mnbikewaysMap').factory('addMarkersToMap', ['$window', function($window){

  return {addtoMap: function(marker, bounds){

    marker.addTo($window.map);
    $window.map.fitBounds(bounds.pad(.1));
  }}

}]);
