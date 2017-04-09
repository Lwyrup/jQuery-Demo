$(document).ready(function(){

	// Simple hello
	console.log("Hello, World!");

// Excercise No.1
	// Hides all p tags
	$("#ex1 button").click(function(){
		$("#ex1 p").hide();
	});

// Excercise No.2
	// Hides a p tag when it is clicked
	$("#ex2 p").click(function(){
		$(this).hide();
	});

// Excercise No.3
	let numOfAlerts = 1;

	// When moused over alerts once
	$("#ex3 p").mouseenter(function(){
		if (numOfAlerts > 0){
			alert("To hide me double click me!");
			numOfAlerts -= 1;
		};
	});

	// When double clicked hides
	$("#ex3 p").dblclick(function(){
		$(this).hide();
	});










});