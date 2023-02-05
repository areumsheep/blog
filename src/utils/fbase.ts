import { initializeApp } from 'firebase/app';
import { getDatabase, increment, ref, update, child, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
  measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);

export const incrementView = (id: string) => {
  const updates: any = {};
  updates[`/views/${id}`] = increment(1);
  update(dbRef, updates);
};

export const showViews = (id: string) => get(child(dbRef, `views/${id}`));
