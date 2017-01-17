'use strict';
// optional controllers
function HomeCtrl($scope, $http) {
}

function ProjectCtrl($scope, $http) {
//Localvariables
 $scope.firstname = "";
 $scope.filledform = false;
 $scope.lastname = "";
 $scope.age = "";
 $scope.dob = "";
 $scope.city = ["Chandigarh", "Dehradun", "Ambala","Delhi"];
 
 
 
 //functions
 $scope.submitForm = function() {
       
		
	    $scope.array={fName:$scope.firstname, lName:$scope.lastname, age:$scope.age,dob:$scope.dob, city:$scope.selectedName};
		localStorage.setItem("temp", $scope.array);
		
		$scope.xyz=localStorage.getItem("temp");
		
		$scope.filledform = true;
		
		
		
    }
 
}

function PrivacyCtrl($scope, $http, $timeout) {
}

function AboutCtrl($scope, $http, $timeout) {
}
