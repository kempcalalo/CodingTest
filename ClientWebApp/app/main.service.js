(function () {
    'use strict';

    angular
        .module('app')
        .factory('MainService', MainService);

    function MainService($http) {
        var service = {
            data: {},
            getEmailTemplates: getEmailTemplates
        };

        function getEmailTemplates() {

            var apiURL = 'http://localhost:4126/';

            $http({
                method: 'GET',
                url: apiUrl + 'api/EmailTemplates/',
            }).then(function (response) {
                service.data = response.data;
                });

            return service.data;
        }
        return service;
    }

})();