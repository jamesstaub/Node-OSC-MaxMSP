// jshint undef:false
'use strict';

$( document ).ready(function() {
	var firebaseOSC = new Firebase('https://rubberhacks.firebaseio.com/');
	var sliderVals = {};
	var userData = {};
	var uid;

	// anon auth
	firebaseOSC.authAnonymously(function(error, authData) {
		uid = authData.uid;
	}, {
	  remember: "sessionOnly"
	});

	// window.setInterval(time, 3000);
	function time() {
		var rand = Math.floor(Math.random() * 1000);
		// $('input').val(rand).trigger('change');
	}


	$('input').change(function(){
			var sliderID = $(this).attr('id');
			sliderVals[sliderID] = $(this).val();
			userData[uid] = sliderVals;
			firebaseOSC.update(userData);
	});


	firebaseOSC.on('value', function(snapshot) {
		  // $('p').html(snapshot.val());
		  console.log(snapshot.val());
		  // $('body').css('background-image', 'url('+snapshot.val().media+')');
		  // console.log(snapshot.val().media);
		}, function (errorObject) {
		  console.log('The read failed: ' + errorObject.code);
	});



	// $('select').change(function(){
	// 		var selectBox = $(this).val();

	// 		firebaseOSC.set({selection: selectBox});

	// });



});



