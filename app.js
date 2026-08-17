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
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => {
        console.log("DSATECHON1 service worker registered.");
      })
      .catch((error) => {
        console.error("Service worker registration failed:", error);
      });
  });
}
