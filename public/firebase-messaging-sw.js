// importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
// importScripts(
//   "https://www.gstatic.com/firebasejs/8.10.0/firebase-analytics.js"
// );

// firebase.initializeApp({
//   messagingSenderId: "13687249253",
// });

// const initMessaging = firebase.messaging();

importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}

firebase.initializeApp({
  messagingSenderId: "13687249253",
  appId: "1:13687249253:web:98e71096392b9d7c7d298c",
  apiKey: "AIzaSyBG2A27rmFk-iGUAQtdPw3IduMw5cOVVWM",
  projectId: "madebyubaid",
  //   authDomain: "madebyubaid.firebaseapp.com",
  //   storageBucket: "madebyubaid.appspot.com",
  //   measurementId: "G-5Y4HGJ774Z",
});

const initMessaging = firebase.messaging();
