'use strict';

angular.module('mnbikewaysMap').factory('mnSearchFactory', ['$http', function($http) {
  return {searchBackend : function(val, latitude, longitude) {
    return $http.get('https://api.mapbox.com/geocoding/v5/mapbox.places/'+
      val+
      '.json?proximity='+longitude+','+latitude+
    '&cc=us&access_token=pk.eyJ1IjoiYm95ZGpvaG5zb24iLCJhIjoiNTEyMWNjMTY2ZTBhNzAxNjEwMzE0ODhmMjdkNzAxZTUifQ.rXmBJmEXZZOyMS8uzeP4-A', {
    }).then(function(response) {
      var list_object = [];
      for (var i = 0; i < response.data.features.length; i++) {
        list_object.push({
          'name': response.data.features[i].place_name,
          'lat': response.data.features[i].geometry.coordinates[1],
          'lon': response.data.features[i].geometry.coordinates[0]
        });
      }
      return list_object;
  })
}}}]);
