function openTodoList() {
    console.log("Opening todo.html");
    // Function to open the todo.html popup window
    // Specify the URL of the todo.html file
    const todoUrl = "pt.html";

    // Calculate the position to center the popup window
    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;
    const popupWidth = 750;
    const popupHeight = 600;
    const left = (screenWidth - popupWidth) / 2;
    const top = (screenHeight - popupHeight) / 2;

    // Open the popup window
    const popupWindow = window.open(todoUrl, "Todo Popup", `width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`);

    // Focus on the popup window
    if (popupWindow) {
        popupWindow.focus();
    } else {
        alert("Popup blocked! Please allow popups for this site.");
    }
}

// Attaching event listener to the element
document.getElementById("todo").addEventListener("click", openTodoList);
