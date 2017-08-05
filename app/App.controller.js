(function(){
    angular.module('app')
        .controller('AppController', controller);

    controller.$inject = ['mockEmployeeApi'];
    function controller(mockEmployeeApi){
        var vm = this;

        mockEmployeeApi.get({}, function(res){
            vm.employees = res;
        });
    }
})();