var popupWindow = null;

function openPomodoro() {
    // Check if the popup window is already open
    if (!popupWindow || popupWindow.closed) {
        // Show the overlay to disable background content
        document.querySelector('.overlay').style.display = 'block';

        // Specify the URL of the HTML file for the popup
        var popupURL = "pomo.html";

        // Calculate the position to center the popup window
        var screenWidth = window.screen.availWidth;
        var screenHeight = window.screen.availHeight;
        var popupWidth = 650; // Set the width of the popup window
        var popupHeight = 550; // Set the height of the popup window
        var left = (screenWidth - popupWidth) / 2;
        var top = (screenHeight - popupHeight) / 2;

        // Open the popup window
        popupWindow = window.open(
            popupURL,
            "Popup",
            "width=" +
            popupWidth +
            ",height=" +
            popupHeight +
            ",left=" +
            left +
            ",top=" +
            top +
            ",status=no,resizable=yes,scrollbars=yes"
        );

        // Focus on the popup window
        popupWindow.focus();

        // Add an event listener to detect when the popup window is closed
        popupWindow.addEventListener("unload", function () {
            // Hide the overlay when the popup window is closed
            document.querySelector('.overlay').style.display = 'none';
        });
    } else {
        // If the popup window is already open, focus on it
        popupWindow.focus();
    }
}


// Attaching event listener to the element
document.getElementById("pomo").addEventListener("click", openPomodoro);
