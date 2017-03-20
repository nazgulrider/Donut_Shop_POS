"use strict";

angular.module("donutApp").directive("employeeFormDirective",[function(){
    return{
        restrict:"ECMA",
        templateUrl:"/app/views/employee-form.html",
        controller:"formCtrl"
        
    }
    
}]);