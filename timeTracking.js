$(document).ready(function() {
  let timerInterval;
  let startTime;

  // Check if start time is stored in localStorage
  if (localStorage.getItem('startTime')) {
      startTime = parseInt(localStorage.getItem('startTime'));
      startTimer();
  }

  $('#startTimer').click(function() {
      startTime = Date.now();
      startTimer();
      // Store start time in localStorage
      localStorage.setItem('startTime', startTime.toString());
  });

  $('#stopTimer').click(function() {
      clearInterval(timerInterval);
      // Remove start time from localStorage
      localStorage.removeItem('startTime');
  });

  function startTimer() {
      timerInterval = setInterval(updateTimeDisplay, 1000);
  }

  function updateTimeDisplay() {
      const elapsedTime = Date.now() - startTime;
      const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
      const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
      $('#timeDisplay').text(`${hours}:${minutes}:${seconds}`);
  }
});
