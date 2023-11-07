window.onload = function() {
    // Get references to the featured image, the thumbnail list, and the figcaption
    const featuredImage = document.getElementById("featured-image");
    const thumbnailList = document.getElementById("thumbnail-list");
    const figcaption = document.querySelector("figcaption");
  
    // Add a click event listener to the thumbnail list
    thumbnailList.addEventListener("click", function (event) {
      if (event.target.tagName === "IMG") {
        // If an image is clicked, update the featured image's source and the figcaption
        featuredImage.src = event.target.src.replace("-small.jpg", "-large.jpg");
        featuredImage.alt = event.target.alt;
  
        // Extract the filename from the clicked image's src
        const filename = event.target.src.split("/").pop().replace("-small.jpg", "");
        
        // Update the figcaption with the filename
        figcaption.textContent = filename;
      }
    });
  };