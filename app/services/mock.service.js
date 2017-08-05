(function () {
    angular.module('app')
        .factory('mockEmployeeApi', service);

    service.$inject = ['$resource'];
    function service($resource) {
        return $resource('assets/mock/employees.json', null, {
            'get': {
                isArray: true,
                method: 'GET'
            }
        });
    }
})();