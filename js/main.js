window.onload = () => {
  'use-strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js');
  };
};

const tokenString = document.getElementById("token");
const errorMessage = document.getElementById("error");
const message = document.getElementById("message");

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
    message.innerHTML = "Notifications allowed";
    return messaging.getToken();
  })
  .then(token => {
    tokenString.innerHTML = "Token Is : " + token;
    //subscribeTokenToTopic(token, "allUsers");
  })
  .catch(err => {
    errorMessage.innerHTML = errorMessage.innerHTML + "; " + err;
    console.log("Unable to get permission to notify", err);
  });

messaging.onMessage(payload => {
  console.log("Message received. ", payload);
  const { title, ...options } = payload.notification;
});
