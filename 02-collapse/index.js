"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const actionVisible = document.querySelector(".collapsible__action--visible");
  const actionHidden = document.querySelector(".collapsible__action--hidden");

  actionVisible.hidden = true;

  const hideAnimation = (selector) => {
    return document
      .querySelector(selector)
      .animate(
        { opacity: ["0", "1"] },
        { duration: 4200, fill: "both", easing: "ease-out" }
      );
  };

  const changeActionVisible = () => {
    const hideActionVisible = hideAnimation(".collapsible__action--visible");
    const hideActionHidden = hideAnimation(".collapsible__action--hidden");

    if (actionVisible.hidden) {
      hideActionVisible.play();

      actionVisible.hidden = false;
      actionHidden.hidden = true;
    } else {
      hideActionHidden.play();

      actionVisible.hidden = true;
      actionHidden.hidden = false;
    }
  };

  const hideContent = hideAnimation(".collapsible__content");
  hideContent.pause();

  document
    .querySelector(".collapsible__button")
    .addEventListener("click", () => {
      changeActionVisible();
      if (hideContent.playState === "paused") {
        hideContent.play();
      } else {
        hideContent.reverse();
      }
    });
});
