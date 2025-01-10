window.onload = function() {
    replaceNavContent();
}

function replaceNavContent() {
    var navigationDiv = document.getElementById("navigation");

    if (navigationDiv) {
        navigationDiv.innerHTML = ``;
    }
}