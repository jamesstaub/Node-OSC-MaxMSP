// jshint undef:false
'use strict';

$( document ).ready(function() {
	var firebaseOSC = new Firebase('https://rubberhacks.firebaseio.com/');
	var sliderVals = {};
	var userData = {};
	var uid;

	firebaseOSC.authAnonymously(function(error, authData) {
		uid = authData.uid;
	}, {
	  remember: "sessionOnly"
	});

	$('input').change(function(){
			var sliderID = $(this).attr('id');
			sliderVals[sliderID] = $(this).val();
			userData[uid] = sliderVals;
			firebaseOSC.update(userData);
	});


	firebaseOSC.on('value', function(snapshot) {
		  $('p').html(snapshot.val());
		  console.log(snapshot.val());
		}, function (errorObject) {
		  console.log('The read failed: ' + errorObject.code);
	});


	// $('select').change(function(){
	// 		var selectBox = $(this).val();

	// 		firebaseOSC.set({selection: selectBox});

	// });



});



