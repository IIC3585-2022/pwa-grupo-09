import {post_tweet} from './routes.js'

window.onload = () => {
  'use-strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js');
  };
};

const button = $("#tweet-btn");
let inputs = [];

const showInput = (input, user) => {
  let toBeShown = $(`
    <div id="tweet-text" class="d-flex flex-column tweet-text">
      <div class="d-flex">
        <img class="tweet-user" src="./images/person-icon.jpeg" alt="avatar">
        <div class="d-flex flex-column">
          <div class="d-flex">
            <p class="bold">Usuario</p>
            <p class="tweet-account">${user}</p>
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
  let user = $("#user_input")[0].value;
  if (input === "" && user == ""){
    return false;
  };
  showInput(input, user);
  $('#tweet-input')[0].value = "";
  $("#user_input")[0].value = "";
  post_tweet(user, input, 'asdgfhjgfds');
  return true;
});
