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
	$("#ex2 p").on("click", function(){
		$(this).hide();
	});

// Excercise No.3
	let numOfAlerts = 1;
	// Shows an alert on mouseover
	// Hides the p on doubleclick
	$("#ex3 p").on({
		mouseenter: function(){
			if (numOfAlerts > 0){
				alert("To hide me double click me!");
				numOfAlerts -= 1;
			}
		},
		dblclick: function(){
			$(this).hide();
		}
	});

// Excercise No.4
	$("#ex4 button").click(function(){
		$("#ex4 p").toggle(500);
	});

// Excercise No.5
	// Setting the intial p text
	$("#ex5 p").html( $("#ex5 input").val() );
	// Listens for keyup in the field and sets p to its val
	$("#ex5 input").keyup(function(){
		$("#ex5 p").html( $("#ex5 input").val() );
	});
});