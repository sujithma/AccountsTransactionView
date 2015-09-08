(function(){
	'use strict';
	var loginFact	=	angular.module('loginFactory',[])
		.factory('loginFact', ['$http',function ($http) {
			 
			 var loginObj = {};
			
			 loginObj.welcome = function () {
					$http.get('http://acctr.loc/login')
						.then(function(response) {
						   return response;
						  }, function(response) {
						    // called asynchronously if an error occurs
						    // or server returns response with an error status.
						  });
			 };
			 
			 loginObj.submit = function($params) {
		 	    return $http.post('http://acctr.loc/logind',$params)
			      .then(function(response){
			    	return response;
				})
			 }
				        
			loginObj.checkLogedIn = function($params) {
				return $http.post('http://acctr.loc/loginAuth',$params)
			      .then(function(response){
			    	return response;
				})
			 }	    
			 
			 
			 
			 return loginObj;
			}]);
})();	