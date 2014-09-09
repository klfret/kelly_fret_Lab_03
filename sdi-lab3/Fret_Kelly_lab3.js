//alert("This Lab 3 JavaScript works! - 9 September 2014");


// ***********************
//  Kelly L. Fret
//  9 September 2014
//  SDI 1409
//  LAB 3, Deliverable 1
// ***********************


// Start of code
// Variable Declarations
var startingPoint = "Lake's \"Entrance\" Gate";
var endingPoint   = "Lake's Picnic Area";
var numberOfMiles = 10;
var sunnyDay      = false;
var rideDay;
 

// Outputting initial variable values
console.log(startingPoint);
console.log(endingPoint);
console.log(numberOfMiles);
console.log(sunnyDay);



// Confirming if a sunny day 
sunnyDay = confirm("Is it a sunny day? \n\nClick OK for Yes, Cancel for NO");


	if (sunnyDay === true)
	{
		// If sunny day, get miles, calculate and display
		numberOfMiles = parseFloat(prompt("How many miles are you riding today?"));
			if (numberOfMiles <= 10)
			{
				numberOfMiles = numberOfMiles + 10;
				console.log("From " + startingPoint + " to " + endingPoint + ", plus last Sunday, you've totaled " + numberOfMiles + " miles.");
			}
			
			else 
			{
				console.log("You have ridden over 20 miles.");
			}
	}
	
	else 
	{
		// If not a sunny day, get when is the next ride and display
		rideDay = prompt("When is your next riding day?");
			if (rideDay === "Sunday")
			{
				console.log("Enjoy your next " + rideDay + " ride.");
			}
			
			else
			{
				console.log("You don't ride only on Sundays.");
			}
	}

// End of code	
console.log("Have a wonderful day.");

		
		
		
		
		
		
		
		
		

