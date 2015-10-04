var app = angular.module('MyThirdApp', []);

// app.config(function(){});

// app.run(function(){});

//   _____            _             _ _               
//  / ____|          | |           | | |              
// | |     ___  _ __ | |_ _ __ ___ | | | ___ _ __ ___ 
// | |    / _ \| '_ \| __| '__/ _ \| | |/ _ \ '__/ __|
// | |___| (_) | | | | |_| | | (_) | | |  __/ |  \__ \
//  \_____\___/|_| |_|\__|_|  \___/|_|_|\___|_|  |___/

app.controller('MyController', ['$scope', 'DataFactory', function($scope, DataFactory){
	DataFactory.init(function(err, res){
		if(err) return;

		$scope.people = res;
	});
}]);



//  _____  _               _   _                
// |  __ \(_)             | | (_)               
// | |  | |_ _ __ ___  ___| |_ ___   _____  ___ 
// | |  | | | '__/ _ \/ __| __| \ \ / / _ \/ __|
// | |__| | | | |  __/ (__| |_| |\ V /  __/\__ \
// |_____/|_|_|  \___|\___|\__|_| \_/ \___||___/

app.directive('personComponent', function(){
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			person: '='
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'person.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		// link: function($scope, iElm, iAttrs, controller) {}
	};
});



// ______         _             _           
// |  ____|       | |           (_)          
// | |__ __ _  ___| |_ ___  _ __ _  ___  ___ 
// |  __/ _` |/ __| __/ _ \| '__| |/ _ \/ __|
// | | | (_| | (__| || (_) | |  | |  __/\__ \
// |_|  \__,_|\___|\__\___/|_|  |_|\___||___/
                                           
app.factory('DataFactory', ['$http', function($http){
	var apiEndpoint = 'data.json',
		_data;

	var initialize = function(done){
		$http.get(apiEndpoint)
			.success(function(res){
				console.log(res);
				_data = res;
				done(null, res);
			})
			.error(function(err){
				console.error(err);
				done(err);
			});
	};

	var getData = function(){
		return _data;
	};

	return {
		init: initialize,
		get: getData
	}
}]);