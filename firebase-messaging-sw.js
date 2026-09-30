/*
  GlowTrack Firebase Cloud Messaging service worker template.

  BEFORE using background FCM:
  1. Create a Firebase Web App.
  2. Add the Firebase web config below.
  3. Enable Cloud Messaging and generate a Web Push/VAPID key.
  4. Load the Firebase Messaging compat scripts below.
  5. Replace the placeholders with your project values.

  Keep this file at the site root.

  Note: The base GlowTrack app already has an offline service worker (sw.js).
  If you use Firebase's service worker directly for FCM, consolidate the
  offline caching and Firebase handlers into ONE service worker at root.
*/

// importScripts(
//   "https://www.gstatic.com/firebasejs/12.0.0/firebase-app-compat.js",
//   "https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging-compat.js"
// );

// firebase.initializeApp({
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT.firebasestorage.app",
//   messagingSenderId: "YOUR_SENDER_ID",
//   appId: "YOUR_APP_ID"
// });

// const messaging = firebase.messaging();
// messaging.onBackgroundMessage((payload) => {
//   const n = payload.notification || {};
//   self.registration.showNotification(n.title || "GlowTrack", {
//     body: n.body || "Skincare routine time.",
//     icon: "/icons/icon-192.png",
//     badge: "/icons/icon-192.png"
//   });
// });
