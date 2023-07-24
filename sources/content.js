function removeVerifiedTweets() {
  const tweetsContainer = document.getElementById("react-root"); 

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

  var config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  };
  
  observer.observe(tweetsContainer, config);
}

removeVerifiedTweets();
