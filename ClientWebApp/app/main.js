(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);

    function main(MainService) {

        var vm = this;
        vm.food = MainService.getEmailTemplates();

    }

})();