// ==========================================
// DSATECHON1 — Version 1
// Main application JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  console.log("DSATECHON1 PWA loaded successfully.");

  // Get Started buttons
  const getStartedButtons = document.querySelectorAll(".primary-btn");

  getStartedButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("DSATECHON1 account registration will be available soon.");
    });
  });

  // Sign In buttons
  const signInButtons = document.querySelectorAll(".signin-btn, .secondary-btn");

  signInButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("DSATECHON1 Sign In will be available soon.");
    });
  });

});
