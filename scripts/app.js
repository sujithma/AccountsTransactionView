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
	    'datePicker'

		])
		.constant('urls', {
	       BASE: 'http://acctr.loc/'
   		})
		
		


})();

