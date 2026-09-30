# GlowTrack — PWA edition

## Included
- Installable PWA manifest
- Android-friendly standalone display
- Offline service worker/cache
- Local routine progress and streak tracking
- Install prompt
- Morning/night reminder settings
- Notification permission UI
- Day 1–90 routine logic
- Firebase Cloud Messaging service-worker/client templates

## Important notification limitation
The PWA can be installed and work offline, but exact scheduled background notifications
are not guaranteed by a plain browser timer. For reminders while the app is closed,
connect Firebase Cloud Messaging (FCM) to a trusted backend that schedules the messages.

## Publish
Host the folder on HTTPS (GitHub Pages is suitable for the frontend).
Then open the HTTPS URL on Android Chrome and install the PWA.

## Firebase next step
1. Create a Firebase project and Web App.
2. Enable Cloud Messaging.
3. Generate a Web Push/VAPID key.
4. Fill the Firebase web configuration into the client app.
5. Consolidate Firebase's messaging service worker with sw.js OR configure the app to use
   firebase-messaging-sw.js at the root.
6. Request notification permission and obtain an FCM registration token.
7. Store the token with the user's reminder settings.
8. Use a trusted backend/cloud function to send the morning/night FCM notifications.

Never put Firebase Admin SDK private keys or server credentials in frontend files.
