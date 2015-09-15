(function(){
	'use strict';
	var dashboardFact	=	angular.module('dashboardFactory',[])
		.factory('dashboardFact', ['$http','urls',function ($http,urls) {
			 
			 var dashObj = {};
				        
			dashObj.getUser = function() {
				return $http.post(urls.BASE +'getUser')
			      .then(function(response){
			    	return response;
				})
			 }	  

			
			   
			 
			 
			 
			 return dashObj;
			}]);
})();	