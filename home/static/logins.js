$(document).ready(function() {
    $("#loginForm").submit(function(e) {
      e.preventDefault();
      var username = $("#username").val();
      var password = $("#password").val();
      var isValid = true;
      if (username === "") {
        $("#usernameError").html("Please enter your username.");
        isValid = false;
      } else {
        $("#usernameError").html("");
      }
      if (password === "") {
        $("#passwordError").html("Please enter your password.");
        isValid = false;
      } else {
        $("#passwordError").html("");
      }
      if (isValid) {
        // Submit the form
        this.submit();

      }
    });
  });
  