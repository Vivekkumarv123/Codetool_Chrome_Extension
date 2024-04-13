chrome.runtime.onInstalled.addListener(function() {
  // Check if the name and email are saved
  chrome.storage.sync.get(["name", "email"], function(data) {
      if (data.name && data.email) {
          // If name and email are saved, open homepage.html
          chrome.tabs.create({url: "homepage.html"});
      } else {
          // If name or email is not saved, open name.html
          chrome.tabs.create({url: "name.html"});
      }
  });
});
