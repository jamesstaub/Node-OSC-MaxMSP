// jshint undef:false
'use strict';

var Firebase = require('firebase');
var rubberApp = new Firebase('https://rubberhacks.firebaseio.com/');
var params = {};


$( document ).ready(function() {
	$('input').on('mousedown', function(){
		$(this).mousemove(function(){
			var id = $(this).attr('id');
			params[id] = $(this).val();
			rubberApp.set(params);
		});
	});
	$('input').on('mouseup', function(){
		$(this).unbind();
	});



	rubberApp.on('value', function(snapshot) {
		  $('p').html(snapshot.val());
		  console.log(snapshot.val());
		}, function (errorObject) {
		  console.log('The read failed: ' + errorObject.code);
	});

});



