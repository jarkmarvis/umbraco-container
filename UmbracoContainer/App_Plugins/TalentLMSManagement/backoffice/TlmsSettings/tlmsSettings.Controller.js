(function () {
    "use strict";

    function Controller() {

        var vm = this;
        vm.content = {
            name: "Talent LMS Settings"
        };

    }

    angular.module("umbraco").controller("tlmsSettings.Controller", Controller);
})();