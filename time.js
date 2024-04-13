function updateTime() {
  var today = new Date();
  var time = today.getHours() + ":" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
  var t = document.getElementById('currentTime');
  if (today.getHours() < 13 && (today.getHours() > 0 || today.getHours() == 0)) { t.innerHTML = time + " am"; }
  else { t.innerHTML = time + " pm"; }

  chrome.storage.sync.get("name", function (data) {
    const name = data.name || "there"; // Default to "there" if name is not available
    const greet1 = "Good morning, " + name;
    const greet2 = "Good afternoon, " + name;
    const greet3 = "Good evening, " + name;

    var today = new Date();
    var greeting = document.getElementById('greetingHeading');

    if (today.getHours() > 4 && today.getHours() < 12) {
      greeting.innerHTML = greet1;
    }
    if (today.getHours() >= 12 && today.getHours() < 16) {
      greeting.innerHTML = greet2;
    }
    if (today.getHours() >= 16 && today.getHours() <= 24) {
      greeting.innerHTML = greet3;
    }

  });
}

setInterval(updateTime, 1000); // Call updateTime every second (1000 milliseconds)

// Function to get the current day and date
function getCurrentDayAndDate() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const currentDate = new Date();
  const day = days[currentDate.getDay()];
  const date = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return `${day}, ${month} ${date}, ${year}`;
}

// Function to display the current day and date in HTML
function displayCurrentDayAndDate() {
  const currentDayElement = document.getElementById('currentDay');
  const currentDayAndDate = getCurrentDayAndDate();
  currentDayElement.textContent = currentDayAndDate;
}

// Call the function to display current day and date when the page loads
displayCurrentDayAndDate();


