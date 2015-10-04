var app = angular.module('RoutingApp', [
	'ui.router',
	'RoutingApp.controllers'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	var sp = $stateProvider;

	sp.state('home', {
		url: '/',
		templateUrl: 'public/partials/home.html',
		controller: 'HomeController'
	});

	sp.state('about', {
		url: '/about',
		templateUrl: 'public/partials/about.html',
		controller: 'AboutController'
	});

	sp.state('contact', {
		url: '/contact',
		templateUrl: 'public/partials/contact.html',
		controller: 'ContactController'
	});

	sp.state('contact.first', {
		url: '/first',
		templateUrl: 'public/partials/contactFirst.html'
	});

	sp.state('contact.second', {
		url: '/second',
		templateUrl: 'public/partials/contactSecond.html'
	});

	$urlRouterProvider.otherwise('/');
}]);