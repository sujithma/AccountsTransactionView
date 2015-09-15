(function(){
	'use strict';
	var categoriesController	=	angular.module('categoriesController',[])
		.controller('categoriesController',function($scope,categoriesFact,$state){
			categoriesFact.viewCategories()
				.then(function(responseData){
					$scope.data	=	responseData.data;
				})
		})

})();
