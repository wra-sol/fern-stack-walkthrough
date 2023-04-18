import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDHaH3upBNJTvqrWDs1invZpxqVAt9CiyA',
  authDomain: 'fern-walkthrough.firebaseapp.com',
  projectId: 'fern-walkthrough',
  storageBucket: 'fern-walkthrough.appspot.com',
  messagingSenderId: '943562711269',
  appId: '1:943562711269:web:a3f555407981f81716f40c',
  databaseURL: 'https://fern-walkthrough-default-rtdb.firebaseio.com',
};

const app = initializeApp (firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export {app, auth, db};
