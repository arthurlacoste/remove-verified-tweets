// Fonction pour retirer les tweets avec un badge vérifié
function removeVerifiedTweets() {
  const tweetsContainer = document.getElementById("react-root"); // Replace 'tweets-container' with the actual ID of the container element

  const observer = new MutationObserver((mutationsList, observer) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((addedNode) => {
          const verifiedBadges = addedNode.querySelectorAll("svg");

          verifiedBadges.forEach(function (badge) {
            const ariaLabel = badge.getAttribute("aria-label");
            if (ariaLabel && ariaLabel == "Verified account") {
              var maxIterations = 13;
              var currentElement = badge;

              while (maxIterations != 0) {
                currentElement = currentElement.parentElement;
                maxIterations--;
              }

              console.log("Tweet retiré");
              currentElement.style.display = "none";
            }
          });
        });
      }
    });
  });

  // Configuration options for the MutationObserver (optional)
  var config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  };
  // Start observing the tweets container with the specified configuration
  observer.observe(tweetsContainer, config);
}

removeVerifiedTweets();
