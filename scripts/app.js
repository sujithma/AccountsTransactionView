(function(){
'use strict';
	var app=angular.module('AccountsTransaction',[
		'ui.router',
		'controllers',
		'factories',
		'ngMessages',
		'ui-notification',
		'ngAnimate',
	    'inspinia',
	    'services',
	    'ui.bootstrap',
	    'datePicker'

		])
		.constant('urls', {
	       BASE: 'http://acctr.loc/'
   		})
		
		


})();

