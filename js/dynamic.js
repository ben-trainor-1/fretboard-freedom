
// Dynamically setting background images
// Get inner HTML content for image path and set background image URL

document.addEventListener("DOMContentLoaded", function(e) {

    var dynamicBGImage = document.getElementsByClassName('img-container-dynamic');
    var sourceFile;
    
    for (let i = 0; i < dynamicBGImage.length; i++) {
        sourceFile = dynamicBGImage.item(i).firstElementChild.innerHTML;
        console.log("Setting background image to " + sourceFile);
        dynamicBGImage.item(i).style.backgroundImage = "url(" + sourceFile + ")";
    }

})