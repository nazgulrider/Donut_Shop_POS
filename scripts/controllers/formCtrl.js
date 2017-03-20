"use strict";

angular.module("donutApp").controller("formCtrl",["$scope","formService",function($scope,fs){
     $scope.personModel={
        firstName:"",
        lastName:"",
        street:"",
        city:"",
        state:"",
        zip:"",
        dob:"",
        phone:"",
        email:"",
        gender:""
	};

	$scope.submit=()=>{
		fs.setFirstName($scope.personModel.firstName);
		fs.setLastName($scope.personModel.lastName);
		fs.setStreet($scope.personModel.street);
		fs.setCity($scope.personModel.city);
		fs.setState($scope.personModel.state);
		fs.setZip($scope.personModel.zip);
		fs.setDob($scope.personModel.dob);
		fs.setPhone($scope.personModel.phone);
		fs.setEmail($scope.personModel.email);
		fs.setGender($scope.personModel.gender);
        
		console.log($scope.personModel);

	}


}]);