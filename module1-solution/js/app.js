(function (){
	'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
	$scope.dishes="";
	$scope.message="";
	var i=0;
	$scope.check=function(){
		var string=$scope.dishes.split(',');
		var count=string.length;
		if(string==""){
			$scope.message="Please enter Data First"
		}
		else if(count<=3){
			$scope.message="Enjoy!";
		}
		else {
			$scope.message="Too much!";
		}
	};
}

})();
