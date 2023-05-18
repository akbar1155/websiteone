import React from "react";

const Visit = () => {
  var counterContainer = document.querySelector(".website-counter");
  var resetButton = document.querySelector("#reset");
  var visitCount = localStorage.getItem("page_view");

  // Check if page_view entry is present
  if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
  } else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
  }
  counterContainer.innerHTML = visitCount;

  // Adding onClick event listener
  resetButton.addEventListener("click", () => {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
    counterContainer.innerHTML = visitCount;
  });
  return (
    <div>
      {/* <div>Website visit count:</div> */}
      <div class="website-counter"></div>
      <button id="reset">Reset</button>
    </div>
  );
};

export default Visit;
