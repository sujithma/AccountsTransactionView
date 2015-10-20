(function(){
	'use strict';
	var categoriesController	=	angular.module('categoriesController',[])
		.controller('categoriesController',function($scope,categoriesFact,$state,categoryService){
			categoriesFact.viewCategories()
				.then(function(responseData){
					categoryService.setData(responseData.data)
					$scope.data	=	categoryService.getData();
					//console.log($scope.data);
				})
		
		})
		.controller('categoriesControllerAdd',function($scope,categoriesFact,$state,categoryService){
				$scope.save = function(category){
				var $parent_id = (typeof(category.parent_id) != 'undefined') ? category.parent_id : '';
				var $data = {name: category.name,transaction_type:category.transaction_type,parent_id : $parent_id};
				console.log(category);
				categoriesFact.addCategories($data)
					.then(function(success){
						console.log(success.data)
						$data.id = success.data.id;
						$data.parent_id = success.data.parent_id == "" ? 0 : 1;
						categoryService.pushData($data);
						$state.go('index.categories');
					},function(error){

					})


			}
		})

})();
