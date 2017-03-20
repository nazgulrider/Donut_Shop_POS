"use strict";

angular.module("donutApp").directive("loginDirective",[function(){
    return{
        restrict:"EA",
        templateUrl:"/app/views/login.html",
        controller:"loginCtrl"
    }
}]);