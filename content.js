chrome.storage.sync.get("email", function(data) {
    var email = data.email;
    if (email) {
        // Fill email input fields with the stored email address
        var emailInputs = document.querySelectorAll('input[type="email"]');
        emailInputs.forEach(function(input) {
            input.value = email;
        });
    }
});
