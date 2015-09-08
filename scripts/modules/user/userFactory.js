(function(){
	'use strict';
	var userFact	=	angular.module('userFactory',[])
		.factory('userFact', ['$http',function ($http) {
			 
			 var userObj = {};
			
			 userObj.welcome = function () {
					$http.get('http://acctr.loc/login')
						.then(function(response) {
						   return response;
						  }, function(response) {
						    // called asynchronously if an error occurs
						    // or server returns response with an error status.
						  });
			 };
			 
			 userObj.submit = function($params) {
		 	    return $http.post('http://acctr.loc/logind',$params)
			      .then(function(response){
			    	return response;
				})
			 }
				        
			userObj.checkLogedIn = function($params) {
				return $http.post('http://acctr.loc/loginAuth',$params)
			      .then(function(response){
			    	return response;
				})
			 }	    
			 
			 
			 
			 return userObj;
			}]);
})();	