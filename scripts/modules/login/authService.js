(function(){
	'use strict';
	var authService	=	angular.module('authService',[])
		.service('authService',function(){
			var authData	=	{};
			this.setData = function(data) {
			      authData =  data;
			    };
			
			return this;
		});
})();