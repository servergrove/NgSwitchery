'use strict';

var sampleApp = angular.module('NgSwitcherySample', ['NgSwitchery']);
sampleApp.controller('SwitchController', ['$scope', function SwitchController($scope){
	$scope.switches = {
		basic: true,
		custom: false
	}
}]);