import firebase from 'firebase';

/*Firebase configuration elements - data is in .env*/
const config = {
  apiKey: process.env.NEXT_APP_API_KEY,
  authDomain: process.env.NEXT_APP_AUTH_DOMAIN,
  projectId: process.env.NEXT_APP_PROJECT_ID,
  storageBucket: process.env.NEXT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_APP_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_APP_APP_ID,
  measurementId: process.env.NEXT_APP_MEASUREMENT_ID,
};

if(!firebase.app.length) {
  firebase.initializeApp(config);
}

export default firebase;