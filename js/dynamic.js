

document.addEventListener("DOMContentLoaded", function(e) {
    updateMenuBufferSize();

    // Dynamically setting background images
    // Get inner HTML content for image path and set background image URL

    var dynamicBGImage = document.getElementsByClassName('img-container-dynamic');
    var sourceFile;
    
    for (let i = 0; i < dynamicBGImage.length; i++) {
        sourceFile = dynamicBGImage.item(i).firstElementChild.innerHTML;
        console.log("Setting background image to " + sourceFile);
        dynamicBGImage.item(i).style.backgroundImage = "url(" + sourceFile + ")";
    }

})

// Update things when page is resized

window.addEventListener("resize", function(e) {
    updateMenuBufferSize();
});

// Update menu buffer size

function updateMenuBufferSize() {
    console.log("Updating menu buffer size");
    document.getElementById('menu_buffer').style.height = document.getElementById('menu').offsetHeight.toString().concat("px");
}
