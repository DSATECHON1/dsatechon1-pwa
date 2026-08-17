/* =================================
   ON1Ecosystem — VERSION 1
   Main JavaScript
   ================================= */

document.addEventListener("DOMContentLoaded", () => {

  /*
   * GET STARTED
   * ---------------------------------
   * GET STARTED is now a normal link
   * to pages/signup.html.
   *
   * No JavaScript alert is needed here.
   */


  /*
   * SIGN IN
   * ---------------------------------
   * Sign-in page will be connected
   * after the signup page is completed.
   */

  const signInButtons = document.querySelectorAll(".secondary-btn");

  signInButtons.forEach((button) => {

    button.addEventListener("click", () => {

      alert("ON1Ecosystem Sign In will be available soon.");

    });

  });


  /*
   * ON1COIN MINING
   * ---------------------------------
   * Mining functionality will be
   * connected to the ON1Coin area
   * in a later stage.
   */

  const miningButtons = document.querySelectorAll(".primary-btn");

  miningButtons.forEach((button) => {

    if (button.textContent.trim() === "START ON1COIN MINING") {

      button.addEventListener("click", () => {

        alert("ON1Coin Mining will be available soon.");

      });

    }

  });


  /*
   * SERVICE WORKER
   * ---------------------------------
   * Keeps the PWA functionality active.
   */

  if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

      navigator.serviceWorker
        .register("service-worker.js")
        .then(() => {
          console.log("ON1Ecosystem service worker registered.");
        })
        .catch((error) => {
          console.error(
            "ON1Ecosystem service worker registration failed:",
            error
          );
        });

    });

  }

});
