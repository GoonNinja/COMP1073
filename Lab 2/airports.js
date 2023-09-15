/* Part 1, 2 done by Adam M
   Part 3, 4 done by Mario S
   Part 5 and Bonus done by Kevin B*/


// Get all the list items for the various airports
var airportListItems = document.getElementsByTagName('li');
// Create a new array to hold just the text in the list items
var airports = new Array();
// Loop through the list items, and for each one, extract the text and add it to the airports array
for (var i = 0; i < airportListItems.length; i++) {
    airports.push(airportListItems[i].textContent);
}
// Delete all the existing list items so we can create new ones
var airportUL = document.querySelector('body ul');
airportUL.innerHTML = '';

    //added in after the fact as part of the bonus
    //variable to store the length of all airport names
    var allAirportsLength = 0;

// Loop through the airports array
for (var i = 0; i < airports.length; i++) {
    var input = airports[i];
    /* LAB 2: Put your own code here…*/

    
    // 1. Find the character index of the comma (use the above variable, input), and assign it to a variable called commaLocation
    var commaLocation = input.indexOf(',');

    // 2. Obtain the full name of the airport using the comma character index number as a reference point, and store it in a new variable (called airportName)
    //using the substring method we get the beginning of the string up to the first occurrence of the comma from our commaLocation variable
    var airportName = input.substring(0, commaLocation);
    //after we have the full name we can add it to the total length for the bonus question
    allAirportsLength += airportName.length;
    // 3. Capture the international airport code at the end of the string, and store it as a variable (called airportCode) (hint - you will need .length and .slice)
    //using the slice method we grab the last 3 characters of the string by starting from the 3rd last character and ending at the end of the string
    var airportCode = input.slice(-3);
    // 4. Get the Google Maps short URL from the string, using the character index number of the comma (use above var, commaLocation), and store it as a variable, called googleUrl
    //since the URL starts at the second character after the comma and ends 4 characters before the end of the string we can use the substring method like so:
    var googleUrl = input.substring(commaLocation + 2, input.length - 4);
    // 5. Build a new string that is an HTML hyperlink, using the Google Maps URL (googleUrl) as the href, the airport code (airportCode), a dash (-), the airport name (airportName), and set it as the value of the result variable (var result = ...) (hint - use concatenation to build out each part of the HTML anchor element, taking care to use the right quotes)
    var result = '<a href="' + googleUrl + '">' + airportCode + ' - ' + airportName + '</a>';
    /* ----------------------------------------------- */
    // Create a new list item element
    var listItem = document.createElement('li');
    // Inject the new anchor element inside the list item element
    listItem.innerHTML = result;
    airportUL.appendChild(listItem);
}

//Bonus
//new variable to calculate the average name length (divides the total by the length of the airports array)
var avgNameLengthAirports = allAirportsLength/airports.length;
var output = document.querySelector('p');
output.textContent = "Average Length of Airports name: " + avgNameLengthAirports;