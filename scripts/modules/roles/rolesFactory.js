(function(){
	'use strict';
	var rolesFact	=	angular.module('rolesFactory',[])
		.factory('rolesFact',['$http','urls',function($http,urls){
			var rolesObj	=	{};
			rolesObj.viewRoles	=	function(){
					return $http.get(urls.BASE + 'role_view')
						
			};

		return rolesObj;	
		}]);
})();