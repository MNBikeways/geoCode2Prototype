'use strict';

angular.module('mnbikewaysMap').factory('mnSearchFactory', ['$http', function($http) {
  return {searchBackend : function(val, latitude, longitude) {
    return $http.get('/searchAjax/', {
      params: {
        q: val,
        lat: latitude,
        lng: longitude
      }
    }).then(function(response) {
      if (response.data.length > 0) {
        return response.data;
      } else {
        return $http.get('http://nominatim.openstreetmap.org', {
          params: {
            q: val,
            format: 'json',
            bounded: 1,
            viewbox: "-97.5,49.5,-89.00,43.0",
            limit: 5
          }
        }).then(function(response) {
          var list_object = [];
          for (var i = 0; i < response.data.length; i++) {
            list_object.push({
              'name': response.data[i].display_name,
              'target': null,
              'source': null,
              'lat': response.data[i].lat,
              'lon': response.data[i].lon
            });
          };
          return list_object;
        })
      }
    });
    }
  }
}]);
