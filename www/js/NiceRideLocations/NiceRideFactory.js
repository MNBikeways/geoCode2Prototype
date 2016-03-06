'use strict';

angular.module('mnbikewaysMap').factory('mnNRFactory', ['$http','$window', function($http,$window) {

   return {nrBackend: function(){  $http.get("/NR/").then(function(response){

                L.geoJson(response.data, {
                    pointToLayer: function (feature, latlng) {
                        return L.circleMarker(latlng, {
                            radius: 8,
                            fillColor: "#ff7800",
                            color: "#000",
                            weight: 1,
                            opacity: 1,
                            fillOpacity: 0.8
                        });
                    },
                    onEachFeature: function (feature, layer) {
                        layer.bindPopup("<h3>" + feature.properties.name + "</h3><ul><li>Number of Bikes: " + feature.properties.nbBikes + "</li>"
                                + "  <li>Empty Docks: " + feature.properties.nbEmptyDocks + "</li></ul>")
                    }
                }).addTo($window.map);
});}}}]);
