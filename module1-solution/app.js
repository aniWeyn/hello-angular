(function(){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController)
LunchCheckController.$inject = ['$scope'] //for mini file

function LunchCheckController($scope){
	$scope.input="";
	$scope.message = "";
	$scope.splitFood = function(){
		var stringToSplit = $scope.input;
		var arrayOfStrings = stringToSplit.split(',');
		console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
		
		if(stringToSplit === "")
		{
			$scope.message = "Please enter data first";
		}
		if(stringToSplit !== "" && arrayOfStrings.length <= 3)
		{
			$scope.message = "Enjoy!";
		}
		if(arrayOfStrings.length >= 4)
		{
			$scope.message = "Too much!";
		}
	}
	}
})();