/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */
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
    hideAnimation(".collapsible__action--visible").play();
    hideAnimation(".collapsible__action--hidden").play();

    actionVisible.hidden = !actionVisible.hidden;
    actionHidden.hidden = !actionHidden.hidden;
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