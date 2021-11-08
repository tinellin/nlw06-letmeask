import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, remove, update, get, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSASGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

//Realtime Database (No-SQL)
const db = getDatabase();

//Firebase Auth
const auth = getAuth(app);

export { auth, db, ref, push, remove, update, get, onValue };
