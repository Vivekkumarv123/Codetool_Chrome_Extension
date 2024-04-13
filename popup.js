document.addEventListener("DOMContentLoaded", function() {
  const nameForm = document.getElementById("nameForm");
  nameForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const nameInput = document.getElementById("nameInput").value;
      const emailInput = document.getElementById("emailInput").value;
      chrome.storage.sync.set({ "name": nameInput, "email": emailInput }, function() {
          // Once name and email are saved, redirect to homepage.html
          window.location.href = "homepage.html";
      });
  });
});
