"use strict";

angular.module("donutApp").service("formService",[function(){
    
    var employeeModel={
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

    this.setFirstName=(fName)=>employeeModel.firstName=fName;
    this.setLastName=(lName)=>employeeModel.lastName=lName;
    this.setStreet=(street)=>employeeModel.street=street;
    this.setCity=(city)=>employeeModel.city=city;
    this.setState=(state)=>employeeModel.state=state;
    this.setZip=(zip)=>employeeModel.zip=zip;
    this.setDob=(dob)=>employeeModel.dob=dob;
    this.setPhone=(phone)=>employeeModel.phone=phone;
    this.setEmail=(email)=>employeeModel.email=email;
    this.setGender=(gender)=>employeeModel.gender=gender;
}]);