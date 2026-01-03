// firebase-messaging-sw.js

// eslint-disable-next-line no-undef
importScripts("./firebase-app-compat.js", "./firebase-messaging-compat.js");

// eslint-disable-next-line no-undef
firebase.initializeApp({
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
});

// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./assets/icon128.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
