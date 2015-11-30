angular.module('myApp', [])
.controller('myAppController', function($scope){
	$scope.list = [
		{name: 'Wemerson', age: 22},
		{name: 'Snake', age: 42},
		{name: 'Eva', age: 31}
	]

	$scope.falar = function(){
		alert('teste');
	}
});