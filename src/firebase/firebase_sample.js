import * as firebase from 'firebase'

// Rename this file to firebase.js and copy the config from firebase. Currently in the "Authentication"
// menu on "Web Setup" button
var config = {
  apiKey: '<YOUR_API_KEY>',
  authDomain: '<YOUR_DOMAIN>',
  databaseURL: '<YOUR_DATABASE_URL>',
  projectId: '<YOUR_PROJECT_ID>',
  storageBucket: '<YOUR_STORAGE_BUCKET>',
  messagingSenderId: '<YOUR_MESSAGE_SENDER_ID>'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()

export {
  auth
}
