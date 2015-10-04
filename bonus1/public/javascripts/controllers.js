var app = angular.module('RoutingApp.controllers', []);

app.controller('HomeController', ['$scope', function($scope){
	$scope.title = 'Home';
}]);

app.controller('AboutController', ['$scope', function($scope){
	$scope.content = '\
		AngularJS (commonly referred to as "Angular") is an open-source web application framework maintained by Google and by \
		a community of individual developers and corporations to address many of the challenges encountered in developing single-page \
		applications. It aims to simplify both the development and the testing of such applications by providing a framework for client-side \
		model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications.'
}]);

app.controller('ContactController', ['$scope', function($scope){ }]);