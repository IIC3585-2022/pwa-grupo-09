window.onload = () => {
  'use-strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js');
  };
};

const button = $("#tweet-btn");
let inputs = [];

const showInput = (input) => {
  let toBeShown = $(`
    <div id="tweet-text" class="d-flex flex-column tweet-text">
      <div class="d-flex">
        <img class="tweet-user" src="./images/person-icon.jpeg" alt="avatar">
        <div class="d-flex flex-column">
          <div class="d-flex">
            <p class="bold">Usuario</p>
            <p class="tweet-account">@usuario</p>
          </div>
          <p>${input}</p>
        </div>
      </div>
      <div class="d-flex">
        <p class="tweet-user"></p>
        <div class="d-flex justify-content-between tweet-icon-box">
          <i class="fa-solid fa-comment"></i>
          <i class="fa-solid fa-share"></i>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-share-nodes"></i>
        </div>
      </div>
    </div>
  `);

  $("#tweets-box").append(toBeShown);
};

button.click((e) => {
  $('#empty-tweet').remove()
  let input = $('#tweet-input')[0].value;
  if (input === ""){
    return false;
  };
  showInput(input);
  $('#tweet-input')[0].value = "";
  return true;
});
