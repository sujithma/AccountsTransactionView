(function(){
	'use strict';
	var categoriesController	=	angular.module('categoriesController',[])
		.controller('categoriesController',function($scope,categoriesFact,$state){
			categoriesFact.viewCategories()
				.then(function(responseData){
					$scope.data	=	responseData.data;
					//console.log($scope.data);
				})
		
		})
		.controller('categoriesControllerAdd',function($scope,categoriesFact,$state){
				$scope.save = function(category){
				var $parent_id = (typeof(category.parent_id) != 'undefined') ? category.parent_id : '';
				var $data = {name: category.name,transaction_type:category.transaction_type,parent_id : $parent_id};
				console.log(category);
				categoriesFact.addCategories($data)
					.then(function(success){
						$state.go('index.categories');
					},function(error){

					})


			}
		})

})();
