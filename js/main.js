import { post_tweet } from './routes.js'

window.onload = () => {
  'use-strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js');
  };
};

let Token = "";

const firebaseConfig = {
  apiKey: "AIzaSyB_DT4Fw39iR9kjttt4dECEQUKAjRdqSSg",
  authDomain: "basic-pwa-58529.firebaseapp.com",
  projectId: "basic-pwa-58529",
  storageBucket: "basic-pwa-58529.appspot.com",
  messagingSenderId: "278580471312",
  appId: "1:278580471312:web:686e0ddcec6ba592d94c95",
  measurementId: "G-5KXJZFXDEJ"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging
  .requestPermission()
  .then(() => {
    return messaging.getToken();
  })
  .then(token => {
    Token = token;
  })
  .catch(err => {
    console.log("Unable to get permission to notify", err);
  });


messaging.onMessage(payload => {
  console.log(payload.notification)
  const { title, ...options } = payload.notification;
  // let notification = new Notification(title, options);
  // showInput()
});

const button = $("#tweet-btn");

const showInput = (input, user) => {
  $('#empty-tweet').remove();
  let toBeShown = `
    <div id="tweet-text" class="d-flex flex-column tweet-text">
      <div class="d-flex">
        <img class="tweet-user" src="./images/person-icon.jpeg" alt="avatar">
        <div class="d-flex flex-column">
          <div class="d-flex">
            <p class="bold">${user}</p>
            <p class="tweet-account">@${user}</p>
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
  `;

  $("#tweets-box").append(toBeShown);
};

const getTweet = () => {
  fetch('http://localhost:3000/tweets', {
    method: 'get'
  }).then(response => response.json())
    .then(json =>{
      json.map(tweet => showInput(tweet.tweet, tweet.user) )  
    })
    .catch((err)=>{
      console.log('An error occurred while retrieving token. ', err);
  });
}

button.click(async (e) => {
  $('#empty-tweet').remove();
  let input = $('#tweet-input')[0].value;
  let user = $("#user_input")[0].value;
  if (input === "" && user == ""){
    return false};
  $('#tweet-input')[0].value = "";
  post_tweet(user, input, Token);

  showInput(input, user);
  return true;
});

getTweet(showInput);
