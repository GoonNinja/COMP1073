function buildSmoothie() {
    // Get the form element
    var form = document.getElementById("smoothieForm");

    // Get selected size
    var size = form.querySelector('input[name="size"]:checked');

    // Get all checked checkboxes for ingredients
    var ingredients = form.querySelectorAll('input[name="apple"]:checked, input[name="banana"]:checked, input[name="strawberry"]:checked, input[name="blueberry"]:checked, input[name="raspberry"]:checked, input[name="cherry"]:checked, input[name="grapes"]:checked, input[name="pineapple"]:checked, input[name="orange"]:checked');

    // Get selected flavor boost
    var flavor = form.querySelector('input[name="flavor"]:checked');

    // Log the selected options to the console
    console.log("Selected Size:", size ? size.value : "N/A");
    console.log("Selected Ingredients:", Array.from(ingredients).map(ingredient => ingredient.getAttribute('data-name')));
    console.log("Selected Flavor:", flavor ? flavor.value : "N/A");

    // Build the smoothie based on selected options
    var smoothieOptions = {
        size: size ? size.value : "N/A",
        ingredients: Array.from(ingredients).map(ingredient => ingredient.getAttribute('data-name')),
        flavor: flavor ? flavor.value : "N/A"
    };

    // Display the result
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Your custom smoothie:<br>" +
        "Size: " + smoothieOptions.size + "<br>" +
        "Ingredients: " + (smoothieOptions.ingredients.length > 0 ? smoothieOptions.ingredients.join(', ') : "None") + "<br>" +
        "Flavor Boost: " + smoothieOptions.flavor;

    // Add smoothie image underneath the text
    var smoothieImage = document.createElement("img");
    smoothieImage.src = "./Images/smoothie.png"; // Adjust the path to your smoothie image
    smoothieImage.alt = "Smoothie Image";
    smoothieImage.style.width = "150px"; // Adjust the width as needed

    // Append a line break and then the image to the result div
    resultDiv.appendChild(document.createElement("br"));
    resultDiv.appendChild(smoothieImage);

    // Show the result div
    resultDiv.style.display = "block";
}

function clearSelections() {
    // Get the form element
    var form = document.getElementById("smoothieForm");

    // Uncheck all radio buttons and checkboxes
    var allInputs = form.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    allInputs.forEach(input => {
        input.checked = false;
    });

    // Hide the result div
    var resultDiv = document.getElementById("result");
    resultDiv.style.display = "none";
}