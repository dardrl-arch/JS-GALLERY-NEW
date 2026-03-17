/*Name this external file gallery.js*/

function upDate(previewPic) {
    // Change the background image of the div
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    // Change the text to the alt text of the preview image
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    // Reset the text to the original
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

// New function to add tabindex to all images
function addTabFocus() {
    console.log("addTabFocus triggered");
    // Select all images with the class 'preview'
    var previews = document.getElementsByClassName("preview");
    for (var i = 0; i < previews.length; i++) {
        previews[i].setAttribute("tabindex", i + 1); // tabindex starts from 1
    }
}

window.onload = function() {
    addTabFocus(); // Call the new function on page load

    var previews = document.getElementsByClassName("preview");
    for (var i = 0; i < previews.length; i++) {
    
        previews[i].addEventListener("focus", function() {
            upDate(this);
        });
        previews[i].addEventListener("blur", function() {
            unDo();
        });
    }
};