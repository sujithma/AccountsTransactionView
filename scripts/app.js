(function(){
'use strict';
	var app=angular.module('AccountsTransaction',[
		'ui.router',
		'controllers',
		'factories',
		'ngMessages',
		'ui-notification',
		'ngAnimate',	  
	    'services',
	    'ui.bootstrap',
	    'permission',
	    'user',
	    'datePicker'
	    // 'ngPDFViewer'

		])
		// .run(function (Permission, User) {
	 //      // Define anonymous role
	 //      Permission.defineRole('anonymous', function (stateParams) {
	 //        // If the returned value is *truthy* then the user has the role, otherwise they don't
	 //        // var nike = authService.authenticate();
	 //        // console.log(nike);
	 //        if (!User) {
	 //          return true; // Is anonymous
	 //        }
	 //        return false;
	 //      });
	 //    })			
		// .run(function (Permission, User, $q) {
	 //      Permission
	 //        // Define user role calling back-end
	 //        .defineRole('user', function (stateParams) {
	 //          // This time we will return a promise
	 //          // If the promise *resolves* then the user has the role, if it *rejects* (you guessed it)

	 //          // Let's assume this returns a promise that resolves or rejects if session is active
	 //          return User.checkSession();
	 //        })
	 //        // A different example for admin
	 //        .defineRole('admin', function (stateParams) {
	 //          var deferred = $q.defer();



	 //          authService.authenticate().then(function (data) {
	 //            if (data.stat === 'admin') {
	 //              deferred.resolve();
	 //            } else {
	 //              deferred.reject();
	 //            }
	 //          }, function () {
	 //            // Error with request
	 //            deferred.reject();
	 //          });

	 //          return deferred.promise;
	 //        });
	 //    })
		

		.constant('urls', {
	       BASE: 'http://acctr.loc/'
   		})


})();

