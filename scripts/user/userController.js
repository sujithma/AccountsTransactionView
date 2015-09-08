(function(){
	'use strict';
	var userController	=	angular.module('userController',[])
		.controller('userController',function($scope,userFact){
			userFact.welcome();

			$scope.submitForm = function() {
			    var $params = {
			      "email": $scope.email,
			      "password": $scope.password
			    };
			    userFact.submit($params)
			    	.then(function(e){
			    		console.log(e.data)
			    	})

			}
		})
		// .controller('LoginController',function(){

		// 	console.log("login Controller");
		// })
})();