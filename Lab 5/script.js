/* Declare and initialize global variables
		-------------------------------------------------- */
		var pageBg = document.querySelector('html');
		var sliders = document.getElementsByTagName('input');
		var rgb = [0, 0, 0];


		/* Event handlers for range sliders
		-------------------------------------------------- */
		for (var i = 0; i < sliders.length; i++) {
			// Loop through the three range inputs and for each one, add an onchange event listener
			sliders[i].oninput = function() {
				// If an input range slider is moved, grab it’s id attribute value
				var whichSlider = this.getAttribute('id');
				// …also, grab the numerical value that it is set to
				var sliderValue = this.value;
				// Declare a new variable to hold the new RGB value that calls a function that updates the global rgb variable, passing in what slider was moved (whichSlider), and its value (sliderValue)
				var newRgb = changeRGB(whichSlider, sliderValue);
				// Call a function that builds a new CSS background-color property (as a string), passing it the updated RGB array (newRgb)
				var newCSS = writeCSS(newRgb);
				// Directly change the background-color of the page using the new CSS rgb value
				pageBg.style.backgroundColor = newCSS;
			}
		}

		/* Functions
		-------------------------------------------------- */
		// STEP 1: Write a function called changeRgb that accepts two parameters, channel and value

		function changeRGB(channel, value){
		
			// STEP 2: Build a switch based on the value of the channel parameter (red, green, or blue) (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
			
			switch (channel){
				case 'red':
					rgb[0] = parseInt(value);//Assuming the value is a string this will parse it into a integer  
					break;

				case 'green':
					rgb[1] = parseInt(value);
					break;

				case 'blue':
					rgb[2] = parseInt(value);
					break;

				default:
					console.log("Error: Invalid channel");

			}

			// STEP 3: Inside each case, update the appropriate global rgb array element (0, 1, or 2)
			
			// STEP 4: Return the updated rgb array back to the event handler
			return rgb;
		}	



		
		// STEP 5: Write a new function called writeCSS that accepts one parameter, the updated rgb array
		
		function writeCSS(newRgb){

			// STEP 6: Declare a new local variable called newColor that will contain the new string that will be used to update the CSS background-color property in the following format: rgb(0,0,0) - initialize it with the start of the string, 'rgb('
			
			var newColor = 'rgb(';

			// STEP 7: Create a while loop that iterates through the array passed into this function, called newRgb (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
			
			//Variable to keep track of the index
			var i = 0;

			while(i < newRgb.length){
			
				// STEP 8: For each element of the array, add to the string newColor, the red, green, and blue values, each followed by a comma
				newColor += newRgb[i];

				if (i < newRgb.length - 1){
					newColor += ', ';
				}
				i++;
			}
			// STEP 9: Slice off the last comma from the string contained by the variable, newColor - we don’t need it (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
		
			
			// STEP 10: Finish off the newColor string by adding the closing ')'
			
			newColor += ')';

			// STEP 11: Return the string newColor back to the event handler
			return newColor;
		}


		// STEP 12: Enjoy the application in your browser!

		// This page inspired by https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values