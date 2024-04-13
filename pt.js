$(document).ready(function() {
    // Load tasks from localStorage when the page loads
    loadTasks();

    $("#addTaskBtn").click(function() {
      $("#taskForm").toggle();
    });

    $("#saveTaskBtn").click(function() {
      var taskName = $("#taskName").val();
      var taskLevel = $("#taskLevel").val();
      var taskStatus = $("#taskStatus").val();
      var taskLink = $("#taskLink").val();

      var newRow = "<tr><td><a href='" + taskLink + "'>" + taskName + "</a></td><td>" + taskLevel + "</td><td>" + taskStatus + "</td><td class='delete-task'>Delete</td></tr>";

      $("#taskTable tbody").append(newRow);

      // Save tasks to localStorage
      saveTasks();

      // Reset form fields
      $("#taskName").val("");
      $("#taskLevel").val("easy");
      $("#taskStatus").val("doing");
      $("#taskLink").val("");

      // Hide the form after saving
      $("#taskForm").hide();
    });

    // Function to load tasks from localStorage
    function loadTasks() {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      if (tasks) {
        tasks.forEach(function(task) {
          var newRow = "<tr><td><a href='" + task.link + "'>" + task.name + "</a></td><td>" + task.level + "</td><td>" + task.status + "</td><td class='delete-task'>Delete</td></tr>";
          $("#taskTable tbody").append(newRow);
        });
      }
    }

    // Function to save tasks to localStorage
    function saveTasks() {
      var tasks = [];
      $("#taskTable tbody tr").each(function() {
        var task = {
          name: $(this).find("td:eq(0) a").text(),
          level: $(this).find("td:eq(1)").text(),
          status: $(this).find("td:eq(2)").text(),
          link: $(this).find("td:eq(0) a").attr("href")
        };
        tasks.push(task);
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Delete task when delete button is clicked
    $("#taskTable").on("click", ".delete-task", function() {
      $(this).closest("tr").remove();
      saveTasks();
    });
  });