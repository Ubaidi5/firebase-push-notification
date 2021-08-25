import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./firebase";

function App() {
  function getMessagingObject() {
    // [START messaging_get_messaging_object]
    const messaging = firebase.messaging();
    // [END messaging_get_messaging_object]
  }

  function receiveMessage() {
    const messaging = firebase.messaging();
    // [START messaging_receive_message]
    // Handle incoming messages. Called when:
    // - a message is received while the app has focus
    // - the user clicks on an app notification created by a service worker
    //   `messaging.onBackgroundMessage` handler.
    messaging.onMessage((payload) => {
      console.log("Message received. ", payload);
      // ...
    });
    // [END messaging_receive_message]
  }

  function getToken() {
    const messaging = firebase.messaging();

    messaging
      .getToken({ vapidKey: "<YOUR_PUBLIC_VAPID_KEY_HERE>" })
      .then((currentToken) => {
        if (currentToken) {
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });
  }

  function requestPermission() {
    // [START messaging_request_permission]
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
        // TODO(developer): Retrieve a registration token for use with FCM.
        // ...
      } else {
        console.log("Unable to get permission to notify.");
      }
    });
    // [END messaging_request_permission]
  }

  function deleteToken() {
    const messaging = firebase.messaging();

    // [START messaging_delete_token]
    messaging
      .deleteToken()
      .then(() => {
        console.log("Token deleted.");
        // ...
      })
      .catch((err) => {
        console.log("Unable to delete token. ", err);
      });
    // [END messaging_delete_token]
  }

  useEffect(() => {
    // requestPermission();
    // getToken();

    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token) => {
        console.log("Token : ", token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
