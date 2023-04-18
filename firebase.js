import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: '<YourAPIKey>',
  authDomain: 'YourDomain.firebaseapp.com',
  projectId: 'YourApp',
  storageBucket: 'YourApp.appspot.com',
  messagingSenderId: 'YourID',
  appId: 'YourAppId',
  databaseURL: 'https://YourDomain.firebaseio.com',
};

const firebase = initializeApp (firebaseConfig);
const auth = getAuth(firebase);
const db = getDatabase(firebase);

export {firebase, auth, db};
