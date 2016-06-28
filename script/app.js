var app = angular.module("sampleApp", ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/users", {
		templateUrl: "partials/users.html", 
		controller: "SimpleController"
	}).
	when("/login", {
		templateUrl: "partials/login.html", 
		controller: "LoginController"
	}).
	when("/home", {
		templateUrl: "partials/home.html", 
		controller: "HomeController"
	}).
	otherwise({
		redirectTo: '/login'
	});
}]);