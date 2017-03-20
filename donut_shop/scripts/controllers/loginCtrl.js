"use strict";

angular.module("donutApp").controller("loginCtrl",["$scope","loginService",function($scope,ls){
    
    $scope.user={
        "username":"",
        "password":""
    }
 
    $scope.login=()=>{
        
    ls.setUsername($scope.user.username);
    ls.setPassword($scope.user.password);
    ls.validateUser();
 
    console.log($scope.user.username);
    }
    
}]);