(function(){
	'use strict';
	var authService	=	angular.module('authService',[])
		.service('authService',function(){
			var authData	=	{};
			var stat = '';
			this.setData = function(data) {
			      authData =  data;
			    };
			this.authenticate = function(){
					if(authData.role == 'admin'){
						stat = 'admin';	
					}
					else if(authData.role == 'user'){
						stat = 'user';	
					}
					else{
						stat = 'unauth';	
					}

					return stat;
				};
			
			return this;
		});
})();