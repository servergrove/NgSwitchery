'use strict';

/**
 * Module to use Switchery as a directive for angular.
 * @TODO implement Switchery as a service, https://github.com/abpetkov/switchery/pull/11
 */
angular.module('NgSwitchery', [])
    .directive('uiSwitch', function() {

        /**
         * Initializes the HTML element as a Switchery switch.
         *
         * @TODO add a way to provide options for Switchery
         *
         * @param scope
         * @param elem
         * @param attrs
         */
        function linkSwitchery(scope, elem, attrs){
            var init = new Switchery(elem[0]);
        }

        return {
            restrict: 'AE',
            link: linkSwitchery
        }
    });

