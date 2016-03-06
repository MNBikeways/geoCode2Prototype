'use strict';

angular.module('mnbikewaysMap').controller('nicerideCtlr',['$scope', 'mnNRFactory', '$interval',function($scope, mnNRFactory, $interval){

		mnNRFactory.nrBackend();
		$interval(mnNRFactory.nrBackend, 60000);
}]);
