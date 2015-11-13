(function(){
	'use strict';
	var transactionsController	=	angular.module('transactionsController',[])
		.controller('transactionsController',function($scope,transactionsFact,$state,Notification,transactionsService,userFact,userService){
			transactionsFact.viewTransactions()
				.then(function(responseData){
					transactionsService.setData(responseData.data);					
					$scope.data	= transactionsService.getData();
					console.log($scope.data);
				})
				userFact.allUsers()
					.then(function(users){
						userService.setData(users.data);
						if (users.data.length != 0) {
							$scope.users = userService.getData()
						}else{
						$scope.users = false;
					}
					$scope.users.splice(0, 0, {id : '',name : "all Users"});
					})
				$scope.userId = '';
				$scope.transactionType = '';
				// $scope.startDate = '';
				// $scope.endDate = '';
				$scope.search = function(da,type,userId) 
				{
					console.log(da);
					$scope.notFound = false;
					transactionsFact.search(type,userId)
						.then(function(success){
							$scope.data = success.data;
							if(success.data.length<1){
								$scope.notFound = true;
							}
						})
				}
				// $scope.searchType = function(type) {
				// 	$scope.data	= transactionsService.getDataByType(type);
				// 	console.log("type"+$scope.data);
				// }
				// $scope.searchByuser = function(userId) {
				// 	$scope.data = transactionsService.getDataByUser(userId);
				// 	console.log("user"+$scope.data);
				// }

				$scope.delete = function(id){
				var conf = confirm('Are You sure to Delete');
				if(conf == true) {
					transactionsFact.deleteTransaction(id)
						.then(function(success){
							Notification.success('deleted Successfully');
				    		transactionsService.spliceData(id,1);
						},function(error){
							Notification.warning({message: 'Errorr', title: 'Error Occured'});
						})
					}else{
						return false;
					}
			}


			$scope.print = function(){
				var doc = new jsPDF('p', 'pt');	
				// console.log(doc); return false;
				var data = [];
				for(var i = 0, len = $scope.data.length; i < len; i++) {
			         data[i] = {
			        	'title' :$scope.data[i].title,
			        	'description':$scope.data[i].description,
			        	'transaction_type':$scope.data[i].transaction_type,
			        	'user':$scope.data[i].users.name,
			        	'category':$scope.data[i].categories.name,
			        	'transaction_date':$scope.data[i].transaction_date};
				   
				}
				console.log(data);
				var columns = [
						        {title: "Title", dataKey: "title"},
						        {title: "Description", dataKey: "description"},
						        {title: "Added User", dataKey: "user"},
						        {title: "Category", dataKey: "category"},
						        {title: "Type", dataKey: "transaction_type"},
						        {title: "Date", dataKey: "transaction_date"}
						    ];
				doc.autoTable(columns, data, {
			        styles: {cellPadding: 2},
			        headerStyles: {rowHeight: 20, fontSize: 10},
			        bodyStyles: {rowHeight: 15, fontSize: 10, valign: 'middle'}
			    });

			    doc.save("Tranasctions.pdf");

				// doc.text(20, 20, 'Transactions');			
				// var text = 30;
				// if ($scope.data.length != 0) {
				// 	doc.text(20, 30, 'TITLE');
				// 	doc.text(20, 35, '------');
			 //        doc.text(50, 30, 'DESCRIPTION');
			 //        doc.text(20, 35, '-------------');
				// 	for(var i = 0, len = $scope.data.length; i < len; i++) {
				// 		text+=10;
			 //        	var title = $scope.data[i].title;
			 //        	var description = $scope.data[i].description;
			 //        	doc.text(20, text, title);
			 //        	doc.text(50, text, description);
				// 	}
				// }

				// doc.addPage();
				// doc.text(20, 20, 'Do you like that?');

				// Output as Data URI
				// doc.output('datauri');
			}

			
			// $scope.pdfshow = function() {
			// 	var form = $('.form'),
			// 	cache_width = form.width(),
			// 	a4  =[ 595.28,  841.89];
			// 	$scope.getCanvas().then(function(canvas){
					 
			// 		img = canvas.toDataURL("image/png"),

			// 		var doc = new jsPDF({
			//           unit:'px', 
			//           format:'a4'
			//         });     
			//         doc.addImage(img, 'JPEG', 20, 20);
			//         doc.save('techumber-html-to-pdf.pdf');
			//         form.width(cache_width);
			// 	});
			// }
			// $scope.getCanvas = function() {
			// 	form.width((a4[0]*1.33333) -80).css('max-width','none');
			// 	return html2canvas(form,{
			//     	imageTimeout:2000,
			//     	removeContainer:true
			//     });	
			// }

			
		})

		.controller('transactionControllerAdd',function($scope,transactionsFact,$state,transactionsService,categoriesFact,categoryService,Notification){
				categoriesFact.viewCategories()
				.then(function(responseData){
					categoryService.setData(responseData.data)
					if(responseData.data.length != 0){
						$scope.categories	=	categoryService.parentCategory();
						$scope.parentCategory_id = $scope.categories[0].id;
					}else{
						$scope.categories = false;
					}
					
					//console.log($scope.data);
					});
				$scope.transaction_type = "credit";
				$scope.subCategories = [{id:0, name : "Select a Parent Category"}];
				$scope.subCategory_id = $scope.subCategories[0].id;


					$scope.save = function(transaction){
						console.log(transaction);
						var $category_id = (typeof(transaction.category_id) != 'undefined') ? transaction.category_id : '';
						var $data = {title: transaction.title,
									description : transaction.description,
									category_id : $category_id,
									transaction_type : transaction.transaction_type,
									date:transaction.date
								};
						//console.log(category);
						transactionsFact.addTransaction($data)
						.then(function(success){
							console.log(success.data)					
							transactionsService.pushData(success.data.user);
							Notification.success('New User Added');
							$state.go('index.transactions');
						},function(error){
							Notification.warning({message: 'Errorr', title: 'Error Occured'});
						})
				}
		})
	.controller('transactionControllerEdit',function($scope,transactionsFact,$state,transactionsService,$stateParams){
			$scope.id = $stateParams.id;
					$scope.data	= transactionsService.findData($scope.id);
					console.log($scope.data);
				// 	})
					// $scope.save = function(transaction){
					// var $category_id = (typeof(transaction.category_id) != 'undefined') ? transaction.category_id : '';
					// var $data = {title: transaction.title,
					// 			description : transaction.description,
					// 			category_id : $category_id,
					// 			transaction_type : transaction.transaction_type,
					// 			date:transaction.date
					// 		};
					// //console.log(category);
					// transactionsFact.addTransaction($data)
					// .then(function(success){
					// 	console.log(success.data.status)					
					// 	transactionsService.pushData($data);
					// 	$state.go('index.transactions');
						
						
					// },function(error){

					// })
				// }
		})
		.controller('transactionsControllerTrash',function($scope,Notification,transactionsFact,$state,transactionsService){
			transactionsFact.viewTransactionTrash()
				.then(function(responseData){
					transactionsService.setData(responseData.data)
					$scope.data	= transactionsService.getData();
				})

			$scope.delete = function(id){
				var conf = confirm('Are You sure to Delete.The data will be permanently deleted');
				if(conf == true) {
					transactionsFact.deleteTransactionPermanent(id)
						.then(function(success){
							Notification.success('Permanently deleted the User');
				    		transactionsService.spliceData(id,1);
				    		
						},function(error){
							Notification.warning({message: 'Errorr', title: 'Error Occured'});
						})
					}else{
						return false;
					}
			}
			$scope.restore = function(id){
				var conf = confirm(' Are You sure to Restore the Transaction');
				if(conf == true) {
					transactionsFact.transactionRestore(id)
						.then(function(success){
							Notification.success('Restore the User Successfully');
				    		transactionsService.spliceData(id,1);
				    		
						},function(error){
							Notification.warning({message: 'Errorr', title: 'Error Occured'});
						})
					}else{
						return false;
				}
			}
		})	


})();
