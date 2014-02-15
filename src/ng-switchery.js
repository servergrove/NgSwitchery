'use strict';

/**
 * Module to use Switchery as a directive for angular.
 * @TODO implement Switchery as a service, https://github.com/abpetkov/switchery/pull/11
 */
angular.module('NgSwitchery', [])
    .directive('uiSwitch', ['$window', '$timeout', function($window, $timeout) {

        /**
         * Initializes the HTML element as a Switchery switch.
         *
         * @TODO add a way to provide options for Switchery
         * $timeout is in place as a workaround to work within angular-ui tabs.
         *
         * @param scope
         * @param elem
         * @param attrs
         */
        function linkSwitchery(scope, elem, attrs) {
            $timeout(function() {
                var init = new $window.Switchery(elem[0]);
                if (attrs.ngModel) {
                    scope.$watch(attrs.ngModel, function() {
                        init.setPosition(false);
                    });
                }
            }, 0);
        }
        return {
            restrict: 'AE',
            link: linkSwitchery
        }
    }]);
