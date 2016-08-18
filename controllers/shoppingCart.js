app.controller('mainController', ['$scope', '$http', 'shopFactory', function($scope, $http, shopFactory){
	$scope.test = shopFactory.data;
}])
