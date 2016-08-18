var app = angular.module('teaCart', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/cart.html',
		controller: 'mainController'
	})
	$locationProvider.html5Mode(true);
})
