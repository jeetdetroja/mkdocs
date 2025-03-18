document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem("authenticated")) {
    window.location.href = "auth.html"; // Redirect to login if not authenticated
  }
});
