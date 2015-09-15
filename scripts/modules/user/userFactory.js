(function(){
	'use strict';
	var userFact	=	angular.module('userFactory',[])
		.factory('userFact', ['$http','urls',function ($http,urls) {
			 
			 var userObj = {};
			
			 userObj.viewUsers = function () {
					return $http.get(urls.BASE + 'users')
			 };	 
			 return userObj;
			}]);
})();	